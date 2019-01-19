module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
    'import/resolver': {
      node: {
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'function-paren-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
  },
  globals: {
    test: true,
    expect: true,
    afterEach: true,
    describe: true,
    it: true,
    jest: true,
  },
}
