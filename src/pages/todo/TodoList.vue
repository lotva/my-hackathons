<template>
	<ul>
		<li
			v-for="(item, index) in todoItems"
			:key="index"
		>
			{{ item.text }}
		</li>

		<li>
			<form @submit.prevent="submitNewTodo()">
				<input
					v-model="todoItem"
					type="text"
					:class="[inputClass]"
				/>

				<button
					type="submit"
					:class="[buttonClass]"
				>
					Add to-do
				</button>
			</form>
		</li>
	</ul>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'

	const properties = defineProps<{ initialTodoItems: { text: string }[] }>()
	const inputClass = ref('')
	const buttonClass = ref('')

	const todoItems = ref(properties.initialTodoItems)
	const todoItem = ref('')

	const submitNewTodo = async () => {
		// Optimistic UI update
		todoItems.value.push({ text: todoItem.value })
	}
</script>
