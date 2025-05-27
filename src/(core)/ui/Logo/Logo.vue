<template>
	<a
		:class="['logo', 'note', '_is-label', { '_is-active': isActive }]"
		:href="!isActive ? getRoute('/') : undefined"
		:aria-current="isActive"
	>
		Мои хакатоны

		<IconLoader class="loader" />
	</a>
</template>

<script setup lang="ts">
	import { getRoute } from '@/(core)/route-tree.gen'
	import { usePageContext } from 'vike-vue/usePageContext'
	import { computed } from 'vue'

	import IconLoader from './IconLoader.vue'

	const href = getRoute('/')

	const pageContext = usePageContext()

	const isActive = computed(() => {
		const { urlPathname } = pageContext
		return href === '/' ? urlPathname === href : urlPathname.startsWith(href)
	})
</script>

<style scoped>
	@keyframes spin {
		from {
			transform: rotate(0turn);
		}

		to {
			transform: rotate(1turn);
		}
	}

	.logo {
		--underline: none;

		display: inline-flex;
		align-items: center;

		padding: 0.15em 0.95em;
		border-radius: 100vi;

		color: var(--background);
		letter-spacing: 0.15em;

		background-color: var(--strong);

		transition:
			column-gap 0.3s ease,
			scale 0.15s ease;

		&:focus-visible {
			outline: var(--accent) solid var(--outline-thickness);
			outline-offset: var(--outline-thickness);
		}

		body[class*='_is-transitioning'] & {
			column-gap: 0.65ch;
		}

		&:not(._is-active):hover {
			scale: 1.04;
		}

		.loader {
			inline-size: 0;
			block-size: 1.25cap;

			fill: var(--background);

			transition: inline-size 0.3s ease;
			animation: spin 1s linear infinite;

			body[class*='_is-transitioning'] .logo & {
				inline-size: 1.25cap;
			}
		}
	}
</style>
