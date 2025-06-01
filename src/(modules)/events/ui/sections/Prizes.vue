<template>
	<EventSection
		v-if="prizes.length > 0"
		id="prizes"
		label="Призы"
	>
		<ul class="list">
			<li
				v-for="prize in prizes"
				:key="prize.title"
				class="prizes-item"
			>
				<article class="prize">
					<h3 class="title damn-metrics-fix">
						{{ prize.amount || prize.title }}
					</h3>

					<p class="caption">{{ prize.description || prize.title }}</p>
				</article>
			</li>
		</ul>
	</EventSection>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	import EventSection from './EventSection.vue'

	defineProps<{
		prizes: components['schemas']['HackathonFull']['prizes']
	}>()
</script>

<style scoped>
	.prizes {
		row-gap: var(--gap-2);

		.list {
			display: flex;
			grid-column: 2 span;
			flex-wrap: wrap;
			gap: var(--gap-3);
			justify-content: center;

			text-align: center;
		}

		.prizes-item:first-child {
			flex-basis: 100%;
		}

		.prize {
			display: grid;
			justify-items: center;

			li:first-child & {
				--strong: var(--accent);

				color: var(--accent);
			}
		}

		.title {
			margin-block: 0 var(--gap-relative);

			font-family: Damn, sans-serif;
			font-size: min(20vi, 7.5em);
			line-height: 0.8;
			color: var(--strong);
			text-wrap: balance;
			letter-spacing: -0.03em;

			.prizes-item:not(:first-child) & {
				font-size: min(20vi, 3.75em);
			}
		}

		.caption {
			max-inline-size: var(--paragraph-width);
			line-height: 1.2;
			text-wrap: balance;
		}
	}
</style>
