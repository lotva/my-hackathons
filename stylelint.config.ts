import type { Config } from 'stylelint'

export default {
	extends: [
		'stylelint-config-standard-vue',
		'stylelint-config-clean-order',
		'stylelint-plugin-logical-css/configs/recommended',
	],

	plugins: ['stylelint-plugin-logical-css'],

	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['mixin', 'define-mixin', 'mixin-content'],
			},
		],

		'declaration-property-value-no-unknown': null,

		'no-descending-specificity': [true, { severity: 'warning' }],

		'order/order': [
			[
				'custom-properties',
				{ name: 'mixin', type: 'at-rule' },
				'declarations',
				{ hasBlock: true, name: 'media', type: 'at-rule' },
				'rules',
				'at-rules',
			],
		],

		'property-no-unknown': [
			true,
			{
				ignoreProperties: ['corner-shape'],
			},
		],

		'selector-class-pattern': [
			/^(?!.*--)(?:[a-z][\da-z]*(?:-[\da-z]+)*|_[a-z][\da-z]*(?:-[\da-z]+)*)$/,
			{
				message:
					'Selector should be written in kebab-case and modifiers should start with _',
			},
		],
	},
} satisfies Config
