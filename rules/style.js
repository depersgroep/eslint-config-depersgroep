module.exports = {
	rules: {
		'array-bracket-spacing': ['error', 'never'],
		'array-element-newline': ['error', {'multiline': true}],
		'block-spacing': ['error', 'always'],
		'brace-style': ['error', '1tbs', {'allowSingleLine': false}],
		'camelcase': ['error', {'properties': 'always'}],
		'capitalized-comments': 'off',
		'comma-dangle': 'error',
		'comma-spacing': ['error', {'before': false, 'after': true}],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'consistent-this': ['off', 'self'],
		'eol-last': 'error',
		'func-call-spacing': ['error', 'never'],
		'func-name-matching': 'off',
		'func-names': 'off',
		'func-style': ['error', 'declaration'],
		'function-paren-newline': ['error', 'never'],
		'id-blacklist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'implicit-arrow-linebreak': ['error', 'beside'],
		'indent': ['error', 'tab', {'SwitchCase': 1}],
		'jsx-quotes': ['error', 'prefer-double'],
		'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}],
		'keyword-spacing': ['error', {'before': true, 'after': true}],
		'line-comment-position': 'off',
		'linebreak-style': 'off',
		'lines-around-comment': ['error', {'beforeBlockComment': true, 'beforeLineComment': true, 'allowBlockStart': true, 'allowBlockEnd' : true}],
		'lines-between-class-members': 'error',
		'max-depth': 'off',
		'max-len': 'off',
		'max-lines': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'max-statements-per-line': ['error', {'max': 1}],
		'multiline-comment-style': 'off',
		'multiline-ternary': ['error', 'never'],
		'new-cap': 'error',
		'new-parens': 'error',
		'newline-per-chained-call': 'off',
		'no-array-constructor': 'error',
		'no-bitwise': 'off',
		'no-continue': 'off',
		'no-inline-comments': 'off',
		'no-lonely-if': 'off',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': ['error', {'max': 1}],
		'no-negated-condition': 'error',
		'no-nested-ternary': 'off',
		'no-new-object': 'error',
		'no-plusplus': 'off',
		'no-restricted-syntax': 'off',
		'no-tabs': 'off',
		'no-ternary': 'off',
		'no-trailing-spaces': ['error', {'skipBlankLines': false}],
		'no-underscore-dangle': 'off',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': 'off', // curly-rule states that curly braces should always be used therefor this rule can be disabled
		'object-curly-newline': ['error', {'multiline': true, 'minProperties': 1}],
		'object-curly-spacing': ['error', 'never'],
		'object-property-newline': 'error',
		'one-var-declaration-per-line': 'off',
		'one-var': ['error', {'var': 'always', 'let': 'consecutive', 'const': 'consecutive'}],
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': 'off',
		'padded-blocks': ['error', 'never'],
		'padding-line-between-statements': ['error',
			{
				'blankLine': 'always',
				'prev': ['const', 'let', 'var'],
				'next': '*'
			},
			{
				'blankLine': 'any',
				'prev': ['const', 'let', 'var'],
				'next': ['const', 'let', 'var']
			}, // objects above replaces newline-after-var
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'return'
			}, // object above replaces newline-before-return
			{
				'blankLine': 'always',
				'prev': 'directive',
				'next': '*'
			},
			{
				'blankLine': 'any',
				'prev': 'directive',
				'next': 'directive'
			}, // 2 objects above replaces lines-around-directive
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'case'
			},
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'default'
			},
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'do'
			},
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'for'
			},
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'function'
			},
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'if'
			},
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'switch'
			},
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'try'
			},
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'while'
			},
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'with'
			}
		],
		'quote-props': ['error', 'always'],
		'quotes': ['error', 'single'],
		'require-jsdoc': 'off',
		'semi-spacing': ['error', {'before': false, 'after': true}],
		'semi': ['error', 'always'],
		'semi-style': ['error', 'last'],
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': ['error', {'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}],
		'space-before-function-paren': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': ['error', {'int32Hint': false}],
		'space-unary-ops': ['error', {'words': true, 'nonwords': false}],
		'spaced-comment': ['error', 'always'],
		'switch-colon-spacing': 'error',
		'template-tag-spacing': ['error', 'always'],
		'unicode-bom': ['error', 'never'],
		'wrap-regex': 'off'
	}
};
