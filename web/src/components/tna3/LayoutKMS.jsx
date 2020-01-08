import React from 'react'

import css from './layouts.scss'

// import { estTimeCN } from '../../utils/speedrunTime'
import moment from 'moment'

export default class LayoutKMS extends React.Component {
  render () {
    let { days } = this.props

    return <div className={ `${css.LayoutKMS}` }>
      <DAY shows={ days.DAY1 } title='DAY1 10-04' />
      <DAY shows={ days.DAY2 } title='DAY2 10-05'/>
      <DAY shows={ days.DAY3 } title='DAY3 10-06'/>
    </div>
  }
}

class DAY extends React.Component {
  render () {
    let { shows } = this.props

    let _shows = shows
      .filter(x => x.id !== '1-1' && x.type !== 'omt')
      .map((x, idx) => {
      let player = typeof(x.player) == 'string' ? x.player : x.player.join(' & ')
      let time = moment(x.time).format('HH:mm')
      let name = x.cnName
      let guide = x.guide

      if (x.type === 'secret') {
        [ player, guide, name ] = [ '?', '?', '?', '?' ]
      }

      return <div className={ css.show } key={ idx }>
        <div className={ css.h }>{ time }</div>
        <div className={ css.h }>{ name }</div>
        <div className={ css.h }>{ player }</div>
        <div className={ css.h }>{ guide }</div>
      </div>
    })

    return <div className={ css.DAY }>
      <div className={ css.t }>{ this.props.title }</div>
      { _shows }
    </div>
  }
}