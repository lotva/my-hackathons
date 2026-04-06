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

	<meta
		property="og:image"
		content="/images/open-graph.jpg"
	/>

	<meta
		property="og:image:width"
		content="1800"
	/>

	<meta
		property="og:image:height"
		content="900"
	/>

	<meta
		property="og:image:type"
		content="image/jpeg"
	/>

	<meta
		property="twitter:card"
		content="summary_large_image"
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
</template>

<script setup lang="ts">
	import icon180 from '@/(core)/ui/icon-180.png'
	import iconAny from '@/(core)/ui/icon-any.svg'
</script>
