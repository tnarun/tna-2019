import React from 'react'

import css from './layouts.scss'

export default class LayoutRacePlayers extends React.Component {
  render () {
    let { data } = this.props

    return <div className={ css.LayoutRacePlayers }>
      <div className={ css.p1 }>{ data.players[0] }</div>
      <div className={ css.timer }>640 × 80 x:650 y: 540</div>
      <div className={ css.p2 }>{ data.players[1]}</div>
    </div>
  }
}