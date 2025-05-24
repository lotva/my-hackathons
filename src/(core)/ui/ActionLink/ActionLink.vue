<template>
	<a
		class="action-link"
		:href="href || '/'"
	>
		<span class="text"><slot></slot></span>
	</a>
</template>

<script setup lang="ts">
	interface IProps {
		href?: string
	}

	defineProps<IProps>()
</script>

<style scoped>
	.action-link {
		--underline: none;

		&::after {
			content: '›';
			margin-inline-start: var(--space-width);
		}

		&:hover,
		&:focus-visible {
			.text {
				text-decoration: inherit;
				text-decoration-line: underline;
			}
		}
	}
</style>
