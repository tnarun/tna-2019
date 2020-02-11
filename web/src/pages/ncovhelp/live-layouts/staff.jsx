// title: STAFF

import React from 'react'
import css from './live.scss'
import classNames from 'classnames/bind'

import LayoutArea from '../../../components/ncovhelp/LayoutArea'
import AFDRoll from '../../../components/ncovhelp/AFDRoll'
import StaffRoll from '../../../components/ncovhelp/StaffRoll'

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

      <LayoutArea d={{ l: 0, t: 0, w: 1920, h: 90 }}>
        <div className={ css.staffthanks }>
          <h3>TNASP 全部活动已结束，有缘再会！</h3>
        </div> 
      </LayoutArea>

      <LayoutArea d={{ l: 0, t: 990, w: 1920, h: 90 }}>
        <div className={ css.staffthanks }>
          <h4>后续动态与公示请关注：微博：<span>@TNA速通会</span> - 网站：<span>tnarun.com</span></h4>
        </div> 
      </LayoutArea>

      <LayoutArea d={{ l: 0, t: 90, w: 960, h: 900 }}>
        <div className={ css.stafflogo }>
          <div className={ css.bg1 }></div>
        </div>
      </LayoutArea>

      <LayoutArea d={{ l: 960, t: 90, w: 960, h: 900 }}>
        <div className={ css.stafflogo }>
          <div className={ css.bg2 }></div>
        </div>
      </LayoutArea>

      <LayoutArea d={{ l: 0, t: 90, w: 960, h: 900 }}>
        <StaffRoll />
      </LayoutArea>

      <LayoutArea d={{ l: 960, t: 90, w: 960, h: 900 }}>
        <AFDRoll />
      </LayoutArea>
    </div>
  }
}