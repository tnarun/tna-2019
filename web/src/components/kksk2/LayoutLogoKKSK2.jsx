import React from 'react'

import css from './layouts.scss'

import KKSK2Logo from '../../components/grids/KKSK2Logo'

export default class extends React.Component {
  render () {
    let kls = css[this.props.type]
    let { notext } = this.props

    if (notext) {
      return <div className={ `${ css.LayoutKKSK2 } ${ css.notext }` }>
        <KKSK2Logo />
      </div>
    }

    return <div className={ css.LayoutKKSK2 }>
      <KKSK2Logo />
      <div className={ `${css.link} ${kls}` }>KKSK2</div>
    </div>
  }
}