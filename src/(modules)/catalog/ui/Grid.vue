<template>
	<div class="grid">
		<EventCard
			v-for="event in events"
			:key="event.id"
			:class="['card', { '_is-long': checkIfTitleLong(event.name) }]"
			:event="event"
			is-in-grid
		/>

		<p v-if="events === undefined">Загрузка...</p>

		<p v-if="events?.length === 0">Таких хакатонов нет :–(</p>
	</div>
</template>

<script setup lang="ts">
	import { components } from '@/(core)/api/openapi'
	import { checkIfTitleLong, EventCard } from '@/(modules)/events'

	defineProps<{
		events: components['schemas']['HackathonShort'][] | undefined
	}>()
</script>

<style scoped>
	.grid {
		container-type: inline-size;
		display: grid;
		grid-auto-flow: dense;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 13em), 1fr));
		gap: calc(var(--gap) / 4);

		min-block-size: 60vb;
	}

	.card {
		&._is-long {
			@container (min-width: 28em) {
				grid-column: 2 span;
			}
		}
	}
</style>
