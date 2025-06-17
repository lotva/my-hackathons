import type { UserConfig } from 'vite'

import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
	viteConfig as UserConfig,

	defineConfig({
		test: {
			environment: 'jsdom',
			exclude: [...configDefaults.exclude, 'e2e/**'],
			root: import.meta.dirname,
		},
	}),
)
