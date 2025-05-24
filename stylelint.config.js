export default {
	extends: ['stylelint-config-standard-vue', 'stylelint-config-clean-order'],

	plugins: ['stylelint-plugin-logical-css'],

	rules: {
		'no-descending-specificity': [true, { severity: 'warning' }],

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
