// title: 4:3 单人，直播

import React from 'react'

import css from './live.scss'

import { loadSchedueData } from '../../../data/kksk2/data'

import LayoutLOGO from '../../../components/kksk2/LayoutLogoKKSK2'
import LayoutGameName from '../../../components/kksk2/LayoutGameName'
import LayoutTimer from '../../../components/kksk2/LayoutTimer'
import LayoutGameCover from '../../../components/kksk2/LayoutGameCover'
import LiveBG from '../../../components/kksk2/LiveBG'

export default class extends React.Component {
  render () {
    let { data } = this.state

    return <div className={ css.live }>
      <div className={ css['c-4-3-single'] }>
        <div className={ css.bgoff }>
          <LiveBG />
        </div>


        <div className={ css.video }>
          <span>1440 × 1080</span>
          <LayoutGameCover data={ data } />
        </div>

        <div className={ css.attrs }>
          <div className={ css.pv1 }>选手头像</div>
          <div className={ css.logo }><LayoutLOGO notext /></div>
          <div className={ css.game }><LayoutGameName data={ data } size='s' /></div>
          <div className={ css.timer }><LayoutTimer data={ data } s='' /></div>
        </div>
      </div>
    </div>
  }

  state = {
    days: []
  }

  componentWillMount () {
    let { id } = this.props.location.query
    let days = loadSchedueData()
    let arr = id.split('-')
    let data = days[`DAY${ arr[0] }`][~~arr[1] - 1]
    console.log(id, data)
    this.setState({ data, days })
  }
}