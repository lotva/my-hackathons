<template>
	<h1>{{ heading }}</h1>

	<p>{{ abortReason }}</p>
</template>

<script lang="ts" setup>
	import { usePageContext } from 'vike-vue/usePageContext'

	const context = usePageContext()

	let { abortReason } = context
	const { is404 } = context

	if (!abortReason) {
		abortReason = is404
			? 'This page could not be found.'
			: 'Something went wrong.'
	}
	const heading = is404 ? '404 Page Not Found' : '500 Internal Server Error'
</script>
