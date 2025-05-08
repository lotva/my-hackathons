<template>
	<div class="layout">
		<slot />
	</div>
</template>

<style scoped>
	#page-content {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	body.page-is-transitioning #page-content {
		opacity: 0;
	}
</style>
