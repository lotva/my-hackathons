<template>
	<div class="item">
		<dt class="term uppercase root-metrics-fix">{{ label }}</dt>

		<dd class="definition damn-metrics-fix">
			<slot></slot>
		</dd>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		label: string
	}>()
</script>

<style scoped>
	.item {
		display: flex;
		flex-basis: max(310px, calc(50% - var(--gap)));
		flex-direction: column;
		flex-grow: 1;

		padding-block-start: calc(var(--gap) / 2);
		border-block-start: 1px solid var(--tx-3);

		.term {
			margin-block-end: calc(var(--gap) * 0.75);
			font-size: 0.6rem;
			font-weight: 500;
		}

		.definition {
			font-family: Damn, sans-serif;
			font-size: 4.5rem;
			line-height: 0.8;
			color: var(--strong);
			letter-spacing: -0.03em;

			&:deep([class*='caps']) {
				margin-inline-end: 0;
				letter-spacing: inherit;
			}
		}
	}
</style>
