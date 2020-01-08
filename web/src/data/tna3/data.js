const baomingData = require('./tna3-baoming.yaml')
const schedueData = require('./tna3-schedue.yaml')
const yaml = require('js-yaml')

const loadBaomingData = () => {
  let s = baomingData.split('base64,')[1]
  return yaml.safeLoad(new Buffer(s, 'base64'))
}

const loadSchedueData = () => {
  let s = schedueData.split('base64,')[1]
  return yaml.safeLoad(new Buffer(s, 'base64'))
}

module.exports = { loadBaomingData, loadSchedueData }