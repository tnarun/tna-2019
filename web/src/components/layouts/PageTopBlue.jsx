import React from 'react'

import css from './PageTopBlue.scss'

export default class PageTopBlue extends React.Component {
  render () {
    let height = this.props.height || '10rem'

    return <div className={ css.PageTopBlue } style={{ height }}></div>
  }
}