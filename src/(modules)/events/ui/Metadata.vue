<template>
	<dl class="metadata">
		<div
			v-if="event.dateStart"
			class="item"
		>
			<dt class="dt uppercase root-metrics-fix">Дата начала</dt>

			<dd class="dd damn-metrics-fix"><Time :date="event.dateStart" /></dd>
		</div>

		<div
			v-if="event.dateEnd"
			class="item"
		>
			<dt class="dt uppercase root-metrics-fix">Дата окончания</dt>

			<dd class="dd damn-metrics-fix"><Time :date="event.dateEnd" /></dd>
		</div>

		<div
			v-if="event.format"
			class="item"
		>
			<dt class="dt uppercase root-metrics-fix">Формат</dt>

			<dd class="dd damn-metrics-fix">{{ event.format }}</dd>
		</div>

		<div
			v-if="event.location.length > 0"
			class="item"
		>
			<dt class="dt uppercase root-metrics-fix">Локация</dt>

			<dd class="dd damn-metrics-fix">{{ event.location.join(', ') }}</dd>
		</div>

		<div
			v-if="event.stack"
			class="item"
		>
			<dt class="dt uppercase root-metrics-fix">Стек</dt>

			<dd class="dd damn-metrics-fix">{{ event.stack }}</dd>
		</div>

		<div
			v-if="event.team_size"
			class="item"
		>
			<dt class="dt uppercase root-metrics-fix">Состав команды</dt>

			<dd class="dd damn-metrics-fix">
				{{ event.team_size }},
				{{ event.typeParticipant.join(', ').toLowerCase() }}
			</dd>
		</div>
	</dl>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	import { Time } from '@/(core)/ui/Time'

	defineProps<{
		event: components['schemas']['HackathonFull']
	}>()
</script>

<style scoped>
	.metadata {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 24em), 1fr));
		gap: var(--gap-2) var(--gap);

		.item {
			display: flex;
			flex-direction: column;
			padding-block-start: calc(var(--gap) / 2);
			border-block-start: 1px solid var(--tx-3);
		}

		.dt {
			margin-block-end: calc(var(--gap) * 0.75);
			font-size: 0.6rem;
			font-weight: 500;
		}

		.dd {
			font-family: Damn, sans-serif;
			font-size: 4.5rem;
			line-height: 0.8;
			color: var(--strong);
			letter-spacing: -0.03em;

			:deep(.caps) {
				margin-inline-end: 0;
				letter-spacing: inherit;
			}
		}
	}
</style>
