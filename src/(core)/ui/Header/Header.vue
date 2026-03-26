<template>
	<header class="header holder">
		<a
			:class="['logo', 'surface', '_has-text', { '_is-active': isActive('/') }]"
			:href="!isActive('/') ? getRoute('/') : undefined"
			:aria-current="isActive('/')"
		>
			Мои хакатоны
		</a>

		<nav class="navigation">
			<a
				class="telegram-link surface"
				href="https://t.me/hackathons_notify_bot"
			>
				<IconTelegram class="icon _telegram" />

				<IconLoader class="icon _loader" />

				<span class="visually-hidden">Телеграм-бот</span>
			</a>

			<a
				:class="[
					'surface',
					'_has-text',
					'events-link',
					{ '_is-active': isActive('/events') },
				]"
				:href="!isActive('/events') ? '/events' : undefined"
				:aria-current="isActive('/events')"
			>
				Карта
			</a>
		</nav>
	</header>
</template>

<script setup lang="ts">
	import { getRoute } from '@/(core)/route-tree.gen'
	import { usePageContext } from 'vike-vue/usePageContext'

	import IconLoader from './IconLoader.vue'
	import IconTelegram from './IconTelegram.vue'

	const pageContext = usePageContext()

	const isActive = (targetHref: string) => {
		const { urlPathname } = pageContext

		return urlPathname === targetHref
	}
</script>

<style scoped>
	.header,
	.navigation {
		display: flex;
		column-gap: calc(var(--gap) / 4);
		align-items: center;
	}

	.header {
		pointer-events: none;

		position: sticky;
		z-index: 10;
		inset-block-start: 0;

		margin-block-end: calc(var(--gap) * 7);
		padding-block-start: calc(var(--gap) * 1.5);
	}

	.navigation {
		flex-grow: 1;
	}

	.surface {
		--underline: none;

		pointer-events: auto;

		scale: 1;

		display: grid;
		grid-template-areas: 'stack';
		align-items: center;

		block-size: 2rem;
		padding-block: 0;
		border-radius: 100vi;

		color: var(--background);
		text-decoration: none;

		background-color: var(--strong);

		transition: scale 0.15s ease;

		@media (width >= 700px) {
			block-size: 1.5rem;
		}

		&:focus-visible {
			outline: var(--accent) solid var(--outline-thickness);
			outline-offset: var(--outline-thickness);
		}

		&._has-text {
			padding-inline: 1em;
			letter-spacing: 0.02em;

			@media (width >= 700px) {
				font-size: 0.8em;
			}
		}
	}

	.logo {
		&:not(._is-active):hover {
			scale: 1.04;
		}
	}

	.telegram-link {
		aspect-ratio: 1/1;

		&:hover {
			scale: 1.1;
		}
	}

	.events-link {
		margin-inline-start: auto;

		&:not(._is-active):hover {
			scale: 1.06;
		}
	}

	.icon {
		will-change: filter, opacity;

		grid-area: stack;
		justify-self: center;

		inline-size: 100%;
		block-size: 100%;

		transition:
			opacity 0.3s ease,
			filter 0.3s ease,
			transform 0.3s ease;

		&._telegram {
			opacity: 1;
			filter: blur(0);

			body[class*='_is-transitioning'] & {
				transform: scale(0.8);
				opacity: 0;
				filter: blur(4px);
			}
		}

		&._loader {
			inline-size: 55%;
			block-size: 55%;

			opacity: 0;
			filter: blur(4px);

			fill: var(--background);

			animation: spin 0.8s linear infinite;

			body[class*='_is-transitioning'] & {
				opacity: 1;
				filter: blur(0);
			}

			&:not(body[class*='_is-transitioning'] &) {
				transition:
					opacity 0.3s ease,
					filter 0.3s ease,
					transform 0.3s ease,
					animation-play-state 0s linear 0.6s;
			}
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0turn);
		}

		to {
			transform: rotate(1turn);
		}
	}
</style>
