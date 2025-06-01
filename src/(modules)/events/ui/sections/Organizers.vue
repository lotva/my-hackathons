<template>
	<EventSection
		v-if="organizers.length > 0"
		id="organizers"
		label="Партнёры"
	>
		<p class="accent">
			{{ organizers.map((organizer) => organizer.name).join(' · ') }}
		</p>
	</EventSection>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	import EventSection from './EventSection.vue'

	defineProps<{
		organizers: components['schemas']['HackathonFull']['organizers']
	}>()
</script>
