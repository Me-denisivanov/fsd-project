module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    indent: [2, 2],
    'linebreak-style': 0,
    'implicit-arrow-linebreak': 0,
    'react/jsx-indent': [2, 2],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'object-curly-newline': 'off',
    'max-len': ['error', { code: 170 }],
    'react/jsx-indent-props': [2, { indentMode: 2, ignoreTernaryOperator: true }],
    'react/jsx-filename-extension': [2, { extensions: ['js', 'jsx', 'ts', 'tsx'] }],
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react-require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'react/button-has-type': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-tag-spacing': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies,
    'no-param-reassign': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
