<template>
	<h1>My Vike app</h1>
	This page is:
	<ul>
		<li>Rendered to HTML.</li>
	</ul>
</template>

<script setup lang="ts">
	import { useData } from 'vike-vue/useData'

	import type { Data } from './+data.js'

	const hackathons = useData<Data>()
	console.log(hackathons.data)
</script>
