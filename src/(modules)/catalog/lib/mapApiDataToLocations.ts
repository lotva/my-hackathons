import { ELocation } from 'hackathons.map'

import { nameToELocation } from '../config/cities'

export function mapApiDataToLocations(apiData: Record<string, number>) {
	const result: Partial<Record<ELocation, { count: string; name: string }>> = {}

	for (const [cityName, count] of Object.entries(apiData)) {
		const locationKey = nameToELocation[cityName]
		if (!locationKey) {
			continue
		}

		result[locationKey] = {
			count: `${count}`,
			name: `${cityName}`,
		}
	}

	return result
}
