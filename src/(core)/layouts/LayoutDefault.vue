<template>
	<Header />

	<main class="holder">
		<slot></slot>
	</main>
</template>

<script setup lang="ts">
	import { Header } from '../ui/Header'
</script>

<style>
	@import url('@/(core)/styles/index.css');
</style>
