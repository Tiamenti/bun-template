// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    stylistic.configs.customize({
        indent: 4,
    }),
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/no-extra-semi': 'error',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@stylistic/quotes': ['warn', 'single'],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/comma-dangle': ['warn', 'always-multiline'],
            '@stylistic/eol-last': ['warn', 'always'],
            '@stylistic/object-curly-spacing': ['warn', 'always'],
            '@stylistic/arrow-parens': ['warn', 'always'],
            '@stylistic/member-delimiter-style': ['error', {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'comma',
                    requireLast: false,
                },
                multilineDetection: 'brackets',
            }],
        },
    },
);
