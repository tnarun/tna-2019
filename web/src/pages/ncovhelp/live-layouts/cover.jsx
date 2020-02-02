// title: 4:3 单人，直播

import React from 'react'
import css from './live.scss'
import classNames from 'classnames/bind'

export default class extends React.Component {
  render () {
    let className = classNames.bind(css)({
      live: true,
      'cover': true
    })
    return <div className={ className }>
      <div className={ css.Cover }>直播活动封面，放海报，待定</div>
    </div>
  }
}