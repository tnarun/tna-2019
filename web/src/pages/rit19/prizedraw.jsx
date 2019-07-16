import React from 'react'
import data from '../../assets/submit-data/0630.json'

import SH3 from '../../components/StrawberryH3'
import { Container, Row, FlexBox, IBox } from '../../components/FlexBox'

import css from './prizedraw.scss'
import moment from 'moment'

const modPlusRunner = [
  'Hillman', 'Mazirika', 'Pegaiur', 'bilibili_xiaozhi', 'skygrass', 'DemoJameson',
  'LetMeSees', 'E1uM4y', 'CShadowShen', 'simeng.', 'Arsenbor'
]

const splitByRunner = (data) => {
  let records = data.map(x => x).reverse()
  let runners = {}

  for (let record of records) {
    let runnerId = record['Speedrunid']
    if (!runners[runnerId]) {
      runners[runnerId] = []
    }
    runners[runnerId].push(record)
  }

  return runners
}

export default class extends React.Component {
  render () {
    let { runnerRecords } = this.state
    let _list = Object.keys(runnerRecords).map((key) => {
      let records = runnerRecords[key]
      return <RunnerRecords runnerId={ key } records={ records } key={ key } />
    })

    let _points = Object.keys(runnerRecords).map((key) => {
      let records = runnerRecords[key]

      // mod 推荐
      let modPlusPoint = 0
      if (modPlusRunner.includes(key)) {
        modPlusPoint = 1
      }
      
      // 计算最佳排名和最佳奖杯
      let bestRankPoint = 0
      let bestTrophyPoint = 0
      for (let rec of records) {
        // 计算排名奖励
        let total = ~~rec['total'] 
        let ranking = ~~rec['ranking']
        let ckValue = ~~((total - ranking) / total * 100)
        let num1 = null
        if (ckValue >= 90) { num1 = 3 }
        if (ckValue >= 80 && ckValue <= 89) { num1 = 2 }
        if (ckValue >= 55 && ckValue <= 79) { num1 = 1 }

        // 计算奖杯奖励
        let num2 = null
        if (total > 30) {
          if (ranking == 1) { num2 = 2 }
          if (ranking == 2) { num2 = 1 }
          if (ranking == 3) { num2 = 1 }
        }

        bestRankPoint = Math.max(bestRankPoint, num1)
        bestTrophyPoint = Math.max(bestTrophyPoint, num2)
      }

      return <tr key={ key }>
        <td>{ key }</td>
        <td className={ css.finalpoint }>{ 1 + 1 + bestRankPoint + bestTrophyPoint + modPlusPoint }</td>
      </tr>
    })

    return <div>
      <Container>
        <Row>
          <FlexBox flex={ 6 }>
            <SH3>各 Runner 有效成绩与抽奖次数计算</SH3>
            { _list }
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
    let { runnerId, records } = this.props
    let count = records.length

    let { months } = this.state
    let _months = Object.keys(this.state.months).map((month, idx) => {
      let mrecords = months[month]
      return <RunnerMonthRecords month={ month} records={ mrecords } key={ idx } />
    })

    // mod 推荐
    let modPlusPoint = 0
    if (modPlusRunner.includes(runnerId)) {
      modPlusPoint = 1
    }

    // 计算最佳排名和最佳奖杯
    let bestRankPoint = 0
    let bestTrophyPoint = 0
    for (let rec of records) {
      // 计算排名奖励
      let total = ~~rec['total'] 
      let ranking = ~~rec['ranking']
      let ckValue = ~~((total - ranking) / total * 100)
      let num1 = null
      if (ckValue >= 90) { num1 = 3 }
      if (ckValue >= 80 && ckValue <= 89) { num1 = 2 }
      if (ckValue >= 55 && ckValue <= 79) { num1 = 1 }

      // 计算奖杯奖励
      let num2 = null
      if (total > 30) {
        if (ranking == 1) { num2 = 2 }
        if (ranking == 2) { num2 = 1 }
        if (ranking == 3) { num2 = 1 }
      }

      bestRankPoint = Math.max(bestRankPoint, num1)
      bestTrophyPoint = Math.max(bestTrophyPoint, num2)
    }

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
        {/* <tr>
          <td rowspan={ count }>{ runnerId }</td>
        </tr> */}
        { _months }
        <tr>
          <td colSpan={ 3 } className={ css.tdrunner }>{runnerId}</td>
          <td colSpan={ 5 } className={ css.tdpoints}>
            <span className={ css.p }><span className={ css.pn }>1</span> (参与)</span>
            <span> ＋ </span>
            <span className={ css.p }><span className={ css.pn }>1</span> (新人)</span>
            {
              bestRankPoint > 0 ? 
              <>
                <span> ＋ </span>
                <span className={ css.p }><span className={ css.pn }>{bestRankPoint}</span> (最佳排名)</span> 
              </>: null
            }
            {
              bestTrophyPoint > 0 ? 
              <>
                <span> ＋ </span>
                <span className={ css.p }><span className={ css.pn }>{bestTrophyPoint}</span> (最佳奖杯)</span> 
              </>: null
            }
            {
              modPlusPoint > 0 ? 
              <>
                <span> ＋ </span>
                <span className={ css.p }><span className={ css.pn }>{modPlusPoint}</span> (推荐游戏)</span> 
              </>: null
            }
            <span> ＝ </span>
            <span className={ css.finalpoint }>
              { 1 + 1 + bestRankPoint + bestTrophyPoint + modPlusPoint }
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  }

  state = {
    months: {}
  }

  componentDidMount () {
    let { records } = this.props

    let months = {}
    for (let r of records) {
      let m = moment(r['时间']).format('M')
      if (!months[m]) { months[m] = [] }
      months[m].push(r)
    }

    this.setState({ months })
  }
}

class RunnerMonthRecords extends React.Component {
  render () {
    let { month, records } = this.props

    let mcount = records.length
    let lastMonth = null
    let _records = records.map((rec, idx) => {
      let type = rec['Type'].includes('更新') ? '更新' : '提交'
      let typeClass = rec['Type'].includes('更新') ? 'update' : 'new'

      let isNewMonth = month != lastMonth
      lastMonth = month

      // 计算排名奖励
      let total = ~~rec['total'] 
      let ranking = ~~rec['ranking']
      let ckValue = ~~((total - ranking) / total * 100)
      let num1 = null
      if (ckValue >= 90) { num1 = 3 }
      if (ckValue >= 80 && ckValue <= 89) { num1 = 2 }
      if (ckValue >= 55 && ckValue <= 79) { num1 = 1 }

      // 计算奖杯奖励
      let num2 = null
      if (total > 30) {
        if (ranking == 1) { num2 = 2 }
        if (ranking == 2) { num2 = 1 }
        if (ranking == 3) { num2 = 1 }
      }

      return <tr>
        {
          isNewMonth ? <td className={ css.tdmonth } rowSpan={ mcount }>{ `${ month } 月` }</td> : null
        }
        <td className={ css[typeClass] }>
          { type }
        </td>
        <td className={ css.tdgame }>{ rec['Game'] }</td>
        <td className={ css.tdtotal }>{ total }</td>
        <td className={ css.tdranking }>{ ranking }</td>
        <td className={ css.tdckvalue }>{ ckValue }</td>
        <td className={ css.tdnum }>{ num1 }</td>
        <td className={ css.tdnum }>{ num2 }</td>
      </tr>
    })

    return _records
  }
}

class MonthRecords extends React.Component {
  render () {
    let { month, records } = this.props
    let monthRecords = records.filter(x => {
      return moment(x['时间']).format('M') == `${ month }`
    })

    let _records = monthRecords.map((x, idx) => {
      // 计算排名奖励
      let total = ~~x['total'] 
      let ranking = ~~x['ranking']
      let ckValue = ~~((total - ranking) / total * 100)
      let num = ''
      if (ckValue >= 90) { num = 3 }
      if (ckValue >= 80 && ckValue <= 89) { num = 2 }
      if (ckValue >= 55 && ckValue <= 79) { num = 1 }

      // 计算奖杯奖励
      let num1 = ''
      if (total > 30) {
        if (ranking == 1) { num1 = 2 }
        if (ranking == 2) { num1 = 1 }
        if (ranking == 3) { num1 = 1 }
      }

      let type = x['Type'].includes('更新') ? '更新' : '提交'
      let typeClass = x['Type'].includes('更新') ? 'update' : 'new'

      return (
        <tr className={ css.record } key={ idx }>
          <td>{ 
            moment(x['时间']).format('MM-DD')
          }</td>
          <td>{ x['Speedrunid'] }</td>
          <td className={ css[typeClass] }>
            { type }
          </td>
          <td>{ x['Game'] }</td>
          <td>{ total } / { ranking }</td>
          <td>{ ckValue }</td>
          <td>{ num }</td>
          <td>{ num1 }</td>
          <td>{ x['newPeople'] }</td>
        </tr>
      )
    })

    return <div>
      <table className={ css.records }>
        <thead>
          <tr>
            <th>提交时间</th>
            <th>speedrun id</th>
            <th>提交类型</th>
            <th>游戏</th>
            <th>总人数/排名</th>
            <th>参考值</th>
            <th>排名奖励</th>
            <th>奖杯奖励</th>
            <th>新人奖励</th>
          </tr>
        </thead>
        <tbody>
          { _records }
        </tbody>
      </table>
    </div>
  }
}