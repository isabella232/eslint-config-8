module.exports = {
	extends: ['plugin:@wordpress/eslint-plugin/recommended-with-formatting', './react'],
	globals: {
		window: true,
		document: true,
		wp: 'readonly',
		lodash: true,
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		'@wordpress/dependency-group': 0,
		'import/no-unresolved': [2, { ignore: ['^@wordpress/'] }],
	},
};
