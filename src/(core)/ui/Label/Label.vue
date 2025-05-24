<template>
	<small class="note _is-label"><slot></slot></small>
</template>

<style>
	.note {
		font-size: 0.6em;
		font-weight: 550;

		&._is-label {
			text-transform: uppercase;
			letter-spacing: 0.1em;
		}
	}
</style>
