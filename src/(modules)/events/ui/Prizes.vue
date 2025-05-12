<template>
	<template v-if="prizes.length > 0">
		<div>
			<h2>Призы</h2>

			<ul class="list">
				<li
					v-for="prize in prizes"
					:key="prize.title"
				>
					<article class="prize">
						<h3 class="title">{{ prize.amount || prize.title }}</h3>

						<p>{{ prize.description || prize.title }}</p>
					</article>
				</li>
			</ul>
		</div>
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
		transform: skew(-10deg) rotate(-10deg);
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap-3) var(--gap-2);

		@media (width >= 600px) {
			transform: skew(-10deg) rotate(-10deg) translateY(-3vi);
		}
	}

	.prize {
		display: grid;
		row-gap: var(--gap);

		li:first-child & {
			--strong: var(--accent);

			color: var(--accent);
		}
	}

	.title {
		font-family: Drabina, sans-serif;
		font-size: min(9vi, 2.5em);
		line-height: 1;
		color: var(--strong);
	}
</style>
