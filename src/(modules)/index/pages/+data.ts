// https://vike.dev/data

import { client } from '@/(core)/api/client.js'
import { useConfig } from 'vike-vue/useConfig'

export type Data = Awaited<ReturnType<typeof data>>

export const data = async () => {
	const config = useConfig()

	config({
		description:
			'Каталог хакатонов России. Смотрите ближайшие даты, темы проектов и призы 🏆',
		title: 'Мои хакатоны',
	})

	const { data } = await client.GET('/hackathons', {
		query: {
			limit: 5,
		},
	})

	return { data: data }
}
