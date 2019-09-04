const yamlData = require('./tna3-baoming.yaml')
const yaml = require('js-yaml')

const loadBaomingData = () => {
  let s = yamlData.split('base64,')[1]
  return yaml.safeLoad(new Buffer(s, 'base64'))
}

module.exports = { loadBaomingData }