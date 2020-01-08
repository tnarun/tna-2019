import React from 'react'

import css from './BorderGrid.scss'

/**
 * 带有 1px border 的 Grid
 * 用于 grid 布局中
 */

export default class BorderGrid extends React.Component {
  render () {
    return <div className={ css.BorderGrid }>{ this.props.children }</div>
  }
}