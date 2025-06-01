<template>
	<EventSection
		v-if="stack"
		id="stack"
		label="Стек"
	>
		<p class="accent">{{ stack }}</p>
	</EventSection>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	import EventSection from './EventSection.vue'

	defineProps<{
		stack: components['schemas']['HackathonFull']['stack']
	}>()
</script>
