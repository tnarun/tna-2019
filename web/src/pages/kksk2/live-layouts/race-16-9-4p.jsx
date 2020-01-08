// title: 16:9 竞速：四人布局

import React from 'react'

import css from './live.scss'

// import { loadSchedueData } from '../../../data/tna3/data'

import LayoutKKSK2 from '../../../components/kksk2/LayoutLogoKKSK2'
// import LayoutGameName from '../../../components/tna3/LayoutGameName'
// import LayoutRacePlayers from '../../../components/tna3/LayoutRacePlayers'
// import LayoutAD from '../../../components/tna3/LayoutAD'
// import LayoutGameCover from '../../../components/tna3/LayoutGameCover'

export default class extends React.Component {
  render () {
    // let { data } = this.state

    return <div className={ css.live }>
      <div className={ css.livebg }>
        <video autoPlay={ true } muted={ true } loop={ true } playsInline={ true }>
          <source src='//alioss.gcores.com/page_resources/fusion2019_lite/videos/hangzhou.mp4' type='video/mp4' />
        </video>
      </div>
      <div className={ css['c-16-9-race-4p'] }>
        <div className={ css.video1 }>
          <span>800 × 450 左:0 上:60</span>
        </div>
        <div className={ css.video2 }>
          <span>800 × 450 右:0 上:60</span>
        </div>
        <div className={ css.video3 }>
          <span>800 × 450 右:0 下:60</span>
        </div>
        <div className={ css.video4 }>
          <span>800 × 450 左:0 下:60</span>
        </div>

        <div className={ css.name1 }></div>
        <div className={ css.name2 }></div>
        <div className={ css.name3 }></div>
        <div className={ css.name4 }></div>

        <div className={ css.game }></div>
        <div className={ css.timer }></div>

        <div className={ css.logo }>
          <LayoutKKSK2 />
        </div>
      </div>
    </div>
  }

  componentWillMount () {
    // let { id } = this.props.location.query
    // let days = loadSchedueData()
    // let arr = id.split('-')
    // let data = days[`DAY${ arr[0] }`][~~arr[1] - 1]
    // console.log(id, data)
    // this.setState({ data })
  }
}