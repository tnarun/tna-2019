import React from 'react'

import css from './botw.scss'
import moment from 'moment'

import { speedrunTime } from '../../../utils/speedrunTime'

import PageHeader from '../../../components/layouts/PageHeaderV2'
import WidthContainer from '../../../components/layouts/WidthContainer'

import classNames from 'classnames/bind'

export default class sekiro extends React.Component {
  render () {
    let pub = <div className={ css.timepoint }>
      <div className={ css.date }>
        <span>2017-03-03</span>
        <span className={ css.first }></span>
      </div>
      <div className={ css.event }>
        <div className={ css.bubble }>
          <div>塞尔达传说：荒野之息</div>
          <div>游戏发售</div>
        </div>
      </div>
    </div>

    let simpleList = this.state.simpleList
    let _list = simpleList.map((x, idx) => {
      let players = x.players.map(p => p.name).join(' ')
      let time = speedrunTime(x.realtime)
      let dated = moment(x.submitted).format('YYYY-MM-DD')
      let dateh = moment(x.submitted).format('HH:mm')

      let bubbleClassName = classNames.bind(css)({
        bubble: true,
        majorBreak: !!x.sub
      })

      return <div className={ css.timepoint } key={ idx }>
        <div className={ css.date }>
          { x.sub ? <span className={ css.sub }>Sub { x.sub }</span> : null }
          <span className={ css.d }>{ dated }</span>
          <span className={ css.hm }>{ dateh }</span>
          { idx === simpleList.length - 1 ? <span className={ css.last }></span> : null }
        </div>

        <div className={ css.event }>
          <div className={ bubbleClassName }>
            <div className={ css.bi }>
              <div className={ css.player }>{ players }</div>
              <div className={ css.time }>
                { time }
              </div>
            </div>
          </div>
        </div>
      </div>
    })

    return <div className={ css.sekiro }>
      <div className={ css.hd }><PageHeader>
        <h1>The Legend of Zelda: Breath of the Wild</h1>
        <h2>Any%</h2>
      </PageHeader></div>
      
      <WidthContainer>
        <div className={ css.grids }>
          <div className={ css.timeline }>
            <h3>The Legend of Zelda: Breath of the Wild</h3>
            <h4>Any%</h4>
            <h2 className={ css.line }>Timeline 时间线</h2>
            <div className={ css.Timeline }>
              { pub }
              { _list }
            </div>
          </div>
          <div className={ css.right }>
            <div className={ css.major }>
              <h3>The Legend of Zelda: Breath of the Wild</h3>
              <h4>Any%</h4>
              <h2>Major Breakthrough 重大突破</h2>
              <Majors majors={ this.state.majors } />
            </div>
            <div className={ css.history }>
              <h2>Historical Statistics 历史统计</h2>
              <Stat data={ this.state.simpleList } />
            </div>
          </div>
        </div>
      </WidthContainer>
    </div>
  }

  state = {
    simpleList: [],
    majors: []
  }

  async componentDidMount () {
    let res = await fetch('//tna-upload.oss-cn-shanghai.aliyuncs.com/data/tnarun-speedrun.botw.runs.json')
    let data = await res.json()

    // 根据提交时间排序
    data = data.sort((a, b) => {
      return moment(a.speedrunData.submitted) - moment(b.speedrunData.submitted)
    })
    // 根据时间推移筛选出破纪录的序列
    let currentRun = data[0]
    let list = [ currentRun ]
    for (let run of data) {
      let t0 = currentRun.speedrunData.times.realtime_t
      let t1 = run.speedrunData.times.realtime_t
      if (t1 < t0) {
        currentRun = run
        list.push(run)
      }
    }
    // 简化
    let simpleList = list.map(x => {
      let players = x.speedrunData.players.data.map(p => {
        let name = p.names.international
        let country = p.location.country.names.international
        return { name, country }
      })

      let realtime_t = x.speedrunData.times.realtime_t
      let realtime = x.speedrunData.times.realtime
      let submitted = x.speedrunData.submitted

      return { players, realtime_t, realtime, submitted }
    })

    // 标记 sub
    simpleList[4].sub = '1h'
    simpleList[12].sub = '50m'
    simpleList[18].sub = '45m'
    simpleList[26].sub = '40m'
    simpleList[33].sub = '35m'
    simpleList[45].sub = '30m'

    // 筛选 majors
    let majors = simpleList.filter(x => {
      return !!x.sub
    })

    majors.unshift(simpleList[0])

    console.log({ data, list, simpleList, majors })

    this.setState({ simpleList, majors })
  }
}

class Majors extends React.Component {
  render () {
    let { majors } = this.props

    let _majors = majors.map((x, idx) => {
      let players = x.players.map(p => p.name).join(' ')
      let time = speedrunTime(x.realtime)
      let dated = moment(x.submitted).format('YYYY-MM-DD')
      // let dateh = moment(x.submitted).format('HH:mm')

      return <div className={ css.run } key={ idx }>
        <div className={ css.player }>{ players }</div>
        <div className={ css.dated }>{ dated }</div>
        <div className={ css.time }>{ time }</div>
        <div className={ css.sub }>
          { idx === 0 ? '首次提交成绩' : `击破 ${ x.sub.replace('h', ' 小时').replace('m', ' 分钟') }`}
        </div>
      </div>
    })

    return <div className={ css.Majors }>
      { _majors }
    </div>
  }
}

class Stat extends React.Component {
  render () {
    let { data } = this.props
    if (data.length === 0) {
      return <div></div>
    }

    let firstT = data[0].realtime_t

    let firstD = moment(data[0].submitted)
    let lastD = moment(data[data.length - 1].submitted)
    let period = lastD - firstD

    let _marks = data.map((x, idx) => {
      let h = x.realtime_t / firstT * 300
      let sp = moment(x.submitted) - firstD
      let lper = (sp / period) * 100

      let time = speedrunTime(x.realtime)

      let mClassName = classNames.bind(css)({
        mark: true,
        break: !!x.sub || idx === 0
      })

      return <div className={ mClassName } key={ idx } style={{ left: `${lper}%`}}>
        <div className={ css.circle } style={{ bottom: `${h}px`}}>
          {
            x.sub ? <div className={ css.time }>
              <span className={ css.sub }>Sub { x.sub }</span>
            </div> : null
          }
        </div>
        <div className={ css.line } style={{ height: `${h}px`}}></div>
      </div>
    })

    let _days = [
      '2017-04-01T00:00:00Z',
      '2017-08-01T00:00:00Z',
      '2017-12-01T00:00:00Z',
      '2018-04-01T00:00:00Z',
      '2018-08-01T00:00:00Z',
      '2018-12-01T00:00:00Z',
      '2019-04-01T00:00:00Z',
      '2019-08-01T00:00:00Z',
    ].map((x, idx) => {
      let sp = moment(x) - firstD
      let lper = (sp / period) * 100

      return <div className={ css.day } key={ idx } style={{ left: `${lper}%`}}>
        <span>{ moment(x).format('YY-MM-DD') }</span>
      </div>
    })

    return <>
      <div className={ css.Stat }>
        { _marks }
      </div>
      <div className={ css.bline }></div>
      <div className={ css.days }>
        { _days }
      </div>
    </>
  }
}