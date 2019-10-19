// title: 16:9 单人，直播

import React from 'react'

import css from './live.scss'

import { loadSchedueData } from '../../../data/kksk2/data'

import LayoutGameName from '../../../components/kksk2/LayoutGameName'
import LayoutTimer from '../../../components/kksk2/LayoutTimer'
import LayoutLOGO from '../../../components/kksk2/LayoutLogoKKSK2'
import LayoutGameCover from '../../../components/kksk2/LayoutGameCover'
import LiveBG from '../../../components/kksk2/LiveBG'

export default class extends React.Component {
  render () {
    let { data } = this.state

    return <div className={ css.live }>
      <div className={ css['c-16-9-single'] }>
        <div className={ css.bgoff }>
          <LiveBG />
        </div>

        <div className={ css.video }>
          <span>1600 × 900</span>
          <LayoutGameCover data={ data } />
        </div>
        <div className={ css.lattrs }>
          <div className={ css.pv1 }>
            选手头像
          </div>
          <div className={ css.logo }><LayoutLOGO /></div>
        </div>
        <div className={ css.battrs }>
          <div className={ css.timer }><LayoutTimer data={ data } s='' /></div>
          <div className={ css.game }><LayoutGameName data={ data } /></div>
        </div>
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
    window.document.title = data.cnName
  }
}