module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': ['warn', {
      singleline: 10,
      multiline: {
        max: 1

      }
    }]
  }
}
