<template>
	<section
		class="event-section"
		:class="id"
		:aria-labelledby="id"
	>
		<p :id="id">{{ label }}</p>

		<slot></slot>
	</section>
</template>

<script setup lang="ts">
	defineProps<{
		id: string
		label: string
	}>()
</script>

<style scoped>
	.event-section {
		@mixin child-line-gap 1.75, 1, 0.9;

		display: grid;
		row-gap: calc(var(--gap) * 1.5);
		border-block-start: 1px solid var(--tx-3);
		line-height: 0.9;

		@media (width >= 700px) {
			grid-template-columns: 1fr 7fr;
			column-gap: var(--gap);
		}

		&:deep() {
			.label {
				@media (width <= 700px) {
					&::after {
						content: ':';
					}
				}
			}

			.list {
				display: grid;
				row-gap: var(--gap-2);
			}

			.item {
				container-type: inline-size;
				display: flex;
				flex-direction: column;
				row-gap: calc(var(--gap) * 1.5);

				text-wrap: balance;
			}

			.accent {
				font-size: 1.75em;
				font-weight: 500;
				line-height: 1;
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
		}
	}
</style>
