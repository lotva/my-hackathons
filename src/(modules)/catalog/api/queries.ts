import { client } from '@/(core)/api'

export async function fetchLocations() {
	const { data } = await client.GET('/location')
	return data ?? {}
}
