import React from 'react'
import css from './SpeedrunPlayTime.scss'
import moment from 'moment'

const numberZero = (n) => {
  return n >= 10 ? n : `0${n}`
}

export default class extends React.Component {
  render () {
    let { time } = this.props
    let { primary } = time
    let duration = moment.duration(primary)
  
    let d = duration.days()
    let h = duration.hours()
    let m = duration.minutes()
    let s = duration.seconds()
    let ms = duration.milliseconds()
    // console.log(duration, primary, d, h, m, s)
  
    let _d = d > 0 ? `${d}d` : ''
    let _h = h > 0 ? `${h}h` : ''
    let _m = m > 0 ? `${numberZero(m)}m` : ''
    let _s = `${numberZero(s)}s`
    let _ms = ms > 0 ? `${ms}ms` : ''
    let str = [_d, _h, _m, _s, _ms].join(' ')
  
    return (
      <span className={ css.playtime }>{ str }</span>
    )
  }
}