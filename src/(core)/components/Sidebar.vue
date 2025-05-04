<template>
	<div
		id="sidebar"
		style="
			display: flex;
			flex-direction: column;
			flex-shrink: 0;

			padding: 20px;
			border-inline-end: 2px solid #eee;

			line-height: 1.8em;
		"
	>
		<slot />
	</div>
</template>

<script setup lang="ts"></script>
