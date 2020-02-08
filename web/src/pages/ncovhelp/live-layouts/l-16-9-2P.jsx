// title: 16:9 双人，直播

import React from 'react'
import css from './live.scss'
import classNames from 'classnames/bind'

import ShowStore from '../../../api-ncovhelp/ShowStore'
import LayoutArea from '../../../components/ncovhelp/LayoutArea'
import { Logo, AFDLogo } from '../../../components/ncovhelp/Logo'
import TextRoll from '../../../components/ncovhelp/TextRoll'
import AFD from '../../../components/ncovhelp/AFD'

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
      'l-4-3': true
    })
    return <div className={ className }>
      <LayoutArea className={ css.BackGround } d={{ l: 0, t: 0, w: 1920, h: 1080 }} />
      <LayoutArea className={ css.Video } d={{ l: 0, t: 90, w: 960, h: 540 }} tip={ true } />
      <LayoutArea className={ css.Video } d={{ l: 960, t: 90, w: 960, h: 540 }} tip={ true } />

      <LayoutArea className={ css.TextRoll } d={{ l: 0, t: 0, w: 1920, h: 90 }}>
        <TextRoll />
      </LayoutArea>
      <LayoutArea className={ css.TextRoll } d={{ l: 0, t: 990, w: 1920, h: 90 }}>
        <TextRoll />
      </LayoutArea>

      <LayoutArea d={{ l: 0, t: 720, w: 384, h: 270 }}>
        <Logo />
      </LayoutArea>

      <LayoutArea d={{ l: 1536, t: 720, w: 384, h: 270 }}>
        <AFDLogo />
      </LayoutArea>

      <LayoutArea d={{ l: 384, t: 720, w: 1152, h: 270 }}>
        <AFD />
      </LayoutArea>

      <LayoutArea d={{ l: 0, t: 630, w: 384, h: 90 }}>
        <div className={ css.Runner }>{ show.runner1 }</div>
      </LayoutArea>
      <LayoutArea d={{ l: 1536, t: 630, w: 384, h: 90 }}>
        <div className={ css.Runner }>{ show.runner2 }</div>
      </LayoutArea>

      <LayoutArea d={{ l: 384, t: 630, w: 384, h: 90 }}>
        <div className={ css.Game }>{ show.name }</div>
      </LayoutArea>
      <LayoutArea d={{ l: 1152, t: 630, w: 384, h: 90 }}>
        <div className={ css.Category }>{ show.category }</div>
      </LayoutArea>
      <LayoutArea d={{ l: 768, t: 630, w: 384, h: 90 }}>
        <div className={ css.Timer }></div>
      </LayoutArea>
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