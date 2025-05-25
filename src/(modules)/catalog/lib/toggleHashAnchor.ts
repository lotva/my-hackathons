export function toggleHashAnchor(anchor: string, enable: boolean) {
	const { pathname, search } = globalThis.location

	const updatedUrl = enable
		? `${pathname}${search}#${anchor}`
		: `${pathname}${search}`

	history.replaceState(undefined, '', updatedUrl)
}
