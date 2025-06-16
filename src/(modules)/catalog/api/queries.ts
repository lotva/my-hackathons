import { client } from '@/(core)/api'

export async function fetchAudience() {
	const { data } = await client.GET('/audience')
	return data ?? []
}

export async function fetchLocations() {
	const { data } = await client.GET('/location')
	return data ?? {}
}
