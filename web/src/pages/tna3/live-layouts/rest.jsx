// 幕间休息

import React from 'react'

import css from './live.scss'

import { loadSchedueData } from '../../../data/tna3/data'

import LayoutTNA from '../../../components/tna3/LayoutTNA'
import LayoutNextShow from '../../../components/tna3/LayoutNextShow'

import moment from 'moment'

export default class extends React.Component {
  render () {
    let { data1, data2, data3 } = this.state

    return <div className={ css.live }>
      <div className={ css['c-rest'] }>
        <div className={ css.logo }><LayoutTNA /></div>
        <div className={ css.ad }>恰饭</div>
        {
          data1 ? <div className={ css.next1 }>
            <LayoutNextShow data={ data1 } type='next' />
          </div> : null
        }
        {
          data2 ? <div className={ css.next2 }>
            <LayoutNextShow data={ data2 } type='next' />
          </div> : null
        }
        {
          data3 ? <div className={ css.next3 }>
            <LayoutNextShow data={ data3 } type='next' />
          </div> : null
        }
        <div className={ css.upnext }>UP NEXT 接下来有</div>
        <div className={ css.countdown }>
          <h3>准备时间</h3>
          <div>
            <span>下一个节目大约在</span>
            <span className={ css.gtime }>{ moment(data1.time).format('HH:mm') }</span>
            <span>开始</span>
          </div>
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

    this.setState({ data1, data2, data3 })
  }
}