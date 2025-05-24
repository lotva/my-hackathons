<template>
	<span class="badge root-metrics-fix uppercase"><slot></slot></span>
</template>

<style scoped>
	.badge {
		display: inline-block;

		padding: calc(var(--gap) / 2) var(--gap) calc(var(--gap) / 4);
		border-radius: 100vi;

		font-size: 0.75em;
		color: var(--background);

		background-color: var(--accent);
	}
</style>
