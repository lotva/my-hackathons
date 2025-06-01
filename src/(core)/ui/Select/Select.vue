<template>
	<Select.Root
		v-model="internalArray"
		:collection="collection"
		:positioning="{
			gutter: 4,
		}"
	>
		<Select.Label class="note _is-label root-metrics-fix">
			{{ label }}
		</Select.Label>

		<Select.Control>
			<Select.Trigger class="button">
				<Select.ValueText class="root-metrics-fix" />

				<Select.Indicator class="root-metrics-fix">›</Select.Indicator>
			</Select.Trigger>
		</Select.Control>

		<Select.Positioner>
			<Select.Content>
				<Select.Item
					v-for="item in collection"
					:key="item.value"
					:item="item"
				>
					<Select.ItemText class="root-metrics-fix">
						{{ item.label }}
					</Select.ItemText>

					<Select.ItemIndicator class="root-metrics-fix">
						✓
					</Select.ItemIndicator>
				</Select.Item>
			</Select.Content>
		</Select.Positioner>

		<Select.HiddenSelect />
	</Select.Root>
</template>

<script setup lang="ts">
	import { createListCollection, Select } from '@ark-ui/vue/select'
	import { computed } from 'vue'

	type NormalizedOption = { label: string; value: string }
	type Option = string | { label: string; value: string }

	const props = withDefaults(
		defineProps<{
			clearable?: boolean
			defaultValue?: string
			label: string
			modelValue: string | string[] | undefined
			options: Option[]
			placeholder: string | undefined
		}>(),
		{
			clearable: true,
			defaultValue: undefined,
		},
	)

	const emit = defineEmits<{
		'update:modelValue': [string | string[] | undefined]
	}>()

	const parsedOptions = computed<NormalizedOption[]>(() =>
		props.options.map((opt) =>
			typeof opt === 'string'
				? { label: opt, value: opt }
				: { label: opt.label, value: opt.value },
		),
	)

	const allOptions = computed(() => {
		if (props.placeholder) {
			return [{ label: props.placeholder, value: '' }, ...parsedOptions.value]
		}

		return parsedOptions.value
	})

	const collection = computed(() =>
		createListCollection({
			items: allOptions.value,
			itemToString: (index) => index.label,
			itemToValue: (index) => index.value,
		}),
	)

	const internalArray = computed<string[]>({
		get() {
			if (Array.isArray(props.modelValue)) {
				return props.modelValue
			}
			if (typeof props.modelValue === 'string') {
				return [props.modelValue]
			}
			if (props.defaultValue !== undefined) {
				return [props.defaultValue]
			}
			return [allOptions.value[0].value]
		},
		set(updatedArray: string[]) {
			if (updatedArray.length > 1) {
				emit('update:modelValue', updatedArray)
			} else if (updatedArray.length === 1 && updatedArray[0] !== '') {
				emit('update:modelValue', updatedArray[0])
			} else {
				// eslint-disable-next-line unicorn/no-useless-undefined
				emit('update:modelValue', undefined)
			}
		},
	})
</script>

<style scoped>
	[data-scope='select'] {
		&[data-part='root'] {
			display: grid;
			row-gap: calc(var(--gap) / 2);
		}

		&[data-part='control'] {
			margin-inline-start: -0.15em;
		}

		&[data-part='trigger'] {
			display: flex;
			column-gap: var(--gap);
			justify-content: space-between;

			min-inline-size: var(--width, 5em);

			background-color: var(--ui);

			&:hover {
				background-color: var(--ui-2);
			}
		}

		&[data-part='indicator'] {
			rotate: 90deg;

			&[data-state='open'] {
				rotate: -90deg;
			}
		}

		&[data-part='label'] {
			display: block;
		}

		&[data-part='content'] {
			position: relative;
			z-index: 2;

			display: none;

			min-inline-size: var(--reference-width);
			padding: calc(var(--gap) / 4);
			border-radius: 0.625em;

			background-color: var(--ui);

			&[data-state='open'] {
				display: grid;
			}
		}

		&[data-part='content']::before {
			@supports (anchor-name: --a) {
				pointer-events: none;
				content: '';

				position: absolute;
				z-index: -1;
				inset-block-start: anchor(--item top);
				inset-inline-start: anchor(--item left);

				inline-size: anchor-size(--item width);
				block-size: anchor-size(--item height);
				border-radius: calc(0.625em - var(--gap) / 4);

				background-color: var(--ui-2);

				transition-timing-function: cubic-bezier(0.22, 1.41, 0.36, 1);
				transition-duration: 0.2s;
				transition-property:
					inset-block-start, inset-inline-start, inline-size, block-size;
			}
		}

		&[data-part='item'] {
			cursor: pointer;

			display: flex;
			align-items: center;
			justify-content: space-between;

			padding: calc(var(--gap) * 0.75) calc(var(--gap) / 2) calc(var(--gap) / 2);
			border-radius: calc(0.625em - var(--gap) / 4);

			&[data-state='checked'] {
				color: var(--accent);
			}

			&:hover {
				anchor-name: --item;
				position-anchor: --item;

				@supports not (anchor-name: --a) {
					background-color: var(--ui-2);
				}
			}
		}

		&[data-part='item-text'] {
			display: block;
		}
	}
</style>
