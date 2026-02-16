import type { Config } from 'vike/types'

import Layout from '@/(core)/layouts/LayoutDefault.vue'
import vikePhoton from 'vike-photon/config'
import vikeVueQuery from 'vike-vue-query/config'
import vikeVue from 'vike-vue/config'

export default {
	extends: [vikeVue, vikeVueQuery, vikePhoton],
	lang: 'ru',
	Layout,
	title: 'Мои хакатоны',
} satisfies Config
