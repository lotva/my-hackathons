<template>
	<div class="layout">
		<slot />
	</div>
</template>

<style>
	@import url('@/(core)/styles/index.css');
</style>

<style scoped>
	#page-content {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	body.page-is-transitioning #page-content {
		opacity: 0;
	}
</style>
