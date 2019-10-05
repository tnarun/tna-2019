import React from 'react'

import css from './layouts.scss'

import TNALogo from '../../components/grids/TNALogo'

export default class LayoutTNA extends React.Component {
  render () {
    let kls = css[this.props.type]

    return <div className={ css.LayoutTNA }>
      <TNALogo />
      <div className={ `${css.link} ${kls}` }>tnarun.com</div>
      <div className={ `${css.link} ${kls}` }>weibo.com/TNASR</div>
    </div>
  }
}