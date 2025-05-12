<template>
	<template v-if="tracks.length > 0">
		<div>
			<h2>Треки</h2>

			<ul class="list">
				<li
					v-for="track in tracks"
					:key="track.name"
				>
					<article class="track">
						<h3 class="track-title">{{ track.name }}</h3>

						<p>{{ track.description }}</p>
					</article>
				</li>
			</ul>
		</div>
	</template>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	defineProps<{
		tracks: components['schemas']['HackathonFull']['tracks']
	}>()
</script>

<style scoped>
	.list {
		transform: skew(-10deg) rotate(-10deg);
		display: grid;
		row-gap: var(--gap-3);

		@media (width >= 600px) {
			transform: skew(-10deg) rotate(-10deg) translateY(-4vi);
		}
	}

	.track {
		display: grid;
		row-gap: var(--gap);
	}

	.track-title {
		font-family: Drabina, sans-serif;
		font-size: min(9vi, 2.5em);
		line-height: 1;
		color: var(--strong);
	}
</style>
