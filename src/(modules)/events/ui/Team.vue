<template>
	<section
		v-if="team"
		class="team base-grid"
		aria-labelledby="team"
	>
		<p id="team">Состав команды</p>

		<p class="accent">{{ team }}, {{ types.join(', ').toLowerCase() }}</p>
	</section>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	defineProps<{
		team: components['schemas']['HackathonFull']['team_size']
		types: components['schemas']['HackathonFull']['typeParticipant']
	}>()
</script>

<style scoped>
	@import url('./base-grid.css');
</style>
