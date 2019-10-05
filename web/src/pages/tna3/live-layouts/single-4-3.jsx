// title: 4:3 单人

import React from 'react'

import css from './live.scss'

import { loadSchedueData } from '../../../data/tna3/data'

import LayoutTNA from '../../../components/tna3/LayoutTNA'
import LayoutGameName from '../../../components/tna3/LayoutGameName'
import LayoutTimer from '../../../components/tna3/LayoutTimer'
import LayoutAD from '../../../components/tna3/LayoutAD'
import LayoutGameCover from '../../../components/tna3/LayoutGameCover'
import LayoutKMS from '../../../components/tna3/LayoutKMS'

export default class extends React.Component {
  render () {
    let { data } = this.state

    return <div className={ css.live }>
      <div className={ css['c-4-3-single'] }>
        <div className={ css.video }>
          {
            data.id === '1-1' ? <div>
              <LayoutKMS days={ this.state.days } />
            </div> : <>
              <span>1440 × 1080</span>
              <LayoutGameCover data={ data } />
            </>
          }
          
        </div>
        <div className={ css.game }><LayoutGameName data={ data } /></div>
        <div className={ css.logo }><LayoutTNA /></div>
        <div className={ css.ad }><LayoutAD /></div>
        <div className={ css.timer }><LayoutTimer data={ data } s='470 × 140' /></div>
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