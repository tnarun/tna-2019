// title: 4:3 单人，直播

import React from 'react'
import css from './live.scss'
import classNames from 'classnames/bind'

export default class extends React.Component {
  render () {
    let className = classNames.bind(css)({
      live: true,
      'l-4-3': true
    })
    return <div className={ className }>
      <div className={ css.BackGround }></div>
      <div className={ css.Video }>视频区域 1320 × 990, OBS 中不要露出黄线</div>
      <Area className={ css.TextRoll }>滚动文字区域 1600 × 90</Area>

      <Area className={ css.Logo }>活动 Logo 320 × 270</Area>
      <Area className={ css.Reward }>募捐公示 320 × 540</Area>
      <Area className={ css.Support }>支持者 320 × 270</Area>

      <Area className={ css.Runner }>Runner 400 × 90</Area>
      <Area className={ css.Game }>游戏 400 × 90</Area>
      <Area className={ css.Category }>规则分类 400 × 90</Area>
      <Area className={ css.Timer }>计时器 400 × 90</Area>
    </div>
  }
}

class Area extends React.Component {
  render () {
    return <div className={ `${ css.Area } ${ this.props.className }` }>
      <div className={ css.areaInner }>{ this.props.children }</div>
    </div>
  }
}