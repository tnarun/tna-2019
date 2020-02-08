// title: 幕间休息

import React from 'react'
import css from './live.scss'
import classNames from 'classnames/bind'

import ShowStore from '../../../api-ncovhelp/ShowStore'
import LayoutArea from '../../../components/ncovhelp/LayoutArea'
import { Logo, AFDLogo } from '../../../components/ncovhelp/Logo'
import TextRoll from '../../../components/ncovhelp/TextRoll'
import moment from 'moment'
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
    let { show, nextShow, nextNextShow } = this.state
    let className = classNames.bind(css)({
      live: true,
      'l-4-3': true
    })
    return <div className={ className }>
      <LayoutArea d={{ l: 0, t: 0, w: 1920, h: 1080 }} />
      <LayoutArea d={{ l: 600, t: 0, w: 1320, h: 990 }}>
        <div className={ css.rest }>
          {
            show ? <CountDown data={ show } /> : null
          }
          <div>接下来的节目 UP NEXT</div>
          <Show data={ show } first={ true } />
          <Show data={ nextShow } />
          <Show data={ nextNextShow } />
        </div>
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

class Show extends React.Component {
  render () {
    let { data } = this.props
    
    if (data && data.isSecret) {
      return null
    }

    return data ? <div className={ `${css.Show} ${this.props.first ? css.first : ''}` }>
      <span className={ css.time }>{ data.startTime } - { data.endTime }</span>
      <span className={ css.info }>
        <span>{ data.name }</span>
        <span>{ data.category }</span>
        <span>{ data.runnerString }</span>
      </span>
    </div> : null
  }
}

class CountDown extends React.Component {
  render () {
    let { today, dstr } = this.state

    return <div className={ css.CountDownShow }>
      <h3>{ today} 下一个环节开始时间</h3>
      <div className={ css.cd }>{ dstr }</div>
    </div>
  }

  state = {
    today: '',
    dstr: ''
  }

  componentDidMount () {
    let  { data } = this.props
    let dataTime = data.startTimeString
    let today = moment(dataTime).format('YYYY-MM-DD')
    this.setState({ today })

    this.timer = setInterval(() => {
      let diff = moment(dataTime) - moment()
      diff = diff > 0 ? diff : 0
      let duration = moment.duration(diff)

      let d = duration.days()
      let h = duration.hours()
      let m = duration.minutes()
      let s = duration.seconds() 
  
      let _d = d > 0 ? `${d} 天` : ''
      let _h = `${ h } 小时`
      let _m = `${ m } 分钟`
      let _s = `${ s } 秒`
  
      let dstr = `${_d} ${_h} ${_m} ${_s}`
  
      this.setState({ dstr })
    }, 50);
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }
}