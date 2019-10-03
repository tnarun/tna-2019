// title: 16:9 单人

import React from 'react'

import css from './live.scss'

import { loadSchedueData } from '../../../data/tna3/data'

import LayoutGameName from '../../../components/tna3/LayoutGameName'
import LayoutTimer from '../../../components/tna3/LayoutTimer'
import LayoutTNA from '../../../components/tna3/LayoutTNA'
import LayoutAD from '../../../components/tna3/LayoutAD'
import LayoutAWD from '../../../components/tna3/LayoutAWD'
import LayoutGameCover from '../../../components/tna3/LayoutGameCover'

export default class extends React.Component {
  render () {
    let { data } = this.state

    return <div className={ css.live }>
      <div className={ css['c-16-9-single'] }>
      <div className={ css.video }>
          <span>1600 × 900</span>
          <LayoutGameCover data={ data } />
        </div>
        <div className={ css.logo }><LayoutTNA /></div>
        <div className={ css.ad }>
          <div className={ css.adi }>
            <div className={ css.adii }>
              <LayoutAD />
            </div>
            <div className={ css.adii }>
              <LayoutAWD />
            </div>
          </div>
        </div>
        <div className={ css.game }><LayoutGameName data={ data } /></div>
        <div className={ css.timer }><LayoutTimer data={ data } s='796 × 402 x:320' /></div>
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