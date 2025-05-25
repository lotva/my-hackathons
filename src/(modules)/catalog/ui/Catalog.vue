<template>
	<div>
		<Map v-model="location" />

		<Filters
			v-model="filters"
			class="filters"
		/>

		<Grid
			:events="events"
			class="grid"
		/>
	</div>
</template>

<script setup lang="ts">
	import type { operations } from '@/(core)/api/openapi'

	import { client } from '@/(core)/api'
	import { ELocation } from 'hackathons.map'
	import { onMounted, ref, watchEffect } from 'vue'

	import { Filters, Grid, Map } from './'

	const location = ref<ELocation | undefined>(undefined)

	type TFilters =
		operations['get_hackathons_hackathons_get']['parameters']['query']

	const filters = ref<TFilters>({})
	const events = ref<
		| operations['get_hackathons_hackathons_get']['responses']['200']['content']['application/json']
		| undefined
	>(undefined)
	const loading = ref<boolean>(false)

	onMounted(() => {
		watchEffect(async (onInvalidate) => {
			let canceled = false

			onInvalidate(() => {
				canceled = true
				document.querySelector('body')?.classList.remove('_is-transitioning')
			})

			document.querySelector('body')?.classList.add('_is-transitioning')
			loading.value = true

			try {
				const { data } = await client.GET('/hackathons', {
					params: { query: filters.value },
				})
				if (!canceled) {
					events.value = data ?? []
				}
			} catch (error) {
				console.error('Ошибка при загрузке событий', error)
			} finally {
				if (!canceled) {
					loading.value = false
					document.querySelector('body')?.classList.remove('_is-transitioning')
				}
			}
		})
	})
</script>

<style scoped>
	.filters,
	.grid {
		margin-block-start: var(--gap-2);
	}
</style>
