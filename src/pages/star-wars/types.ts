export type Movie = {
	id: string
	release_date: string
	title: string
}

export type MovieDetails = Movie & {
	director: string
	producer: string
}
