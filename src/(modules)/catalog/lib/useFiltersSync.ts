import type { ELocation } from 'hackathons.map'

import { useUrlSearchParams } from '@vueuse/core'
import { usePageContext } from 'vike-vue/usePageContext'
import { computed, type Ref, watch } from 'vue'

import type { TFilters } from '../config/types'

import { initFiltersFromUrlParameters } from './initFiltersFromUrlParameters'
import { toggleHashAnchor } from './toggleHashAnchor'

export function useFiltersSync(
	filters: Ref<TFilters>,
	location: Ref<ELocation | undefined>,
) {
	const pageContext = usePageContext()

	const parameters = useUrlSearchParams('history')
	initFiltersFromUrlParameters(filters, location, pageContext.urlParsed.search)

	const hasActiveFilters = computed(() =>
		Object.values(filters.value).some(
			(v) => v !== undefined && v !== null && v !== '',
		),
	)

	watch(
		[filters, location],
		() => {
			Object.assign(parameters, {
				...filters.value,
				location: location.value,
			})

			toggleHashAnchor('filters', hasActiveFilters.value)
		},
		{ deep: true, immediate: true },
	)
}
