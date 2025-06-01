export function toggleHashAnchor(anchor: string, enable: boolean) {
	if (globalThis.window === undefined || typeof document === 'undefined') {
		return
	}

	const { pathname, search } = globalThis.location

	const updatedUrl = enable
		? `${pathname}${search}#${anchor}`
		: `${pathname}${search}`

	history.replaceState(undefined, '', updatedUrl)
}
