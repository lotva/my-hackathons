import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import {
	defineConfigWithVueTs,
	vueTsConfigs,
} from '@vue/eslint-config-typescript'
import perfectionist from 'eslint-plugin-perfectionist'
import pluginPlaywright from 'eslint-plugin-playwright'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginVue from 'eslint-plugin-vue'
import { globalIgnores } from 'eslint/config'

export default defineConfigWithVueTs(
	{
		files: ['**/*.{ts,mts,tsx,vue}'],
		name: 'app/files-to-lint',
	},

	globalIgnores([
		'src/(core)/api/openapi.d.ts',
		'**/dist/**',
		'**/dist-ssr/**',
		'**/coverage/**',
	]),

	pluginVue.configs['flat/essential'],
	vueTsConfigs.recommended,
	pluginUnicorn.configs['all'],
	perfectionist.configs['recommended-natural'],

	{
		...pluginVitest.configs.recommended,
		files: ['src/**/__tests__/*'],
	},

	{
		...pluginPlaywright.configs['flat/recommended'],
		files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
	},

	skipFormatting,

	{
		rules: {
			camelcase: ['warn', { ignoreDestructuring: true, properties: 'always' }],
			curly: 'warn',

			'unicorn/filename-case': [
				'warn',
				{
					cases: {
						camelCase: true,
						pascalCase: true,
					},
				},
			],

			'vue/block-lang': [
				'error',
				{
					script: {
						lang: 'ts',
					},
				},
			],

			'vue/block-order': [
				'error',
				{
					order: ['template', 'script', 'style'],
				},
			],

			'vue/component-api-style': ['error', ['script-setup']],
			'vue/component-name-in-template-casing': ['error', 'PascalCase'],
			'vue/custom-event-name-casing': ['warn'],

			'vue/define-emits-declaration': ['error', 'type-literal'],
			'vue/define-macros-order': [
				'warn',
				{
					defineExposeLast: true,
				},
			],

			'vue/define-props-declaration': ['error'],

			'vue/enforce-style-attribute': ['error', { allow: ['scoped', 'plain'] }],

			'vue/html-button-has-type': ['error'],

			'vue/html-indent': ['warn', 'tab'],

			'vue/html-self-closing': 'off',

			'vue/max-attributes-per-line': 'off',

			'vue/multi-word-component-names': 'off',
			'vue/new-line-between-multi-line-property': ['warn'],
			'vue/no-ref-object-reactivity-loss': ['error'],

			'vue/no-required-prop-with-default': [
				'error',
				{
					autofix: true,
				},
			],
			'vue/padding-line-between-blocks': ['warn', 'always'],
			'vue/padding-line-between-tags': [
				'warn',
				[{ blankLine: 'always', next: '*', prev: '*' }],
			],
			'vue/singleline-html-element-content-newline': 'off',
		},
	},
)
