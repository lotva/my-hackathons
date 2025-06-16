<template>
	<div
		class="scroller"
		aria-label="Выбор локации на карте"
	>
		<HackathonsMap
			class="map"
			:selected-location="selectedLocation"
			:location-options="locations"
			:styles="{ mapColor: 'var(--ui)', pinColor: 'var(--accent)' }"
			@location-change="updateLocation"
		>
			<template #tooltip-content="{ locationData }">
				<article class="tooltip inverted">
					<hgroup>
						<Label>Выбран город</Label>

						<h3 class="name root-metrics-fix">{{ locationData.name }}</h3>
					</hgroup>

					<p class="factoid">{{ locationData.count }}</p>
				</article>
			</template>
		</HackathonsMap>
	</div>
</template>

<script setup lang="ts">
	import { Label } from '@/(core)/ui/Label'
	import { useQuery } from '@tanstack/vue-query'
	import { ELocation, HackathonsMap } from 'hackathons.map'
	import 'hackathons.map/dist/hackathons.map.css'
	import { computed, onServerPrefetch } from 'vue'

	import { fetchLocations } from '../api/queries'
	import {
		elocationToName,
		nameToELocation,
		TLocationName,
	} from '../config/cities'
	import { mapApiDataToLocations } from '../lib/mapApiDataToLocations'

	const props = defineProps<{ modelValue?: TLocationName }>()

	const emit = defineEmits<{
		'update:modelValue': [TLocationName | undefined]
	}>()

	function updateLocation(location: ELocation | undefined) {
		if (location === undefined) {
			// eslint-disable-next-line unicorn/no-useless-undefined
			return emit('update:modelValue', undefined)
		}
		const cityName = elocationToName[location]
		emit('update:modelValue', cityName)
	}

	const query = useQuery({
		queryFn: fetchLocations,
		queryKey: ['locations'],
		suspense: true,
	})

	onServerPrefetch(query.suspense)

	const locations = computed(() =>
		mapApiDataToLocations(query.data.value ?? {}),
	)

	const selectedLocation = computed<ELocation | undefined>(() => {
		if (!props.modelValue) {
			return
		}
		return nameToELocation[props.modelValue]
	})
</script>

<style scoped>
	.scroller {
		overflow: auto clip;

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

	.tooltip {
		display: flex;
		flex-direction: column;
		row-gap: var(--gap-3);
		justify-content: space-between;

		min-inline-size: 5rem;
		padding: calc(var(--gap-relative) * 0.75) calc(var(--gap-relative) / 2)
			var(--gap-relative);
		border-radius: 4px;

		color: var(--text);

		background-color: rgb(64 62 60 / 90%);

		@media (prefers-color-scheme: dark) {
			background-color: rgb(206 205 195 / 85%);
		}

		.name {
			margin-block-start: var(--gap-relative);
			font-weight: var(--font-weight);
			line-height: 0.9;
			letter-spacing: -0.01em;
		}

		.factoid {
			font-size: 4em;
			font-weight: 450;
			font-variant-numeric: tabular-nums;
			letter-spacing: -0.1em;
		}
	}

	:deep() {
		.tooltip-container {
			will-change: opacity;

			z-index: 11;

			min-inline-size: 0;
			margin: -8px;
			padding: 8px;

			backdrop-filter: blur(0.2em);

			mask-clip: content-box;
			mask-image: linear-gradient(black, black);
			mask-position: 0 0;
			mask-repeat: no-repeat;
			mask-size: 100% 100%;

			&.visible {
				pointer-events: none;

				.tooltip {
					pointer-events: auto;
				}
			}
		}
	}
</style>
