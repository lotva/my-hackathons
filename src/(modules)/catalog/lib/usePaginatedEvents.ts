import { client } from '@/(core)/api'
import { keepPreviousData, useInfiniteQuery } from '@tanstack/vue-query'
import { computed, onServerPrefetch, type Ref, watch } from 'vue'

import type { TEvent, TFilters } from '../config/types'

export function usePaginatedEvents(filters: Ref<TFilters>) {
	const limit = computed(() => filters.value.limit ?? 20)

	const query = useInfiniteQuery<TEvent[]>({
		getNextPageParam: (lastPage, allPages) => {
			if (lastPage.length < limit.value) {
				return
			}
			return allPages.flat().length
		},
		initialPageParam: 0,
		placeholderData: keepPreviousData,
		queryFn: async ({ pageParam: pageParameter = 0 }) =>
			fetchEvents({
				...filters.value,
				limit: limit.value,
				offset: Number(pageParameter),
			}),
		queryKey: ['events', filters],
		suspense: true,
	})

	onServerPrefetch(query.suspense)

	const events = computed(() => query.data.value?.pages.flat() ?? undefined)

	const hasMore = computed(() => {
		const lastPage = query.data.value?.pages.at(-1) ?? []
		return lastPage.length === limit.value
	})

	watch(
		() => query.isPlaceholderData.value || query.isFetchingNextPage.value,
		(isLoading) => {
			document.body.classList.toggle('_is-transitioning', isLoading)
		},
	)

	return {
		events,
		hasMore,
		isLoading: query.isLoading,
		loadMore: () => query.fetchNextPage(),
		refetch: query.refetch,
	}
}

async function fetchEvents(filters: TFilters): Promise<TEvent[]> {
	const { data } = await client.GET('/hackathons', {
		params: { query: filters },
	})

	return data ?? []
}
