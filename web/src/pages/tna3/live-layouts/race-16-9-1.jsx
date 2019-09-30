// title: 16:9 竞速：一般布局

import React from 'react'

import css from './live.scss'

import { loadSchedueData } from '../../../data/tna3/data'

import LayoutTNA from '../../../components/tna3/LayoutTNA'
import LayoutGameName from '../../../components/tna3/LayoutGameName'
import LayoutRacePlayers from '../../../components/tna3/LayoutRacePlayers'

export default class extends React.Component {
  render () {
    let { data } = this.state

    return <div className={ css.live }>
      <div className={ css['c-16-9-race-1'] }>
        <div className={ css.video1 }>960 × 540</div>
        <div className={ css.video2 }>960 × 540</div>
        <div className={ css.game }><LayoutGameName data={ data } type='race' /></div>
        <div className={ css.logo }><LayoutTNA /></div>
        <div className={ css.ad }>恰饭</div>
        <div className={ css.raceplayers }><LayoutRacePlayers data={ data } /></div>
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