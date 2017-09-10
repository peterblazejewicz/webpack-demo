module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['prettier'],
    parserOptions: {
        ecmaVersion: 7,
        ecmaFeatures: {
            modules: true,
        },
        sourceType: 'module',
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
                parser: 'typescript',
            },
        ],
    },
};
