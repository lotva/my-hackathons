<template>
	<dl class="metadata">
		<MetadataItem
			v-if="event.dateStart"
			label="Дата начала"
		>
			<Time :date="event.dateStart" />
		</MetadataItem>

		<MetadataItem
			v-if="event.dateEnd"
			label="Дата окончания"
		>
			<Time :date="event.dateEnd" />
		</MetadataItem>

		<MetadataItem
			v-if="event.format"
			label="Формат"
		>
			{{ event.format }}
		</MetadataItem>

		<MetadataItem
			v-if="event.location.length > 0"
			label="Локация"
		>
			{{ event.location.join(', ') }}
		</MetadataItem>
	</dl>
</template>

<script setup lang="ts">
	import type { components } from '@/(core)/api/openapi'

	import { Time } from '@/(core)/ui/Time'

	import MetadataItem from './MetadataItem.vue'

	defineProps<{
		event: components['schemas']['HackathonFull']
	}>()
</script>

<style scoped>
	.metadata {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap-2) var(--gap);
	}
</style>
