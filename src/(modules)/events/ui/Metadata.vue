<template>
	<dl
		v-if="hasMetadata"
		class="metadata"
	>
		<MetadataItem
			v-if="event.dateStart?.utc"
			label="Дата начала"
		>
			<Time :date="event.dateStart" />
		</MetadataItem>

		<MetadataItem
			v-if="event.dateEnd?.utc"
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

	const props = defineProps<{
		event: components['schemas']['HackathonFull']
	}>()

	const hasMetadata =
		props.event.dateStart?.utc ||
		props.event.dateEnd?.utc ||
		props.event.format ||
		(props.event.location && props.event.location.length > 0)
</script>

<style scoped>
	.metadata {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap-2) var(--gap);
	}
</style>
