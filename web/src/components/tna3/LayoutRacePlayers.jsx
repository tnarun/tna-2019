import React from 'react'

import css from './layouts.scss'

export default class LayoutRacePlayers extends React.Component {
  render () {
    let { data } = this.props

    return <div className={ css.LayoutRacePlayers }>
      <div className={ css.p1 }>{ data.player[0] }</div>
      <div className={ css.timer }></div>
      <div className={ css.p2 }>{ data.player[1]}</div>
    </div>
  }
}