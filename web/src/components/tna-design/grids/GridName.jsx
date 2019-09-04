import React from 'react'

import css from './GridName.scss'

export default class GridName extends React.Component {
  render () {
    return <div className={ css.GridName }>{ this.props.children }</div>
  }
}