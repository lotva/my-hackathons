import type { components } from '@/(core)/api/openapi'

import { client } from '@/(core)/api'
import { ref, type Ref, watch } from 'vue'

import type { TFilters } from '../config/types'

export function usePaginatedEvents(filters: Ref<TFilters>) {
	const events = ref<components['schemas']['HackathonShort'][] | undefined>(
		undefined,
	)
	const isLoading = ref(false)
	const hasMore = ref(false)

	const fetchEvents = async (append = false) => {
		isLoading.value = true

		try {
			const { data } = await client.GET('/hackathons', {
				params: { query: filters.value },
			})
			if (data) {
				events.value = append ? [...(events.value || []), ...data] : data
				hasMore.value = data.length === filters.value.limit
			}
		} catch (error) {
			console.error('Ивенты не подгрузились', error)
		} finally {
			isLoading.value = false
		}
	}

	const loadMore = () => {
		filters.value.offset =
			(filters.value.offset ?? 0) + (filters.value.limit ?? 20)
		fetchEvents(true)
	}

	watch(
		filters,
		(updatedFilters, oldFilters) => {
			if (updatedFilters !== oldFilters) {
				filters.value.offset = 0
				fetchEvents(false)
			}
		},
		{ deep: true },
	)

	watch(isLoading, (isLoading) => {
		document.body.classList.toggle('_is-transitioning', isLoading)
	})

	return {
		events,
		fetchEvents,
		hasMore,
		loadMore,
	}
}
