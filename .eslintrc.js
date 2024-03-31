module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['config/*'],
  plugins: ['react', '@typescript-eslint', 'eslint-comments', 'promise', 'unicorn', 'prettier', 'unused-imports'],
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 0,
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'import/named': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          e: {
            event: false,
          },
          res: false,
          props: false,
          params: false,
          str: false,
          args: false,
          ref: false,
        },
      },
    ],
    'no-restricted-exports': 'off',
    '@typescript-eslint/no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-array-reduce': 'off',
    'linebreak-style': ['error', 'unix'],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        // Allow CJS until ESM support improves
        '@typescript-eslint/no-var-requires': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
