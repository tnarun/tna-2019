// title: 节目单

import React from 'react'

import css from './live.scss'

import LiveBG from '../../../components/kksk2/LiveBG'
import LayoutLOGO from '../../../components/kksk2/LayoutLogoKKSK2'

import { estTimeCN } from '../../../utils/speedrunTime'
import moment from 'moment'
import { loadSchedueData } from '../../../data/kksk2/data'
import QRCode from 'qrcode'

export default class extends React.Component {
  render () {
    let { DAY1, DAY2, nextShow } = this.state
    let { id } = this.props.location.query

    let DAY = DAY1
    if (id && id.includes('2-')) {
      DAY = DAY2
    }



    return <div className={ css.live }>
      <div className={ css['c-day'] }>
        <LiveBG />

        <div className={ css.logo }>
          <LayoutLOGO notext />
        </div>
        <div className={ css.gtitle }>
          KKSK2 看看谁快·杭州站
        </div>

        <div className={ css.battrs }>
          <div className={ css.sbr }>
            <div className={ css.qr }>
            {
              this.state.qrurl ? <div className={ css.qrcode }>
                <div className={ css.tip }>
                  扫二维码访问节目单
                </div>
                <img src={ this.state.qrurl } alt='qr' />
              </div> : null
            }
            </div>
            <div className={ css.countdown }>
              {
                nextShow ? <CountDown data={ nextShow } /> : null
              }
            </div>
          </div>
          <div className={ css.sch }>
            <Schedule data={ DAY } />
          </div>
        </div>
      </div>
    </div>
  }

  state = {
    DAY1: [],
    DAY2: []
  }

  async componentDidMount () {
    let data = loadSchedueData()
    let { DAY1, DAY2 } = data

    this.setState({ DAY1, DAY2 })

    // qr
    let url = await QRCode.toDataURL('https://tnarun.com/kksk2/', {
      margin: 1,
      width: 133
    })
    this.setState({ qrurl: url })

    // next
    let { id } = this.props.location.query
    if (id) {
      let days = loadSchedueData()
      let arr = id.split('-')
      let nextShow = days[`DAY${ arr[0] }`][~~arr[1] - 1]
      console.log(id, nextShow)
      this.setState({ nextShow })
    }
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
          <div className={ css.est }>{ estTimeCN(x.est) }</div>
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

class CountDown extends React.Component {
  render () {
    let { dstr } = this.state
    let { data } = this.props

    return <div className={ css.CountDownShow }>
      <div>下一个节目</div>
      <div>{ data.cnName }</div>
      <div>{ data.category }</div>
      <div className={ css.cd }>{ dstr }</div>
    </div>
  }

  state = {
    today: '',
    dstr: ''
  }

  componentDidMount () {
    let  { data } = this.props
    let today = moment(data.time).format('YYYY-MM-DD')
    this.setState({ today })

    this.timer = setInterval(() => {
      let diff = moment(data.time) - moment()
      diff = diff > 0 ? diff : 0
      let duration = moment.duration(diff)

      let d = duration.days()
      let h = duration.hours()
      let m = duration.minutes()
      let s = duration.seconds() 
  
      let _d = d > 0 ? `${d} 天` : ''
      let _h = `${ h } 小时`
      let _m = `${ m } 分钟`
      let _s = `${ s } 秒`
  
      let dstr = `${_d} ${_h} ${_m} ${_s}`
  
      this.setState({ dstr })
    }, 50);
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }
}