// title: 16:9 单人

import React from 'react'

import css from './live.scss'

import { loadSchedueData } from '../../../data/tna3/data'

import LayoutGameName from '../../../components/tna3/LayoutGameName'
import LayoutTimer from '../../../components/tna3/LayoutTimer'
import LayoutTNA from '../../../components/tna3/LayoutTNA'

export default class extends React.Component {
  render () {
    let { data } = this.state

    return <div className={ css.live }>
      <div className={ css['c-16-9-single'] }>
        <div className={ css.video }>1600 × 900</div>
        <div className={ css.logo }><LayoutTNA /></div>
        <div className={ css.ad }>恰饭</div>
        <div className={ css.game }><LayoutGameName data={ data } /></div>
        <div className={ css.timer }><LayoutTimer data={ data } /></div>
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