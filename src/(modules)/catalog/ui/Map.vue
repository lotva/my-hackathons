<template>
	<div class="scroller">
		<HackathonsMap
			class="map"
			:selected-location="modelValue"
			:location-options="locations"
			:styles="{ mapColor: 'var(--ui)', pinColor: 'var(--accent)' }"
			@location-change="updateLocation"
		>
			<template #tooltip-content> aboba </template>
		</HackathonsMap>
	</div>
</template>

<script setup lang="ts">
	import 'hackathons.map/dist/hackathons.map.css'
	import { ELocation, HackathonsMap } from 'hackathons.map'

	defineProps<{ modelValue?: ELocation }>()

	const emit = defineEmits<{
		'update:modelValue': [ELocation | undefined]
	}>()

	function updateLocation(location: ELocation | undefined) {
		emit('update:modelValue', location)
	}

	const locations = {
		[ELocation.MOSCOW]: {
			description: 'Крупнейший хакатон страны',
			name: 'Хакатон в Москве',
		},
		[ELocation.SAINT_PETERSBURG]: {
			description: 'Международный хакатон разработчиков',
			name: 'Хакатон в Санкт-Петербурге',
		},
	}
</script>

<style scoped>
	.scroller {
		overflow-inline: auto;

		inline-size: 100vi;
		max-inline-size: -webkit-fill-available;
		max-inline-size: -moz-available;
		max-inline-size: stretch;
		margin-block-start: max(-6.5em, -55vi);
		margin-inline: max(calc(-1 * var(--gap)), -4%);
	}

	.map {
		z-index: 0;
		min-inline-size: 900px;
	}
</style>
