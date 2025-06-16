<template>
	<div>
		<Map v-model="location" />

		<Filters
			id="filters"
			v-model="filters"
			class="filters"
		/>

		<Grid
			:events="events"
			class="grid"
			:has-more="hasMore"
			@load-more="loadMore"
		/>
	</div>
</template>

<script setup lang="ts">
	import { ELocation } from 'hackathons.map'
	import { computed, ref } from 'vue'

	import { TFilters } from '../config/types'
	import { useFiltersSync } from '../lib/useFiltersSync'
	import { usePaginatedEvents } from '../lib/usePaginatedEvents'
	import Filters from './Filters.vue'
	import Grid from './Grid.vue'
	import Map from './Map.vue'

	const location = ref<ELocation | undefined>(undefined)

	const filters = ref<TFilters>({})
	const pagination = ref({ limit: 20, offset: 0 })
	const combinedQueryParameters = computed(() => ({
		...filters.value,
		...pagination.value,
		location: location.value,
	}))

	useFiltersSync(filters, location)

	const { events, hasMore, loadMore } = usePaginatedEvents(
		combinedQueryParameters,
	)
</script>

<style scoped>
	.filters,
	.grid {
		margin-block-start: var(--gap-2);
	}
</style>
