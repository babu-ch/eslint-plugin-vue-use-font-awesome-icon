
module.exports = {
  meta: require('./meta'),

  rules: {
    'no-i-tag': require('./rules/string-syntax')
  },

  configs: {
    recommended: {
      plugins: ['vue-use-font-awesome-icon'],
      rules: {
        'vue-use-font-awesome-icon/no-i-tag': 'error'
      }
    }
  }
}