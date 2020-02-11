// title: 第二天结束

import React from 'react'
import css from './live.scss'
import classNames from 'classnames/bind'

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

      <LayoutArea d={{ l: 0, t: 540, w: 1920, h: 450 }}>
        <div className={ css.thanks }>
          <h3>TNASP 全部活动已结束，有缘再会！</h3>
          <h4>感谢大家的支持，我们是最好的 Runner 和观众！</h4>
        </div> 
      </LayoutArea>

      <LayoutArea d={{ l: 0, t: 990, w: 1920, h: 90 }}>
        <TextRoll />
      </LayoutArea>

      <LayoutArea d={{ l: 0, t: 0, w: 600, h: 270 }}>
        <Logo />
      </LayoutArea>
      <LayoutArea d={{ l: 0, t: 270, w: 600, h: 270 }}>
        <AFDLogo />
      </LayoutArea>

      <LayoutArea d={{ l: 600, t: 0, w: 1320, h: 540 }}>
        <AFD />
      </LayoutArea>
    </div>
  }
}