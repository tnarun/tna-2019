import React from 'react'

import css from './layouts.scss'

export default class LayoutTimer extends React.Component {
  render () {
    let { data } = this.props

    return <div className={ css.LayoutTimer }>
      <div className={ css.runner }>{ data.player }</div>
      <div className={ css.timer }></div>
    </div>
  }
}