<template>
	<p class="accent"><slot></slot></p>
</template>

<style scoped>
	.accent {
		font-size: 1.5em;
		line-height: 1.1;
		color: var(--strong);
		letter-spacing: -0.02em;
	}
</style>
