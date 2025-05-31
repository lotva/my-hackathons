<template>
	<section
		v-if="organizers.length > 0"
		class="organizers base-grid"
		aria-labelledby="organizers"
	>
		<p id="organizers">Партнёры</p>

		<p class="accent">
			{{ organizers.map((organizer) => organizer.name).join(' · ') }}
		</p>
	</section>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	defineProps<{
		organizers: components['schemas']['HackathonFull']['organizers']
	}>()
</script>

<style scoped>
	@import url('./base-grid.css');
</style>
