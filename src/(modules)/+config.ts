import type { Config } from 'vike/types'

import Layout from '@/(core)/layouts/LayoutDefault.vue'
import vikeVue from 'vike-vue/config'

export default {
	extends: vikeVue as typeof vikeVue,
	lang: 'ru',
	Layout,
	title: 'Мои хакатоны',
} satisfies Config
