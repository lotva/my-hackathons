<template>
	<article class="featured-event inverted clickable-area">
		<small v-if="event.topic">{{ event.topic }} · {{ location }}</small>

		<small v-else>{{ location }}</small>

		<h2 class="title damn-metrics-fix">{{ event.name }}</h2>

		<p>
			<ActionLink
				class="clickable-area-link"
				:href="
					getRoute('/events/@id', {
						params: {
							id: event.id,
						},
					})
				"
			>
				Начало — <Time :date="event.dateStart" />
			</ActionLink>
		</p>
	</article>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	import { getRoute } from '@/(core)/route-tree.gen'
	import { ActionLink } from '@/(core)/ui/ActionLink'
	import { Time } from '@/(core)/ui/Time'
	import { computed } from 'vue'

	interface IProps {
		event: components['schemas']['HackathonShort']
	}

	const props = defineProps<IProps>()

	const location = computed(() => {
		if (props.event.format === 'Оффлайн' && props.event.location) {
			return props.event.location.join(', ')
		}

		return props.event.format
	})
</script>

<style scoped>
	.featured-event {
		padding: var(--gap) clamp(calc(var(--gap) / 2), 1vi, var(--gap-2))
			var(--gap-2);

		color: var(--strong);

		background-color: var(--background);
		background-image: url('/images/covers/featured-event.webp');
		background-position: center;
		background-size: cover;
		background-blend-mode: color;

		@media (prefers-color-scheme: dark) {
			background-blend-mode: darken;
		}

		.title {
			margin-block: 20vb var(--gap-relative);

			font-family: Damn, sans-serif;
			font-size: 4.5em;
			line-height: 0.75;
			text-wrap: balance;
			letter-spacing: -0.03em;
		}
	}
</style>
