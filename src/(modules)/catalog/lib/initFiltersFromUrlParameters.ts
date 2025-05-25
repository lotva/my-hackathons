import type { ELocation } from 'hackathons.map'

import { type Ref } from 'vue'

import type { TFilters } from '../config/types'

export function initFiltersFromUrlParameters(
	filters: Ref<TFilters>,
	location: Ref<ELocation | undefined>,
	parameters: Partial<TFilters> & { location?: ELocation },
) {
	Object.assign(filters.value, parameters)

	if (parameters.location) {
		location.value = parameters.location
	}
}
