// title: 16:9 竞速：三人布局

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
      <div className={ css['c-16-9-race-3p'] }>
        <div className={ css.video1 }>
          <span>800 × 450 左:0 上:60</span>
        </div>
        <div className={ css.video2 }>
          <span>800 × 450 右:0 上:60</span>
        </div>
        <div className={ css.video3 }>
          <span>800 × 450 左:560 下:60</span>
        </div>

        <div className={ css.name1 }>痴人思梦</div>
        <div className={ css.name2 }>Ak1Ra、24</div>
        <div className={ css.name3 }>羽毛</div>

        <div className={ css.game }>只狼·影逝二度</div>
        <div className={ css.category }>一周目全记忆全佛珠收集</div>
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