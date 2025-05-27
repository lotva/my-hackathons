<template>
	<template v-if="prizes.length > 0">
		<section aria-labelledby="prizes">
			<h2
				id="prizes"
				class="root-metrics-fix"
			>
				Призы
			</h2>

			<ul class="list">
				<li
					v-for="prize in prizes"
					:key="prize.title"
				>
					<article class="prize">
						<h3 class="title damn-metrics-fix">
							{{ prize.amount || prize.title }}
						</h3>

						<p class="caption">{{ prize.description || prize.title }}</p>
					</article>
				</li>
			</ul>
		</section>
	</template>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	defineProps<{
		prizes: components['schemas']['HackathonFull']['prizes']
	}>()
</script>

<style scoped>
	.list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap-2);
		margin-block-start: var(--gap-2);
	}

	.prize {
		display: grid;

		li:first-child & {
			--strong: var(--accent);

			color: var(--accent);
		}
	}

	.title {
		margin-block-end: var(--gap-relative);

		font-family: Damn, sans-serif;
		font-size: min(16vi, 4.5em);
		line-height: 0.8;
		color: var(--strong);
		letter-spacing: -0.03em;
	}

	.caption {
		max-inline-size: var(--paragraph-width);
	}
</style>
