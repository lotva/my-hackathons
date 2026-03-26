<template>
	<div class="register">
		<a
			v-if="link"
			class="action"
			:href="link"
			target="_blank"
		>
			<span class="root-metrics-fix">
				<template v-if="isActual">Зарегистрироваться</template>

				<template v-else>Посетить сайт</template>
			</span>
		</a>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		isActual: boolean
		link: string
	}>()
</script>

<style scoped>
	.register {
		pointer-events: none;

		position: sticky;
		inset-block-end: calc(var(--gap) * 2);

		display: grid;
		row-gap: calc(var(--gap) / 2);
		justify-content: center;

		.action {
			--underline: none;

			pointer-events: all;

			display: inline-flex;

			inline-size: fit-content;
			padding: calc(
					var(--gap-relative) * 0.6 + var(--button-optical-compensator)
				)
				var(--gap-relative) calc(var(--gap-relative) * 0.6);
			border-radius: 0.2rem;

			font-size: min(1.5em, 8vi);
			color: var(--background);
			letter-spacing: -0.01em;

			background-color: var(--accent);

			&:hover {
				color: var(--background);
				background-color: var(--accent-hover);
			}

			&:focus-visible {
				outline: var(--accent) solid var(--outline-thickness);
				outline-offset: 0.05em;
			}

			@supports (corner-shape: squircle) {
				border-radius: 0.4rem;

				corner-shape: squircle;
			}
		}
	}
</style>
