<template>
	<div class="layout">
		<Sidebar>
			<Logo />

			<Link href="/"> Welcome </Link>

			<Link href="/todo"> Todo </Link>

			<Link href="/star-wars"> Data Fetching </Link>
		</Sidebar>

		<Content><slot /></Content>
	</div>
</template>

<script lang="ts" setup>
	import Content from '@/(core)/components/Content.vue'
	import Link from '@/(core)/components/Link.vue'
	import Logo from '@/(core)/components/Logo.vue'
	import Sidebar from '@/(core)/components/Sidebar.vue'
</script>

<style>
	body {
		margin: 0;
		font-family: sans-serif;
	}

	* {
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
	}
</style>

<style scoped>
	.layout {
		display: flex;
		max-inline-size: 900px;
		margin: auto;
	}

	.content {
		flex-grow: 1;
		min-block-size: 100vb;
		padding: 20px;
		padding-block-end: 50px;
	}

	/* Page Transition Animation */
	#page-content {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	body.page-is-transitioning #page-content {
		opacity: 0;
	}
</style>
