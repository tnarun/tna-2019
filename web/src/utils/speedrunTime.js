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

module.exports = { speedrunTime }