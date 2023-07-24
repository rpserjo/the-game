module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'airbnb'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'max-len': ['warn', { code: 100 }],
        '@typescript-eslint/no-unused-vars': 2,
        'react/jsx-boolean-value': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'comma-dangle': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-console': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/function-component-definition': 'off',
        'react/button-has-type': 'off',
        'react/require-default-props': 'off',
        'object-curly-newline': 'off',
        'linebreak-style': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'no-unused-expressions': ['error', { allowTernary: true, allowShortCircuit: true }],
        'operator-linebreak': ['error', 'before'],
        'prefer-template': 'off',
        'no-nested-ternary': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'no-unused-vars': 'off',
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'max-classes-per-file': 'off',
        camelcase: 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        'class-methods-use-this': 'off',
        'newline-per-chained-call': 'off',
    },
};
