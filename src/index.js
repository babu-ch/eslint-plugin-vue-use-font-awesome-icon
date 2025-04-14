const meta = require('./meta');
const noITagRule = require('./rules/string-syntax');

const plugin = {
  meta,
  rules: {
    'no-i-tag': noITagRule,
  },
};

plugin.configs = {
  legacy: {
    plugins: ['vue-use-font-awesome-icon'],
    rules: {
      'vue-use-font-awesome-icon/no-i-tag': 'error',
    },
  },

  flat: {
    plugins: {
      'vue-use-font-awesome-icon': plugin
    },
    rules: {
      'vue-use-font-awesome-icon/no-i-tag': 'error',
    },
  },
};

module.exports = plugin;