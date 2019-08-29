import React from 'react'

import css from './Logo.scss'

export default class Logo extends React.Component {
  render () {
    let src = this.props.src
    return <div className={ css.Logo }>
      <div className={ css.img } style={{ backgroundImage: `url(${ src })` }}></div>
    </div>
  }
}