// title: 4:3 单人，舞台

import React from 'react'

import css from './live.scss'

import { loadSchedueData } from '../../../data/kksk2/data'

import LayoutLOGO from '../../../components/kksk2/LayoutLogoKKSK2'
import LayoutGameName from '../../../components/kksk2/LayoutGameName'
import LayoutTimer from '../../../components/kksk2/LayoutTimer'
import LayoutGameCover from '../../../components/kksk2/LayoutGameCover'
// import LayoutKMS from '../../../components/kksk2/LayoutKMS'

export default class extends React.Component {
  render () {
    let { data } = this.state

    return <div className={ css.live }>
      {/* <div className={ css.livebg }>
        <video autoPlay={ true } muted={ true } loop={ true } playsInline={ true }>
          <source src='//alioss.gcores.com/page_resources/fusion2019_lite/videos/hangzhou.mp4' type='video/mp4' />
        </video>
      </div> */}

      <div className={ css['c-4-3-single-stage'] }>
        <div className={ css.video }>
          <span>1200 × 900</span>
          <LayoutGameCover data={ data } />
        </div>
        <div className={ css.rattrs }>
          <div className={ css.pv1 }>选手头像</div>
          <div className={ css.logo }><LayoutLOGO /></div>
        </div>
        <div className={ css.battrs }>
          <div className={ css.timer }><LayoutTimer data={ data } s='' /></div>
          <div className={ css.game }><LayoutGameName data={ data } /></div>
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