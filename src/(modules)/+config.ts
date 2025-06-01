import type { Config } from 'vike/types'

import Layout from '@/(core)/layouts/LayoutDefault.vue'
import vikeVueQuery from 'vike-vue-query/config'
import vikeVue from 'vike-vue/config'

export default {
	extends: [vikeVue, vikeVueQuery],
	lang: 'ru',
	Layout,
	title: 'Мои хакатоны',
} satisfies Config
