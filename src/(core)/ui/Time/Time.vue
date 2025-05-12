<template>
	<time
		class="time"
		:datetime="date.utc"
		v-html="formatDate(date, { shouldBreak: shouldBreak })"
	/>
</template>

<script setup lang="ts">
	import { formatDate, type IDateInput } from '@/(core)/lib/formatDate'

	withDefaults(
		defineProps<{
			date: IDateInput
			shouldBreak?: boolean
		}>(),
		{
			shouldBreak: false,
		},
	)
</script>

<style scoped>
	.time {
		white-space: nowrap;
	}
</style>
