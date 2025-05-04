<template>
	<div>
		<h1>To-do List</h1>

		<TodoList :initial-todo-items="data.todo" />
	</div>
</template>

<script lang="ts" setup>
	import { useData } from 'vike-vue/useData'

	import type { Data } from './+data'

	import TodoList from './TodoList.vue'

	const data = useData<Data>()
</script>
