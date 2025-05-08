// https://vike.dev/data

import { client } from '@/(core)/api/client.js'
import { useConfig } from 'vike-vue/useConfig'

export type Data = Awaited<ReturnType<typeof data>>

export const data = async () => {
	// https://vike.dev/useConfig
	const config = useConfig()

	const { data } = await client.GET('/hackathons')

	config({
		title: `${data?.length} Star Wars Movies`,
	})

	return { data }
}
