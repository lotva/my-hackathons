import type { PageContextServer } from 'vike/types'

import { client } from '@/(core)/api/client.js'
import { useConfig } from 'vike-vue/useConfig'

export type Data = Awaited<ReturnType<typeof data>>

export const data = async (pageContext: PageContextServer) => {
	const config = useConfig()

	const { data, response } = await client.GET('/hackathons/{hackathon_id}', {
		params: {
			path: {
				hackathon_id: pageContext.routeParams.id,
			},
		},
	})

	config({
		description: data?.description,
		title: data?.name,
	})

	return { data, response }
}
