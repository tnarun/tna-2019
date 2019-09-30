import React from 'react'

import css from './layouts.scss'

import TNALogo from '../../components/grids/TNALogo'

export default class LayoutTNA extends React.Component {
  render () {
    return <div className={ css.LayoutTNA }>
      <TNALogo />
      <div className={ css.link }>tnarun.com</div>
      <div className={ css.link }>weibo.com/TNASR</div>
    </div>
  }
}