import type { ELocation } from 'hackathons.map'
import type { Ref } from 'vue'

import type { TFilters } from '../config/types'

const FILTER_KEYS: Set<keyof TFilters> = new Set([
	'audience',
	'end_date',
	'format',
	'isActual',
	'limit',
	'location',
	'offset',
	'search',
	'sort',
	'start_date',
	'typeParticipant',
])

export function initFiltersFromUrlParameters(
	filters: Ref<TFilters>,
	location: Ref<ELocation | undefined>,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	parameters: Record<string, any>,
) {
	const validFilters: Partial<TFilters> = {}
	for (const key of FILTER_KEYS) {
		if (key in parameters && parameters[key] !== undefined) {
			validFilters[key] = parameters[key]
		}
	}

	Object.assign(filters.value, validFilters)

	if (parameters.location !== undefined) {
		location.value = parameters.location as ELocation
	}
}
