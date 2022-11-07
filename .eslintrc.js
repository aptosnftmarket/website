module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: false, // Jest global variables like `it` etc.
    node: true // Defines things like process.env when generating through node
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser', // Uses babel-eslint transforms.
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  plugins: [
    'import', // eslint-plugin-import plugin: https://www.npmjs.com/package/eslint-plugin-import
    'promise' // eslint-plugin-promise plugin: https://www.npmjs.com/package/eslint-plugin-promise
  ],
  root: true, // For configuration cascading.
  globals: {
    React: true,
    JSX: true
  },
  settings: {
    react: {
      version: 'detect' // Detect react version
    }
  },
  ignorePatterns: ['**/*.css'], // TODO: Think once again how to disable eslint for a particular line in css file
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-shadow': ['warn', { builtinGlobals: false, hoist: 'functions', allow: [] }],
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/no-cycle': 'error',
    'import/no-default-export': 'warn',
    'no-console': ['warn', { allow: ['error', 'warn', 'info'] }],
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'promise/catch-or-return': ['error', { allowFinally: true }],
    'react/jsx-key': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/react-in-jsx-scope': 'off',
    'sort-imports': ['warn', { ignoreCase: false, ignoreDeclarationSort: true, ignoreMemberSort: false }]
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint'],
      // You can add Typescript specific rules here.
      // If you are adding the typescript variant of a rule which is there in the javascript
      // ruleset, disable the JS one.
      rules: {
        // '@typescript-eslint/no-array-constructor': 'warn',
        // 'no-array-constructor': 'off'
      }
    }
  ]
}
