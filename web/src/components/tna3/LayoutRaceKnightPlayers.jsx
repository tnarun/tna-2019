import React from 'react'

import css from './layouts.scss'

export default class LayoutRacePlayers extends React.Component {
  render () {
    let { data } = this.props

    return <div className={ css.LayoutRacePlayers }>
      <div className={ css.pk1 }>{ data.player[0] }</div>
      <div className={ css.timer }>640 × 80 x:650 y: 540</div>
      <div className={ css.pk2 }>{ data.player[1]}</div>
    </div>
  }
}