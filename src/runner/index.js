const semver = require('semver')
const getFrameworks = require('./frameworks')
const WeexNodeRunner = require('./runner')
const { sizeof } = require('../utils')

function getWeexRuntime (version) {
  // console.log(` => runtime version is ${version}`)
  if (version) {
    const folder = `${semver.major(version)}.${semver.minor(version)}`
    return require(`weex-js-runtime-packages/${folder}/${version}`)
  }
  return require('weex-js-runtime')
}

function handleError (error) {
  console.log(` => handle error`)
  // console.log(error)
}

function runner (jsbundle, analyser, options = {}) {
  // console.log(' => run runner')
  // console.log(jsbundle)
  analyser.takeRecord('bundleSize', sizeof(jsbundle))
  const runtime = getWeexRuntime(options.packages['weex-js-runtime'])
  const frameworks = getFrameworks()
  const nodeRunner = new WeexNodeRunner(frameworks, runtime, {}, analyser)

  // TODO: handle exceptions
  return nodeRunner.execute(jsbundle)
    // .catch(result => {
    //   handleError(result)
    //   return result
    // })

}

module.exports = runner
