const path = require('path')
const diagnose = require('../../src')
const compare = require('../../src/reporter/compare')

diagnose([
  path.resolve(__dirname, '../vue/div.vue'),
  path.resolve(__dirname, '../jsbundle/list.js')
]).then(reports => {
  // console.log(reports)
})

// diagnose([
//   // .we 的例子
//   'http://dotwe.org/weex/e76b69e8308f9e7d4c357c8e7cca1df6',
//   'http://dotwe.org/weex/993a57b338ae04e103734d09e53d1127',
//   'http://dotwe.org/weex/cd494ae8a5fedf4750de7d4125295b69',
//   'http://dotwe.org/weex/19f2d50073573075dcc9501dceb6bfa6',
//   'http://dotwe.org/weex/b6a4976d18c911d8cf5908473cf31e00',
//   'http://dotwe.org/weex/5ad9dd917d8490729ae121601c6bfb07',


//   // .vue 的例子
//   'http://dotwe.org/vue/b70e50460b550b06c6106ac70632d7df',
//   'http://dotwe.org/vue/69fec81ee19fdbdd93dbc5dff2b37e37',
//   'http://dotwe.org/vue/cfcf3ca0b5c5a268b90890378b44d511',
//   'http://dotwe.org/vue/8d0ff654ce02639508a57f84b5afc72c',
//   'http://dotwe.org/vue/37342fb601ca1ff68d8459fdf5c35175',
//   'http://dotwe.org/vue/d10000c55ca961f1b619dd49defd7a58',
// ], { silent: true }).then(reports => {
//   // console.log(reports)
//   compare(reports)
// })
