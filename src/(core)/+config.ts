import type { Config } from 'vike/types'

import Layout from '@/(core)/layouts/LayoutDefault.vue'
import vikeVue from 'vike-vue/config'

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
	description: 'Demo showcasing Vike',

	extends: vikeVue as typeof vikeVue,
	// https://vike.dev/Layout
	Layout,

	// https://vike.dev/head-tags
	title: 'My Vike App',
} satisfies Config
