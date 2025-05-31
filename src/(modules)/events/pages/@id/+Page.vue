<template>
	<template v-if="event">
		<Label
			v-if="event.audience.length > 0"
			class="label"
		>
			{{ event.audience.join(' · ') }}
		</Label>

		<h1 class="root-metrics-fix">{{ event.name }}</h1>

		<Content>
			<p>
				<Badge v-if="event.isActual">Скоро старт</Badge>
				{{ event.description || event.summary }}
			</p>
		</Content>

		<Metadata
			class="metadata"
			:event="event"
		/>

		<Features
			class="section"
			:requirements="event.requirements"
			:notes="event.notes"
		/>

		<Organizers
			class="section"
			:organizers="event.organizers"
		/>

		<Stack
			class="section"
			:stack="event.stack"
		/>

		<Team
			class="section"
			:team="event.team_size"
			:types="event.typeParticipant"
		/>

		<Prizes
			class="section"
			:prizes="event.prizes"
		/>

		<Tracks
			class="tracks"
			:tracks="event.tracks"
		/>

		<RegisterAction
			v-if="event.registration_link || event.link"
			class="action"
			:is-actual="event.isActual"
			:deadline="deadline!"
			:link="normalizeUrl(event.registration_link) || normalizeUrl(event.link)"
		/>
	</template>
</template>

<script setup lang="ts">
	import { normalizeUrl } from '@/(core)/lib/normalizeUrl'
	import { Badge } from '@/(core)/ui/Badge'
	import { Content } from '@/(core)/ui/Content'
	import { Label } from '@/(core)/ui/Label'
	import { useData } from 'vike-vue/useData'
	import { computed } from 'vue'

	import type { Data } from './+data'

	import {
		Features,
		Metadata,
		Organizers,
		Prizes,
		RegisterAction,
		Stack,
		Team,
		Tracks,
	} from '../../ui'

	const event = useData<Data>().data

	const deadline = computed(() => {
		if (event?.registration_deadline.utc) {
			return event.registration_deadline
		}

		return event?.dateStart
	})
</script>

<style scoped>
	.label {
		max-inline-size: var(--paragraph-width);
		margin-block-start: -1ex;
	}

	.metadata {
		margin-block-start: var(--gap-3);
	}

	.section {
		margin-block-start: calc(var(--gap) * 3);

		.metadata + & {
			margin-block-start: calc(var(--gap) * 5);
		}
	}

	.tracks {
		margin-block-start: calc(var(--gap) * 5);
	}

	.action {
		margin-block-start: var(--gap);
		padding-block-start: var(--gap-2);
	}
</style>
