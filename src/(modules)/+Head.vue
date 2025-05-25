<template>
	<meta
		property="og:type"
		content="website"
	/>

	<meta
		property="og:locale"
		content="ru_RU"
	/>

	<meta
		property="og:site_name"
		content="Мои хакатоны"
	/>

	<link
		rel="icon"
		type="image/svg+xml"
		sizes="any"
		:href="iconAny"
	/>

	<link
		rel="icon"
		type="image/png"
		sizes="180x180"
		:href="icon180"
	/>

	<link
		rel="apple-touch-icon"
		:href="icon180"
	/>

	<link
		rel="preload"
		href="/fonts/pt-root-ui-vf.woff2"
		as="font"
		type="font/woff2"
	/>

	<link
		rel="preload"
		href="/fonts/damn.woff2"
		as="font"
		type="font/woff2"
	/>
</template>

<script setup lang="ts">
	import icon180 from '@/(core)/ui/icon-180.png'
	import iconAny from '@/(core)/ui/icon-any.svg'
</script>
