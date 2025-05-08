import path from 'node:path'

export default {
	plugins: {
		'postcss-mixins': {
			mixinsDir: path.resolve(import.meta.dirname, 'src/(core)/styles'),
		},
	},
}
