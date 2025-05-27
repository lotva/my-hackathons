export function normalizeUrl(url: string): string {
	if (url === '') {
		return url
	}

	if (!url.startsWith('http://') && !url.startsWith('https://')) {
		return `http://${url}`
	}

	return url
}
