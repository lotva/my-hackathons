<template>
	<a :class="{ active: isActive }">
		<slot />
	</a>
</template>

<script lang="ts" setup>
	import { usePageContext } from 'vike-vue/usePageContext'
	import { computed, useAttrs } from 'vue'

	const pageContext = usePageContext()
	const { href } = useAttrs()
	const isActive = computed(() => {
		const { urlPathname } = pageContext
		return href === '/'
			? urlPathname === href
			: urlPathname.startsWith(href as string)
	})
</script>

<style scoped>
	a {
		margin-inline-start: -10px;
		padding: 2px 10px;
	}

	a.active {
		background-color: #eee;
	}
</style>
