<template>
	<div>
		<ul class="list">
			<li
				v-for="event in events"
				:key="event.id"
				:class="['item', { '_is-long': checkIfTitleLong(event.name) }]"
			>
				<EventCard
					:event="event"
					class="card"
					is-in-grid
				/>
			</li>
		</ul>

		<p v-if="events === undefined">Загрузка...</p>

		<p v-if="events?.length === 0">Таких хакатонов нет :–(</p>

		<button
			:class="['button', { _hidden: !hasMore }]"
			type="button"
			@click="$emit('loadMore')"
		>
			<span class="root-metrics-fix">Загрузить ещё</span>
		</button>
	</div>
</template>

<script setup lang="ts">
	import { components } from '@/(core)/api/openapi'
	import { checkIfTitleLong, EventCard } from '@/(modules)/events'

	defineProps<{
		events: components['schemas']['HackathonShort'][] | undefined
		hasMore: boolean
	}>()

	defineEmits<{
		loadMore: [void]
	}>()
</script>

<style scoped>
	.grid {
		min-block-size: 70vb;
	}

	.list {
		container-type: inline-size;
		display: grid;
		grid-auto-flow: dense;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 13em), 1fr));
		gap: calc(var(--gap) / 4);
	}

	.item {
		&._is-long {
			@container (min-width: 28em) {
				grid-column: 2 span;
			}
		}
	}

	.card {
		block-size: 100%;
	}

	.button {
		margin-block-start: var(--gap);

		&._hidden {
			visibility: hidden;
		}
	}
</style>
