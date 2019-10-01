const schedueData = require('./kksk2-schedule.yaml')
const yaml = require('js-yaml')

const loadSchedueData = () => {
  let s = schedueData.split('base64,')[1]
  return yaml.safeLoad(new Buffer(s, 'base64'))
}

module.exports = { loadSchedueData }