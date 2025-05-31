<template>
	<section
		v-if="stack"
		class="stack base-grid"
		aria-labelledby="stack"
	>
		<p id="stack">Стек</p>

		<p class="accent">{{ stack }}</p>
	</section>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	defineProps<{
		stack: components['schemas']['HackathonFull']['stack']
	}>()
</script>

<style scoped>
	@import url('./base-grid.css');
</style>
