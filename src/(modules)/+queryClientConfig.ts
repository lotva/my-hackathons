import type { QueryClientConfig } from '@tanstack/vue-query'

const TWO_MINUTES_IN_MS = 1000 * 60 * 2

const queryClientConfig: QueryClientConfig = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: import.meta.env.PROD,
			staleTime: TWO_MINUTES_IN_MS,
		},
	},
}

export { queryClientConfig }
