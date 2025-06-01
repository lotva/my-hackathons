<template>
	<div class="register">
		<Label
			v-if="isActual && deadline"
			class="label"
		>
			Дедлайн —
			<Time :date="deadline" />
		</Label>

		<a
			v-if="link"
			class="action"
			:href="link"
			target="_blank"
		>
			<span class="root-metrics-fix">
				<template v-if="isActual">Зарегистрироваться</template>

				<template v-else>Посетить сайт</template></span
			>
		</a>
	</div>
</template>

<script setup lang="ts">
	import { IDateInput } from '@/(core)/lib/formatDate'
	import { Label } from '@/(core)/ui/Label'
	import { Time } from '@/(core)/ui/Time'

	defineProps<{
		deadline: IDateInput
		isActual: boolean
		link: string
	}>()
</script>

<style scoped>
	.register {
		position: sticky;
		inset-block-end: 0;

		display: grid;
		row-gap: calc(var(--gap) / 2);
		justify-content: center;

		margin-inline: min(calc(var(--gap) * -1), -4%);

		background-image: linear-gradient(
			to top,
			var(--background) 20%,
			transparent 100%
		);

		.label {
			color: var(--strong);
		}

		.action {
			--underline: none;

			display: inline-flex;

			inline-size: fit-content;
			padding: calc(var(--gap-relative) / 2 + var(--button-optical-compensator))
				var(--gap-relative) calc(var(--gap-relative) / 2);

			font-size: min(2.5em, 8vi);
			color: var(--background);
			letter-spacing: -0.04em;

			background-color: var(--accent);

			&:hover {
				color: var(--accent);
				background-color: var(--strong);
			}

			&:focus-visible {
				outline: var(--accent) solid var(--outline-thickness);
				outline-offset: 0.05em;
			}
		}
	}
</style>
