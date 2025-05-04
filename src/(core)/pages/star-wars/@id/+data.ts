// https://vike.dev/data

import type { PageContextServer } from 'vike/types'

import { useConfig } from 'vike-vue/useConfig'

import type { MovieDetails } from '../types.js'

export type Data = Awaited<ReturnType<typeof data>>

export const data = async (pageContext: PageContextServer) => {
	// https://vike.dev/useConfig
	const config = useConfig()

	const response = await fetch(
		`https://brillout.github.io/star-wars/api/films/${pageContext.routeParams.id}.json`,
	)
	let movie = (await response.json()) as MovieDetails

	config({
		// Set <title>
		title: movie.title,
	})

	// We remove data we don't need because the data is passed to
	// the client; we should minimize what is sent over the network.
	movie = minimize(movie)

	return movie
}

function minimize(movie: MovieDetails): MovieDetails {
	const { director, id, producer, release_date, title } = movie
	const minimizedMovie = { director, id, producer, release_date, title }
	return minimizedMovie
}
