import type { components, operations } from '@/(core)/api/openapi'

export type TEvent = components['schemas']['HackathonShort']

export type TFilters = RemoveUndefined<TQuery>

type RemoveUndefined<T> = T extends undefined ? never : T

type TQuery = operations['get_hackathons_hackathons_get']['parameters']['query']
