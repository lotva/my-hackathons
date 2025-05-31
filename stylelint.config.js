export default {
	extends: ['stylelint-config-standard-vue', 'stylelint-config-clean-order'],

	plugins: ['stylelint-plugin-logical-css'],

	rules: {
		'declaration-property-value-no-unknown': null,
		'no-descending-specificity': [true, { severity: 'warning' }],

		'order/order': [
			[
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
