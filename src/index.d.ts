
declare const vueUseFontAwesomeIcon: {
  meta: any;
  rules: {
    'vue-use-font-awesome-icon/no-i-tag': {
      meta: any;
      create(context: any): void;
    };
  };
  configs: {
    legacy: {
      plugins: ['vue-use-font-awesome-icon'];
      rules: {
        'vue-use-font-awesome-icon/no-i-tag': 'error';
      };
    };
    flat: {
      plugins: {
        'vue-use-font-awesome-icon': typeof import('eslint-plugin-vue-use-font-awesome-icon');
      };
      rules: {
        'vue-use-font-awesome-icon/no-i-tag': 'error';
      };
    };
  };
};

export = vueUseFontAwesomeIcon;