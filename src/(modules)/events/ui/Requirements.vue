<template>
	<template v-if="notes.length > 0">
		<section aria-labelledby="requirements">
			<p
				id="requirements"
				class="root-metrics-fix"
			>
				Условия:
			</p>

			<ul class="list">
				<li
					v-for="note in notes"
					:key="note"
					class="item"
				>
					<p class="accent">{{ note }}</p>
				</li>

				<li
					v-if="requirements.length > 0"
					class="item"
				>
					<h3 class="accent root-metrics-fix">Кто участвует?</h3>

					<Content>
						<ul class="description">
							<li
								v-for="req in requirements"
								:key="req"
							>
								{{ req }}
							</li>
						</ul>
					</Content>
				</li>
			</ul>
		</section>
	</template>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	import { Content } from '@/(core)/ui/Content'

	defineProps<{
		notes: components['schemas']['HackathonFull']['notes']
		requirements: components['schemas']['HackathonFull']['requirements']
	}>()
</script>

<style scoped>
	.list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 18em), 1fr));
		gap: var(--gap-2) var(--gap);
		margin-block-start: calc(var(--gap) * 1.5);
	}

	.item {
		container-type: inline-size;
		display: flex;
		flex-direction: column;
		row-gap: var(--gap-2);

		border-block-start: 1px solid var(--tx-3);
	}

	.accent {
		margin-block-start: var(--gap-relative);

		font-size: 2em;
		font-weight: 500;
		line-height: 0.9;
		color: var(--strong);
		letter-spacing: -0.03em;
	}

	.description {
		font-size: 0.75em;
		line-height: 1.2;
		letter-spacing: normal;

		@container (18em <= width <= 37em) {
			max-inline-size: 17rem;
		}
	}
</style>
