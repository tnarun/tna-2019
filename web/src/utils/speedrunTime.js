const moment = require('moment')

const speedrunTime = (ptstr) => {
  let d = moment.duration(ptstr)

  let h = d.hours()
  let m = d.minutes()
  let s = d.seconds()

  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s

  return [
    h ? `${ h }h` : '',
    m ? `${ m }m` : '',
    s ? `${ s }s` : '',
  ].join(' ')
}

const estTime = (ptstr) => {
  let d = moment.duration(ptstr)

  let h = d.hours()
  let m = d.minutes()
  let s = d.seconds()

  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s

  s = s === '00' ? null : s
  m = m === '00' ? null : m

  return [
    h ? `${ h }h` : '',
    m ? `${ m }m` : '',
    s ? `${ s }s` : '',
  ].join(' ')
}

const estTimeCN = (ptstr) => {
  let str1 = estTime(ptstr)
  return str1.replace('h', ' 小时').replace('m', ' 分钟')
}

module.exports = { speedrunTime, estTime, estTimeCN }