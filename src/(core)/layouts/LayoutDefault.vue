<template>
	<header class="header holder">
		<Logo />

		<a
			class="link"
			href="https://t.me/hackathons_notify_bot"
		>
			Телеграм-бот</a
		>
	</header>

	<main class="holder">
		<slot />
	</main>
</template>

<script setup lang="ts">
	import { Logo } from '../ui/Logo'
</script>

<style>
	@import url('@/(core)/styles/index.css');
</style>

<style scoped>
	.header {
		position: sticky;
		z-index: 2;
		inset-block-start: var(--gap);

		display: flex;
		align-items: baseline;
		justify-content: space-between;

		margin-block-end: calc(var(--gap) * 6);

		.link {
			--accent: var(--strong);
			--accent-border: var(--strong);
			--accent-hover: var(--red);

			font-size: 0.75em;
			line-height: 0;
		}
	}
</style>
