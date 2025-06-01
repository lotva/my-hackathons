<template>
	<EventSection
		v-if="notes.length > 0"
		id="features"
		label="Фичи"
	>
		<ul class="list">
			<li
				v-for="note in notes"
				:key="note"
				class="item"
			>
				<p class="accent">{{ note }}</p>
			</li>

			<li
				v-if="requirements.length > 0"
				class="item"
			>
				<h3 class="accent root-metrics-fix">Условия участия</h3>

				<Content>
					<ul class="description">
						<li
							v-for="req in requirements"
							:key="req"
						>
							{{ req }}
						</li>
					</ul>
				</Content>
			</li>
		</ul>
	</EventSection>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	import { Content } from '@/(core)/ui/Content'

	import EventSection from './EventSection.vue'

	defineProps<{
		notes: components['schemas']['HackathonFull']['notes']
		requirements: components['schemas']['HackathonFull']['requirements']
	}>()
</script>
