import React from 'react'

import css from './layouts.scss'

import { estTimeCN } from '../../utils/speedrunTime'

export default class LayoutNextShow extends React.Component {
  render () {
    let { data } = this.props

    let player = typeof(data.player) == 'string' ? data.player : data.player.join(' × ')

    return <div className={ `${css.LayoutNextShow} ${css[this.props.type]}` }>
      <div className={ css.name }>{ data.cnName }</div>
      <div className={ css.info }>
        <div className={ css.ii }>{ player }</div>
        <div className={ css.ii }>{ data.category }</div>
        <div className={ css.ii }>{ estTimeCN(data.est) }</div>
      </div>
    </div>
  }
}