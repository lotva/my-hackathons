import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		target: 'es2022',
	},

	plugins: [
		vike(),
		vue({
			include: [/\.vue$/, /\.md$/],
		}),
	],

	resolve: {
		alias: {
			'@': fileURLToPath(new URL('src', import.meta.url)),
		},
	},
})
