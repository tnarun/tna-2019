import React from 'react'
import data from '../../assets/submit-data/0630.json'

import SH3 from '../../components/StrawberryH3'
import { Container, Row, FlexBox } from '../../components/FlexBox'

import css from './publicity.scss'
import moment from 'moment'

class Runner {
  constructor (d) {
    this.speedrunId = d.Speedrunid
    this.liveroom = d.Liveroom
    this.biliid = d.Bilibiliid
    this.months = {
      "4": new Month("4"),
      "5": new Month("5"),
      "6": new Month("6")
    }
  }

  getRunnerPoint () {
    let p4 = this.months['4'].getTotalPoint()
    let p5 = this.months['5'].getTotalPoint()
    let p6 = this.months['6'].getTotalPoint()

    return p4 + p5 + p6
  }
}

class Record {
  constructor (d) {
    Object.assign(this, d)

    this._month = moment(this['时间'], 'YYYY/MM/DD HH:mm:ss').format('M')

    this.computeRankPlus()
  }

  computeRankPlus () {
    // 计算排名奖励
    let total = ~~this.total
    let ranking = ~~this.ranking
    let ckValue = ~~((total - ranking) / total * 100)

    let re = null
    if (ckValue >= 90) { re = 3 }
    if (ckValue >= 80 && ckValue <= 89) { re = 2 }
    if (ckValue >= 55 && ckValue <= 79) { re = 1 }

    this.rankPlus = re
    this.ckValue = ckValue

    // 计算奖杯奖励
    let num2 = null
    if (total > 30) {
      if (ranking === 1) { num2 = 2 }
      if (ranking === 2) { num2 = 1 }
      if (ranking === 3) { num2 = 1 }
    }

    this.cupPlus = num2
  }
}

class Month {
  constructor (m) {
    this.m = m
    this.records = []
  }

  addRecord (record) {
    this.records.push(record)
  }

  getBestRankPlus () {
    let bestRankPlus = 0
    for (let rec of this.records) {
      bestRankPlus = Math.max(bestRankPlus, rec.rankPlus)
    }
    return bestRankPlus
  }

  getBestCupPlus () {
    let bestCupPlus = 0
    for (let rec of this.records) {
      bestCupPlus = Math.max(bestCupPlus, rec.cupPlus)
    }
    return bestCupPlus
  }

  getNewRunnerPlus () {
    let newRunnerPlus = 0
    for (let rec of this.records) {
      if (rec.isNewRunner) { newRunnerPlus = 1 }
    }
    return newRunnerPlus
  }

  getModPlus () {
    let modPlus = 0
    for (let rec of this.records) {
      if (rec.modPlus) { modPlus = 1 }
    }
    return modPlus
  }

  getTotalPoint () {
    return (this.records.length > 0 ? 1 : 0)
    + this.getBestRankPlus() 
    + this.getBestCupPlus() 
    + this.getNewRunnerPlus() 
    + this.getModPlus()
  }
}

// 根据 runner 划分成绩列表
const splitByRunner = (data) => {
  let records = data.map(x => new Record(x)).reverse()
  let runners = {}

  // 根据 runner 划分
  for (let record of records) {
    let runnerId = record['Speedrunid']
    if (!runners[runnerId]) {
      runners[runnerId] = new Runner(record)
      record.isNewRunner = true
    }

    let m = record._month
    runners[runnerId].months[m].addRecord(record)
  }

  console.log(runners)

  return runners
}

export default class extends React.Component {
  render () {
    let { runnerRecords } = this.state

    let _runners = Object.keys(runnerRecords).map((key) => {
      let runner = runnerRecords[key]
      return <RunnerRecords runner={ runner } key={ key } />
    })

    let _points = Object.keys(runnerRecords).map((key) => {
      let runner = runnerRecords[key]
      return <tr key={ key }>
        <td>
        { runner.speedrunId }
        { runner.biliid ? ` (${runner.biliid})` : null }
        </td>
        <td className={ css.finalpoint }>{ runner.getRunnerPoint() }</td>
      </tr>
    })

    return <div>
      <Container>
        <Row>
          <FlexBox flex={ 6 }>
            <SH3>各 Runner 有效成绩与抽奖次数计算</SH3>
            { _runners }
          </FlexBox>
        </Row>
        <Row>
          <FlexBox flex={ 3 }>
            <SH3>各 Runner 本季抽奖次数</SH3>
            <table className={ css.points }>
              <thead>
                <tr>
                  <th>Runner</th>
                  <th>抽奖次数</th>
                </tr>
              </thead>
              <tbody>{ _points }</tbody>
            </table>
          </FlexBox>
          <FlexBox flex={ 3 }>
            <SH3>本季奖池</SH3>
            <table className={ css.points }>
              <thead>
                <tr>
                  <th>奖品</th>
                  <th>数量</th>
                </tr>
              </thead>
            </table>
          </FlexBox>
        </Row>
        <Row>
          <FlexBox flex={ 6 }>
            <SH3>抽奖结果</SH3>
            <table className={ css.points }>
              <thead>
                <tr>
                  <th>奖品</th>
                  <th>获奖者</th>
                </tr>
              </thead>
            </table>
          </FlexBox>
        </Row>
      </Container>
    </div>
  }

  state = {
    runnerRecords: []
  }

  async componentDidMount () {
    let runnerRecords = splitByRunner(data)
    this.setState({ runnerRecords })
  }
}

class RunnerRecords extends React.Component {
  render () {
    let { runner } = this.props

    let _months = Object.keys(runner.months).map((key) => {
      let month = runner.months[key]
      return <RunnerMonthRecords month={ month} key={ key } />
    })

    return <table className={ css.records }>
        <thead>
          <tr>
            <th>月份</th>
            <th>类型</th>
            <th>游戏</th>
            <th>总人数</th>
            <th>排名</th>
            <th>参考值</th>
            <th>排名奖励</th>
            <th>奖杯奖励</th>
          </tr>
        </thead>
      <tbody>
        { _months }
        <tr><td colSpan={ 6 }>
          <div style={ { fontSize: '1rem', fontWeight: 'bold' } }>
            { runner.speedrunId }
            { runner.biliid ? ` (${runner.biliid})` : null }
          </div>
          {
            runner.liveroom ? <div style={{ marginTop: '0.3rem' }}><a href={ runner.liveroom } target='_blank' rel="noopener noreferrer">{ runner.liveroom }</a></div> : null
          }
        </td>
        <td colSpan={ 2 } className={ css.runnerPoint }>
          抽奖机会：<span>{ runner.getRunnerPoint() }</span>
        </td>
        </tr>
      </tbody>
    </table>
  }
}

class RunnerMonthRecords extends React.Component {
  render () {
    let { month } = this.props
    let { records } = month

    let mcount = records.length
    let lastMonth = null

    let _records = records.map((rec, idx) => {
      let type = rec['Type'].includes('更新') ? '更新' : '提交'
      let typeClass = rec['Type'].includes('更新') ? 'update' : 'new'

      let isNewMonth = month !== lastMonth
      lastMonth = month

      return <tr key={ idx }>
        {
          isNewMonth ? <td className={ css.tdmonth } rowSpan={ mcount + 1 }>{ `${ month.m } 月` }</td> : null
        }
        <td className={ css[typeClass] }>
          { type }
        </td>
        <td className={ css.tdgame }>{ rec['Game'] }</td>
        <td className={ css.tdtotal }>{ rec.total }</td>
        <td className={ css.tdranking }>{ rec.ranking }</td>
        <td className={ css.tdckvalue }>{ rec.ckValue }</td>
        <td className={ css.tdnum }>{ rec.rankPlus }</td>
        <td className={ css.tdnum }>{ rec.cupPlus }</td>
      </tr>
    })

    let bestRankPlus = month.getBestRankPlus()
    let bestCupPlus = month.getBestCupPlus()
    let newRunnerPlus = month.getNewRunnerPlus()
    let modPlus = month.getModPlus()

    return mcount > 0 ? <>
      { _records }
      <tr><td className={ css.tdpoints } colSpan={ 7 }>
      <span className={ css.p }><span className={ css.pn }>1</span> (参与)</span>
      {
        newRunnerPlus > 0 ? 
        <>
          <span> ＋ </span>
          <span className={ css.p }><span className={ css.pn }>{ newRunnerPlus }</span> (新人)</span> 
        </>: null
      }
      {
        bestRankPlus > 0 ? 
        <>
          <span> ＋ </span>
          <span className={ css.p }><span className={ css.pn }>{ bestRankPlus }</span> (最佳排名)</span> 
        </>: null
      }
      {
        bestCupPlus > 0 ? 
        <>
          <span> ＋ </span>
          <span className={ css.p }><span className={ css.pn }>{ bestCupPlus }</span> (最佳奖杯)</span> 
        </>: null
      }
      {
        modPlus > 0 ? 
        <>
          <span> ＋ </span>
          <span className={ css.p }><span className={ css.pn }>{ modPlus }</span> (推荐游戏)</span> 
        </>: null
      }
      <span> ＝ </span>
      <span className={ css.finalpoint }>
        { month.getTotalPoint() }
      </span>
      </td></tr>
    </> : null
  }
}