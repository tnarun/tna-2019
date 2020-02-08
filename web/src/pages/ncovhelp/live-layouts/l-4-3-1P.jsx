// title: 4:3 单人，直播

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
      <LayoutArea d={{ l: 0, t: 0, w: 1920, h: 1080 }} />
      <LayoutArea className={ css.Video } d={{ l: 600, t: 0, w: 1320, h: 990 }} tip={ true } />

      <LayoutArea d={{ l: 600, t: 990, w: 1320, h: 90 }}>
        <TextRoll />
      </LayoutArea>
      <LayoutArea d={{ l: 0, t: 0, w: 300, h: 270 }}>
        <Logo />
      </LayoutArea>
      <LayoutArea d={{ l: 300, t: 0, w: 300, h: 270 }}>
        <AFDLogo />
      </LayoutArea>
      <LayoutArea d={{ l: 0, t: 270, w: 600, h: 450 }}>
        <AFD />
      </LayoutArea>

      <LayoutArea d={{ l: 0, t: 720, w: 600, h: 90 }}>
        <div className={ css.Runner }>{ show.runnerString }</div>
      </LayoutArea>
      <LayoutArea d={{ l: 0, t: 810, w: 600, h: 90 }}>
        <div className={ css.Game }>{ show.name }</div>
      </LayoutArea>
      <LayoutArea d={{ l: 0, t: 900, w: 600, h: 90 }}>
        <div className={ css.Category }>{ show.category }</div>
      </LayoutArea>
      <LayoutArea d={{ l: 0, t: 990, w: 600, h: 90 }}>
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