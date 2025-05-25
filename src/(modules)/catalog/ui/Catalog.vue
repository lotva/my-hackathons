<template>
	<div>
		<Map v-model="location" />

		<Filters
			id="filters"
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
	import type { components } from '@/(core)/api/openapi'

	import { client } from '@/(core)/api'
	import { ELocation } from 'hackathons.map'
	import { onMounted, ref, watchEffect } from 'vue'

	import { TFilters } from '../config/types'
	import { useFiltersSync } from '../lib/useFiltersSync'
	import { Filters, Grid, Map } from './'

	const location = ref<ELocation | undefined>(undefined)

	const filters = ref<TFilters>({})
	const events = ref<components['schemas']['HackathonShort'][] | undefined>(
		undefined,
	)
	const loading = ref(false)

	onMounted(() => {
		useFiltersSync(filters, location)

		watchEffect(async (onInvalidate) => {
			let canceled = false

			onInvalidate(() => {
				canceled = true
				document.body.classList.remove('_is-transitioning')
			})

			document.body.classList.add('_is-transitioning')
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
					document.body.classList.remove('_is-transitioning')
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
