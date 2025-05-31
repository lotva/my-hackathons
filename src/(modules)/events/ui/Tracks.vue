<template>
	<section
		v-if="tracks.length > 0"
		aria-labelledby="tracks"
	>
		<p id="tracks">Какие проекты предстоит делать:</p>

		<ul class="list">
			<li
				v-for="track in tracks"
				:key="track.name"
				class="item"
			>
				<article class="track">
					<h3 class="track-title root-metrics-fix">{{ track.name }}</h3>

					<p class="track-description">{{ track.description }}</p>
				</article>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	defineProps<{
		tracks: components['schemas']['HackathonFull']['tracks']
	}>()
</script>

<style scoped>
	.list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap-2) var(--gap);
		margin-block-start: calc(var(--gap) * 1.5);
	}

	.item {
		flex-basis: max(310px, calc(50% - var(--gap)));
		flex-grow: 1;
	}

	.track {
		container-type: inline-size;
		display: grid;
		row-gap: var(--gap-2);
		border-block-start: 1px solid var(--tx-3);
	}

	.track-title {
		margin-block-start: var(--gap-relative);

		font-size: 2em;
		font-weight: 500;
		line-height: 0.9;
		letter-spacing: -0.03em;
	}

	.track-description {
		font-size: 0.75em;
		line-height: 1.2;
		letter-spacing: 0.01em;

		@container (width >= 18em) {
			max-inline-size: 17rem;
		}
	}
</style>
