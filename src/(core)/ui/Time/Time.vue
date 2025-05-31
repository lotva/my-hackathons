<template>
	<time
		class="time"
		:datetime="date.utc"
		v-html="formatDate(date)"
	></time>
</template>

<script setup lang="ts">
	import { formatDate, type IDateInput } from '@/(core)/lib/formatDate'

	defineProps<{
		date: IDateInput
	}>()
</script>
