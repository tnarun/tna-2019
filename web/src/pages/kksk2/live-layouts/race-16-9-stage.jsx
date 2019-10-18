// title: 16:9 竞速：一般布局

import React from 'react'

import css from './live.scss'

import { loadSchedueData } from '../../../data/kksk2/data'

import LayoutLOGO from '../../../components/kksk2/LayoutLogoKKSK2'
import LayoutGameName from '../../../components/kksk2/LayoutGameName'
import LayoutGameCover from '../../../components/kksk2/LayoutGameCover'

export default class extends React.Component {
  render () {
    let { data } = this.state

    return <div className={ css.live }>
      <div className={ css['c-16-9-race-stage'] }>
        <div className={ css.video1 }>
          <span>880 × 495</span>
          <LayoutGameCover data={ data } />
        </div>

        <div className={ css.video2 }>
          <span>880 × 495</span>
          <LayoutGameCover data={ data } />
        </div>

        <div className={ css.pv1 }>选手1</div>
        <div className={ css.pv2 }>选手2</div>

        <div className={ css.p1name }>{ data.players[0] }</div>
        <div className={ css.p2name }>{ data.players[1] }</div>

        <div className={ css.info }>
          <div className={ css.name }>{ data.cnName }</div>
          <div className={ css.timer }></div>
          <div className={ css.category }>{ data.category }</div>
        </div>

        <div className={ css.timer1 }></div>
        <div className={ css.timer2 }></div>
      </div>
    </div>
  }

  componentWillMount () {
    let { id } = this.props.location.query
    let days = loadSchedueData()
    let arr = id.split('-')
    let data = days[`DAY${ arr[0] }`][~~arr[1] - 1]
    console.log(id, data)
    this.setState({ data })
  }
}