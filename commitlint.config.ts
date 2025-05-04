import type { UserConfig } from '@commitlint/types'

import { RuleConfigSeverity } from '@commitlint/types'

export default <UserConfig>{
	extends: ['@commitlint/config-conventional'],
	formatter: '@commitlint/format',
	rules: {
		'body-max-length': [RuleConfigSeverity.Disabled],
		'body-max-line-length': [RuleConfigSeverity.Disabled],
	},
}
