import vikeRoutegen from '@blankeos/vike-routegen'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import vike from 'vike/plugin'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
	const environment = loadEnv(mode, process.cwd())
	const allowedHosts = environment.VITE_ALLOWED_HOSTS?.split(',') ?? []

	if (!environment.VITE_ALLOWED_HOSTS) {
		throw new Error('VITE_ALLOWED_HOSTS is required in .env')
	}

	return {
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

		preview: {
			allowedHosts,
		},

		resolve: {
			alias: {
				'@': fileURLToPath(new URL('src', import.meta.url)),
			},
		},
	}
})
