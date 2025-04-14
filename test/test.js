const { RuleTester } = require('eslint')
const rule = require('../src/rules/string-syntax')

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
})

tester.run('string-syntax', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: `<template><font-awesome-icon></font-awesome-icon></template>`,
    },
    {
      filename: 'test.vue',
      code: `<template><font-awesome-icon class="test"></font-awesome-icon></template>`,
    },
    {
      filename: 'test.vue',
      code: `<template><font-awesome-icon icon="fa-solid"></font-awesome-icon></template>`,
    },
    {
      filename: 'test.vue',
      code: `<template><font-awesome-icon :icon="['fas']"></font-awesome-icon></template>`,
    },
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: `<template><i></i></template>`,
      errors: [{ message: '<i> tag is not allowed. Use <font-awesome-icon> instead.' }],
      output: '<template><font-awesome-icon /></template>'
    },
    {
      filename: 'test.vue',
      code: `<template><i>contents</i></template>`,
      errors: [{ message: '<i> tag is not allowed. Use <font-awesome-icon> instead.' }],
      output: '<template><font-awesome-icon>contents</font-awesome-icon></template>'
    },
    {
      filename: 'test.vue',
      code: `<template><i class="fa-solid fa-xmark test"></i></template>`,
      errors: [{ message: '<i> tag is not allowed. Use <font-awesome-icon> instead.' }],
      output: '<template><font-awesome-icon class="test" icon="fa-solid fa-xmark" /></template>'
    },
    {
      filename: 'test.vue',
      code: `<template><i class="test test2"></i></template>`,
      errors: [{ message: '<i> tag is not allowed. Use <font-awesome-icon> instead.' }],
      output: '<template><font-awesome-icon class="test test2" /></template>'
    },
    {
      filename: 'test.vue',
      code: `<template><i id="test"></i></template>`,
      errors: [{ message: '<i> tag is not allowed. Use <font-awesome-icon> instead.' }],
      output: '<template><font-awesome-icon id="test" /></template>'
    },
    {
      filename: 'test.vue',
      code: `<template><i v-if="flg" class="fa-test"></i></template>`,
      errors: [{ message: '<i> tag is not allowed. Use <font-awesome-icon> instead.' }],
      output: '<template><font-awesome-icon icon="fa-test" v-if="flg" /></template>'
    },
  ],
})