import React from 'react'
import data from '../../assets/submit-data/shot19-4-6.json'

import SH3 from '../../components/StrawberryH3'
import { Container, Row, FlexBox } from '../../components/FlexBox'

import css from './publicity.scss'
import moment from 'moment'

class Runner {
  constructor (d) {
    this.speedrunId = d.id
    this.liveroom = d.liveroom
    this.biliid = d.biliid
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

    this._month = moment(this['time'], 'YYYY/MM/DD HH:mm:ss').format('M')

    this.computeRankPlus()
  }

  computeRankPlus () {
    // 计算档位奖励
    let grade = this.grade

    let gp = 0
    if (grade === '第一档') { gp = 1 }
    if (grade === '第二档') { gp = 2 }
    if (grade === '第三档') { gp = 3 }
    if (grade === '第四档') { gp = 4 }
    if (grade === '第五档') { gp = 5 }

    this.gradePlus = gp

    // 计算排名奖励
    let rp = 0
    let rank = ~~this.rank
    if (rank === 1) { rp = 3 }
    if (rank >= 2 && rank <= 4) { rp = 2 }
    if (rank >= 5 && rank <= 10) { rp = 1 }

    this.rankPlus = rp
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

  getBestGradePlus () {
    let gp = 0
    for (let rec of this.records) {
      gp = Math.max(gp, rec.gradePlus)
    }
    return gp
  }

  getTotalPoint () {
    return (this.records.length > 0 ? 1 : 0)
    + this.getBestRankPlus() 
    + this.getBestGradePlus()
  }
}

// 根据 runner 划分成绩列表
const splitByRunner = (data) => {
  let records = data.map(x => new Record(x)).reverse()
  let runners = {}

  // 根据 runner 划分
  for (let record of records) {
    let runnerId = record['id']
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
            <th>排名</th>
            <th>档位</th>
          </tr>
        </thead>
      <tbody>
        { _months }
        <tr><td colSpan={ 3 }>
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
      let type = rec['type'].includes('更新') ? '更新' : '提交'
      let typeClass = rec['type'].includes('更新') ? 'update' : 'new'

      let isNewMonth = month !== lastMonth
      lastMonth = month

      return <tr key={ idx }>
        {
          isNewMonth ? <td className={ css.tdmonth } rowSpan={ mcount + 1 }>{ `${ month.m } 月` }</td> : null
        }
        <td className={ css[typeClass] }>
          { type }
        </td>
        <td className={ css.tdgame }>{ rec.game }</td>
        <td className={ css.tdranking }>{ rec.rank }</td>
        <td className={ css.tdckvalue }>{ rec.grade }</td>
      </tr>
    })

    let newRunnerPlus = month.getNewRunnerPlus()
    let bestGradePlus = month.getBestGradePlus()
    let bestRankPlus = month.getBestRankPlus()

    return mcount > 0 ? <>
      { _records }
      <tr><td className={ css.tdpoints } colSpan={ 4 }>
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
        bestGradePlus > 0 ? 
        <>
          <span> ＋ </span>
          <span className={ css.p }><span className={ css.pn }>{ bestGradePlus }</span> (最佳档位)</span> 
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