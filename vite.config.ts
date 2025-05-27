import vikeRoutegen from '@blankeos/vike-routegen'
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
		vikeRoutegen({
			outputPath: 'src/(core)/route-tree.gen.ts',
		}),
		vue({
			include: [/\.vue$/, /\.md$/],
			template: {
				compilerOptions: {
					isCustomElement: (tag) => tag === 'search',
				},
			},
		}),
	],

	resolve: {
		alias: {
			'@': fileURLToPath(new URL('src', import.meta.url)),
		},
	},
})
