import React from 'react'
import { loadSchedueData } from '../../data/kksk2/data'
import { estTimeCN } from '../../utils/speedrunTime'

import moment from 'moment'

import css from './Days.scss'

export default class Days extends React.Component {
  render () {
    let { DAY1, DAY2 } = this.state

    return <div className={ css.Days }>
      <div className={ css.d1 }>
        <h2>DAY 1</h2>
        <Schedule data={ DAY1 } />
      </div>
      <div className={ css.d2 }>
        <h2>DAY 2</h2>
        <Schedule data={ DAY2 } />
      </div>
    </div>
  }

  state = {
    DAY1: []
  }

  componentWillMount () {
    let data = loadSchedueData()
    let { DAY1, DAY2 } = data

    this.setState({ DAY1, DAY2 })
  }
}

class Schedule extends React.Component {
  render () {
    let { data } = this.props

    let _shows = data.map((x, idx) => {
      let { _from } = getFromTo({ show: x })

      return <div className={ css.show } key={ idx }>
        <div className={ css.startTime }>
          <div className={ css.cover } style={{ backgroundImage: getCoverSrc({ show: x }) }}></div>
          <div className={ css.from }>{ _from }</div>
          {/* <div className={ css.to }>{ _to }</div> */}
        </div>
        <div className={ css.NameCategory }>
          <div className={ css.name }>{ x.cnName }</div>
          <div className={ css.category }>{ x.category }</div>
        </div>
        <div className={ css.RunnerEST }>
          <div className={ css.runner }>{ x.player }</div>
          <div>{ estTimeCN(x.est) }</div>
        </div>
      </div>
    })

    return <div className={ css.Schedule }>
      { _shows }
    </div>
  }
}

const getCoverSrc = ({ show }) => {
  let host0 = '//tna-web.oss-ap-southeast-1.aliyuncs.com/speedrun-game-assets'
  let host1 = '//tna-upload.oss-cn-shanghai.aliyuncs.com/assets/mega-cover'
  let ossParams = '?x-oss-process=image/resize,l_320'

  if (show.abbr) {
    return `url(${ host0 }/${ show.abbr }/cover-256.png${ ossParams })`
  }

  if (show.megaAbbr) {
    return `url(${ host1 }/${ show.megaAbbr }.png${ ossParams })`
  }

  return null
}

const getFromTo = ({ show }) => {
  let _from = ''
  let _to = ''

  let { time, est } = show

  if (time) {
    _from = moment(time).format('HH:mm')
  }
  if (est && time) {
    _to = moment(moment(time) + moment.duration(est)).format('HH:mm')
  }

  return { _from, _to }
}