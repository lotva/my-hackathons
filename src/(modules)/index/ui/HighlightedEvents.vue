<template>
	<div class="highlighted-events">
		<EventCard
			v-for="(event, index) in hackathons?.slice(1, 5) || []"
			:key="event.name"
			class="event"
			:event="event"
			:is-clipped="[1, 4].includes(index + 1)"
		/>
	</div>
</template>

<script setup lang="ts">
	import { EventCard } from '@/(modules)/events'

	import type { Data } from '../pages/+data'

	defineProps<{ hackathons: Data['data'] }>()
</script>

<style scoped>
	.highlighted-events {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: calc(var(--gap) / 4);
		margin-block-end: var(--gap-3);

		.event:nth-child(1) {
			--cover-url: url('/images/covers/1.jpg');

			@media (width >= 700px) {
				grid-column: span 2;
			}
		}

		.event:nth-child(2) {
			--cover-url: url('/images/covers/2.jpg');
			--label-color: var(--flexoki-paper);
			--title-color: var(--flexoki-black);
		}

		.event:nth-child(3) {
			--label-color: var(--flexoki-black);
			--title-color: var(--flexoki-black);
			--cover-url: url('/images/covers/1.jpg');
		}

		.event:nth-child(4) {
			--cover-url: url('/images/covers/3.jpg');

			@media (width >= 700px) {
				grid-column: span 2;
			}
		}

		@media (width >= 700px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (width >= 900px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
