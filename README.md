# eslint-plugin-vue-use-font-awesome-icon

Disallow `<i>` tags in Vue templates and suggest using `<font-awesome-icon>` instead.

## ✨ Features

- Detects and reports usage of `<i>` tags in Vue templates.
- Provides autofix to replace `<i>` tags with `<font-awesome-icon>`.
- Moves relevant `class` values to `icon` or `class` props on `<font-awesome-icon>`.

### 💡 Example

**Before**
```html
<i class="fas fa-user other-class"></i>
```

**After**
```html
<font-awesome-icon icon="fas fa-user" class="other-class" />
```

## 📦 Installation

```bash
npm install eslint-plugin-vue-use-font-awesome-icon --save-dev
```

## Usage

```js
module.exports = {
  plugins: ["vue-use-font-awesome-icon"],
  rules: {
    "vue-use-font-awesome-icon/no-i-tag": "warn"
  }
};
```

or extends

```js
module.exports = {
  "extends": [
    "plugin:vue-use-font-awesome-icon/legacy"
  ]
};
```

flat config

```js
import eslintPluginFontAwesome from 'eslint-plugin-vue-use-font-awesome-icon'

export default typescriptEslint.config(
  {
    extends: [
      eslintPluginFontAwesome.configs.flat
    ]
  }
)
```