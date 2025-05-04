import type { PageContextServer } from 'vike/types'

// https://vike.dev/data
import { todos } from '../../database/todoItems'

export type Data = {
	todo: { text: string }[]
}

export default async function data(
	_pageContext: PageContextServer,
): Promise<Data> {
	console.log(_pageContext)
	return { todo: todos }
}
