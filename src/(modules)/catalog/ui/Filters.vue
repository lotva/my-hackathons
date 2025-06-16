<template>
	<search
		class="filters"
		aria-label="Фильтры"
	>
		<Select
			v-model="filters.format"
			class="select _format"
			:options="FORMATS"
			label="Формат"
			placeholder="Онлайн и оффлайн"
		/>

		<Select
			v-model="filters.audience"
			class="select"
			:options="audience"
			label="Специализация"
			placeholder="Любая"
		/>

		<Select
			v-model="filters.typeParticipant"
			class="select"
			:options="PARTICIPANTS"
			label="Кто участвует"
			placeholder="Все"
		/>

		<Select
			v-model="isActualProxy"
			class="select"
			:options="IS_ACTUAL_OPTIONS"
			label="Когда старт"
			placeholder="В любое время"
		/>
	</search>
</template>

<script setup lang="ts">
	import { Select } from '@/(core)/ui/Select'
	import { useQuery } from '@tanstack/vue-query'
	import { computed, onServerPrefetch } from 'vue'

	import { fetchAudience } from '../api/queries'
	import { FORMATS, IS_ACTUAL_OPTIONS, PARTICIPANTS } from '../config/filters'
	import { TFilters } from '../config/types'

	const props = defineProps<{
		modelValue: TFilters
	}>()

	const emit = defineEmits<{
		'update:modelValue': [TFilters]
	}>()

	const query = useQuery({
		queryFn: fetchAudience,
		queryKey: ['audience'],
		suspense: true,
	})

	onServerPrefetch(query.suspense)

	const audience = computed(() => query.data.value ?? [])

	const isActualProxy = computed<string>({
		get() {
			if (filters.value.isActual === undefined) {
				return ''
			}
			return String(filters.value.isActual)
		},
		set(value: string) {
			if (value === 'true') {
				filters.value.isActual = true
			} else if (value === 'false') {
				filters.value.isActual = false
			} else {
				filters.value.isActual = undefined
			}
		},
	})

	const filters = computed({
		get: () => props.modelValue,
		set: (value) => emit('update:modelValue', value),
	})
</script>

<style scoped>
	.filters {
		display: flex;
		flex-direction: column;
		gap: var(--gap-2) calc(var(--gap) / 2);

		@media (width >= 500px) {
			flex-flow: row wrap;
			justify-content: space-evenly;
		}

		@media (width >= 800px) {
			justify-content: space-between;
		}
	}

	.select {
		--width: 9em;

		&._format {
			--width: 12em;
		}
	}
</style>
