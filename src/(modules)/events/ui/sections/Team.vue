<template>
	<EventSection
		v-if="team"
		id="team"
		label="Состав команды"
	>
		<p class="accent">{{ team }}, {{ types.join(', ').toLowerCase() }}</p>
	</EventSection>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	import EventSection from './EventSection.vue'

	defineProps<{
		team: components['schemas']['HackathonFull']['team_size']
		types: components['schemas']['HackathonFull']['typeParticipant']
	}>()
</script>
