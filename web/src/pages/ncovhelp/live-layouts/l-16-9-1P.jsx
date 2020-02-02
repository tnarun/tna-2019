// title: 16:9 单人，直播

import React from 'react'
import css from './live.scss'
import classNames from 'classnames/bind'

import ShowStore from '../../../api-ncovhelp/ShowStore'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      store: null,
      show: { }
    }
  }

  render () {
    let { show } = this.state
    let className = classNames.bind(css)({
      live: true,
      'l-16-9': true
    })
    return <div className={ className }>
      <div className={ css.BackGround }></div>
      <div className={ css.Video }>视频区域 1600 × 900，OBS 中不要露出黄线</div>
      <Area className={ css.TextRoll }>滚动文字区域 1600 × 90</Area>

      <Area className={ css.Logo }>活动 Logo 320 × 270</Area>
      <Area className={ css.Reward }>募捐公示 320 × 540</Area>
      <Area className={ css.Support }>支持者 320 × 270</Area>

      <div className={ css.Runner }>{ show.runnerString }</div>
      <div className={ css.Game }>{ show.name }</div>
      <div className={ css.Category }>{ show.category }</div>
      <Area className={ css.Timer }>计时器 400 × 90</Area>
    </div>
  }

  async componentDidMount () {
    let store = new ShowStore()
    await store.load()

    let { id } = this.props.location.query
    let show = store.getShow(id)
    console.log(store, id, show)

    this.setState({ store, show })
  }
}

class Area extends React.Component {
  render () {
    return <div className={ `${ css.Area } ${ this.props.className }` }>
      <div className={ css.areaInner }>{ this.props.children }</div>
    </div>
  }
}