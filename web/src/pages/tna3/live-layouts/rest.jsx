// title: 幕间休息

import React from 'react'

import css from './live.scss'

import { loadSchedueData } from '../../../data/tna3/data'

import LayoutTNA from '../../../components/tna3/LayoutTNA'
import LayoutNextShow from '../../../components/tna3/LayoutNextShow'
import LayoutAD from '../../../components/tna3/LayoutAD'
import LayoutAWD from '../../../components/tna3/LayoutAWD'

import moment from 'moment'

export default class extends React.Component {
  render () {
    let { data1, data2, data3 } = this.state

    return <div className={ css.live }>
      <div className={ css['c-rest'] }>
        <div className={ css.logo }><LayoutTNA /></div>
        <div className={ css.ad }>
          <div className={ css.adi }>
            <div className={ css.adii }>
              <LayoutAD />
            </div>
            <div className={ css.adii }>
              <LayoutAWD />
            </div>
          </div>
        </div>
        {
          data1 ? <div className={ css.next1 }>
            <LayoutNextShow data={ data1 } type='next' />
          </div> : null
        }
        {
          data2 ? <div className={ css.next2 }>
            <LayoutNextShow data={ data2 } />
          </div> : null
        }
        {
          data3 ? <div className={ css.next3 }>
            <LayoutNextShow data={ data3 } />
          </div> : null
        }
        <div className={ css.upnext }>UP NEXT 接下来有</div>
        <div className={ css.countdown }>
          {
            ['1-1', '2-1', '3-1'].includes(this.state.id) ? <CountDown data={ data1 } /> : <>
              <h3>准备时间</h3>
              <div>
                <span>下一个节目大约在</span>
                <span className={ css.gtime }>{ moment(data1.time).format('HH:mm') }</span>
                <span>开始</span>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  }

  componentWillMount () {
    let { id } = this.props.location.query
    let days = loadSchedueData()
    let arr = id.split('-')

    let data1 = days[`DAY${ arr[0] }`][~~arr[1] - 1]
    let data2 = days[`DAY${ arr[0] }`][~~arr[1]]
    let data3 = days[`DAY${ arr[0] }`][~~arr[1] + 1]

    this.setState({ id, data1, data2, data3 })
  }
}

class CountDown extends React.Component {
  render () {
    let { today, dstr } = this.state

    return <div className={ css.CountDownShow }>
      <h3>{ today} 活动即将开始</h3>
      <div className={ css.cd }>{ dstr }</div>
    </div>
  }

  state = {
    today: '',
    dstr: ''
  }

  componentDidMount () {
    let  { data } = this.props
    let today = moment(data.time).format('YYYY-MM-DD')
    this.setState({ today })

    this.timer = setInterval(() => {
      let diff = moment(data.time) - moment()
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