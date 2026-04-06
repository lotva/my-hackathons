import type { Config } from 'vike/types'

import vikePhoton from 'vike-photon/config'
import vikeVueQuery from 'vike-vue-query/config'
import vikeVue from 'vike-vue/config'

import Layout from '@/(core)/layouts/LayoutDefault.vue'

export default {
	cli: {
		preview: 'vite',
	},
	extends: [vikeVue, vikeVueQuery, vikePhoton],
	lang: 'ru',
	Layout,
	title: 'Мои хакатоны',
} satisfies Config
