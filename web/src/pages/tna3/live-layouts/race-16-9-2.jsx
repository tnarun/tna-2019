// title: 16:9 竞速：空洞骑士布局

import React from 'react'

import css from './live.scss'

import { loadSchedueData } from '../../../data/tna3/data'

import LayoutTNA from '../../../components/tna3/LayoutTNA'
import LayoutGameName from '../../../components/tna3/LayoutGameName'
import LayoutRacePlayers from '../../../components/tna3/LayoutRacePlayers'

// import TNALogo from '../../../components/grids/TNALogo'

export default class extends React.Component {
  render () {
    let { data } = this.state

    return <div className={ css.live }>
      <div className={ css['c-16-9-race-2'] }>
        <div className={ css.video1 }>video1 960 × 540</div>
        <div className={ css.video2 }>video2 960 × 540</div>
        <div className={ css.raceplayers }><LayoutRacePlayers data={ data } /></div>
        <div className={ css.bingo }>Bingo 450 × 450</div>
        <div className={ css.st1 }>status1 735 × 230</div>
        <div className={ css.st2 }>status2 735 × 230</div>
        <div className={ css.game }><LayoutGameName data={ data } /></div>
        <div className={ css.logo }><LayoutTNA /></div>
        <div className={ css.ad }>恰饭</div>
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