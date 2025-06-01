export default {
	extends: ['stylelint-config-standard-vue', 'stylelint-config-clean-order'],

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
				{ name: 'mixin', type: 'at-rule' },
				'custom-properties',
				'declarations',
				{ hasBlock: true, name: 'media', type: 'at-rule' },
				'rules',
				'at-rules',
			],
		],

		'plugin/use-logical-properties-and-values': [true, { severity: 'warning' }],
		'plugin/use-logical-units': [true, { severity: 'warning' }],

		'selector-class-pattern': [
			/^(?!.*--)(?:[a-z][\da-z]*(?:-[\da-z]+)*|_[a-z][\da-z]*(?:-[\da-z]+)*)$/,
			{
				message:
					'Selector should be written in kebab-case and modifiers should start with _',
			},
		],
	},
}
