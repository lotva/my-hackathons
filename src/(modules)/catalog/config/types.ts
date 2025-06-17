import type { components, operations } from '@/(core)/api/openapi'

export type TEvent = components['schemas']['HackathonShort']

export type TFilters = NonNullable<
	operations['get_hackathons_hackathons_get']['parameters']['query']
>
