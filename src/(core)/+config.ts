import type { Config } from 'vike/types'

import vikeVue from 'vike-vue/config'

import Layout from '@/(core)/layouts/LayoutDefault.vue'

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
	extends: [vikeVue],
	lang: 'ru',
	Layout,
	title: 'Мои хакатоны',
} satisfies Config
