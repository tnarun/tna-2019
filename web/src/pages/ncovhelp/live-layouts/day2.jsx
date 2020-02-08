// title: 第二天节目单

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
      show: null,
      nextShow: null,
      nextNextShow: null
    }
  }

  render () {
    // let { show, nextShow, nextNextShow } = this.state
    let className = classNames.bind(css)({
      live: true,
      'l-4-3': true
    })
    return <div className={ className }>
      <LayoutArea d={{ l: 0, t: 0, w: 1920, h: 1080 }} />
      <LayoutArea d={{ l: 600, t: 0, w: 1320, h: 990 }}>
        <ShowList />
      </LayoutArea>

      <LayoutArea d={{ l: 600, t: 990, w: 1320, h: 90 }}>
        <TextRoll />
      </LayoutArea>
      <LayoutArea d={{ l: 0, t: 0, w: 600, h: 270 }}>
        <Logo />
      </LayoutArea>
      <LayoutArea d={{ l: 0, t: 270, w: 600, h: 270 }}>
        <AFDLogo />
      </LayoutArea>
      <LayoutArea d={{ l: 0, t: 540, w: 600, h: 540 }}>
        <AFD />
      </LayoutArea>
    </div>
  }

  async componentDidMount () {
    let store = new ShowStore()
    await store.load()

    let { id } = this.props.location.query
    let show = store.getShow(id)
    let nextShow = store.getNextShow(id)
    let nextNextShow = store.getNextNextShow(id)
    // console.log(store, id, show, nextShow, nextNextShow)

    this.setState({ store, show, nextShow, nextNextShow })
  }
}

class ShowList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      store: null
    }
  }

  render () {
    let { store } = this.state
    if (!store) {
      return null
    }

    let day2 = store.days[1]

    return <div className={ css.ShowList }>
      <h3>节目单 DAY2</h3>
      <Day data={ day2 } />
    </div>
  }

  async componentDidMount () {
    let store = new ShowStore()
    await store.load()
    this.setState({ store })
  }
}

class Day extends React.Component {
  render () {
    let { data } = this.props
    let { shows } = data 
    let _shows = shows
      .filter((x) => !x.isSecret)
      .map((x, idx) => {
        return <div className={ css.show } key={ idx }>
          <span>{ x.name }</span>
          <span>{ x.runnerString }</span>
          <span>{ x.category }</span>
          <span>{ x.data.start } - { x.data.end }</span>
        </div>
      })
    return <div className={ css.Day }>
      <div className={ css.header }>
        <span>游戏</span>
        <span>表演者</span>
        <span>项目分类</span>
        <span>开始与结束时间</span>
      </div>
      { _shows }
    </div>
  }
}