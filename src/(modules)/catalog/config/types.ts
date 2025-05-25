import type { operations } from '@/(core)/api/openapi'

export type TFilters = RemoveUndefined<TQuery>

type RemoveUndefined<T> = T extends undefined ? never : T

type TQuery = operations['get_hackathons_hackathons_get']['parameters']['query']
