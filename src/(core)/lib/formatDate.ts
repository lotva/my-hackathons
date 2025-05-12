export interface IDateInput {
	shouldRenderTime: boolean
	utc: string
}

interface IOptions {
	shouldBreak: boolean
}

export function formatDate(input: IDateInput, options?: IOptions): string {
	const { shouldRenderTime, utc } = input

	const iso = utc.replace(' ', 'T').replaceAll('.', '-')
	const date = new Date(iso)

	if (Number.isNaN(date.getTime())) {
		return ''
	}

	const weekday = weekdayFormatter.format(date).toUpperCase()
	const dayMonth = dateFormatter.format(date)

	const formattedDate = `<span class="caps _has-margin">${weekday}</span> ${dayMonth}`

	if (shouldRenderTime) {
		const time = timeFormatter.format(date)

		return options?.shouldBreak
			? `${formattedDate}<br>${time}`
			: `${formattedDate}, ${time}`
	}

	return formattedDate
}

const weekdayFormatter = new Intl.DateTimeFormat('ru-RU', {
	weekday: 'short',
})

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
	day: 'numeric',
	month: 'long',
})

const timeFormatter = new Intl.DateTimeFormat('ru-RU', {
	hour: '2-digit',
	minute: '2-digit',
})
