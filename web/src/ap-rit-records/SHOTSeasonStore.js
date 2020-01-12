import moment from 'moment'
// 这里不使用 mobx, 因为原始数据不会变化的情况下，使用 computed, observable 意义不大

class SeasonStore {
  constructor ({ shotSeason }) {
    this.from = moment(shotSeason.from)
    this.to = moment(shotSeason.to).add(1, 'day')
  }

  async load () {
    let res = await fetch(`//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/data/2020-01-10/output-shot-runs.json?${Math.random()}`)
    let data = await res.json()
    this.records = data
      .filter(x => {
        let c = moment(x.createdAt)
        return this.from < c && c < this.to
      })
      .map(x => new RunRecord({ data: x }))
  }

  get recordGroups () {
    let o = {}

    this.records.forEach(r => {
      let runnerId = r.runner.id
      if (o[runnerId]) {
        o[runnerId].push(r)
      } else {
        o[runnerId] = [r]
      }
    })
    
    return Object.keys(o).map(key => {
      let records = o[key]
      let runner = records[0].runner
      return new RecordGroup({ runner, records })
    })
  }
}

class RunRecord {
  constructor ({ data }) {
    this.data = data
  }

  get runner () {
    let id = this.data.niyaozaoName
    let name = id
    let biliName = this.data.biliName
    let liveroom = this.data.liveroom
    return { id, name, biliName, liveroom }
  }

  get month () {
    let m = moment(this.data.createdAt)
    return m.format('YYYY-MM')
  }

  get gameDesc () {
    return this.data.gameDesc
  }

  get isFirstTime () {
    return this.data.isFirstTime
  }

  get isModGame () {
    return this.data.isModGame
  }

  getSubmitTypeName (css) {
    let { submitType } = this.data
    let { label } = submitType
    return label.includes('更新') ? 
      <span className={ css.update }>更新</span> : 
      <span className={ css.new }>提交</span>
  }

  get totalPersonNumber () {
    return this.data.totalPersonNumber
  }

  get placeNumber () {
    return this.data.placeNumber
  }

  get placeNumberLabel () {
    let re = '十名之外'
    let placeNumber = this.placeNumber
    if (placeNumber === 1) { re = '第一名' }
    if (placeNumber >= 2 && placeNumber <= 4) { re = '二到四名' }
    if (placeNumber >= 5 && placeNumber <= 10) { re = '五到十名' }
    return re
  }

  // 排名奖励：在当月提交的成绩的排行上，第 1 位将获得3次额外抽奖机会；第 2~4 位将获得 2 次额外抽奖机会；第 5~10 位将获得 1 次额外抽奖机会。
  get rankPlusPoint () {
    let re = 0
    let placeNumber = this.placeNumber
    if (placeNumber === 1) { re = 3 }
    if (placeNumber >= 2 && placeNumber <= 4) { re = 2 }
    if (placeNumber >= 5 && placeNumber <= 10) { re = 1 }
    return re
  }

  get scoreLevelLabel () {
    return this.data.scoreLevel.label
  }

  get scoreLevelPoint () {
    return {
      '第一档': 1,
      '第二档': 2,
      '第三档': 3,
      '第四档': 4,
      '第五档': 5,
    }[this.scoreLevelLabel]
  }

  get cupPoint () {
    let re = 0
    let total = this.totalPersonNumber
    let ranking = this.placeNumber
    if (total > 30) {
      if (ranking === 1) { re = 2 }
      if (ranking === 2) { re = 1 }
      if (ranking === 3) { re = 1 }
    }
    return re
  }
}

class RecordGroup {
  constructor ({ runner, records }) {
    this.runner = runner
    this.records = records
  }

  get runnerName () {
    return this.runner.name
  }

  get runnerOtherName () {
    return this.runner.biliName
  }

  get runnerFullName () {
    let { runnerName, runnerOtherName } = this
    if (runnerName === runnerOtherName) {
      return runnerName
    }
    return `${runnerName} (${runnerOtherName})`
  }

  get runnerHomePage () {
    return this.runner.liveroom
  }

  get monthGroups () {
    let o = {}

    this.records.forEach(r => {
      let month = r.month
      if (o[month]) {
        o[month].push(r)
      } else {
        o[month] = [r]
      }
    })
    
    return Object.keys(o).map(key => {
      let records = o[key]
      let runner = this.runner
      let month = records[0].month
      return new MonthGroup({ month, runner, records })
    })
  }

  get sumPoint () {
    let re = 0
    this.monthGroups.forEach(g => {
      re += g.总积分
    })
    return re
  }
}

class MonthGroup {
  constructor ({ month, runner, records }) {
    this.month = month
    this.runner = runner
    this.records = records
  }

  get 参与积分 () {
    return 1
  }

  get 最佳排名积分 () {
    let re = 0
    for (let rec of this.records) {
      re = Math.max(re, rec.rankPlusPoint)
    }
    return re
  }

  get 最佳奖杯积分 () {
    let re = 0
    for (let rec of this.records) {
      re = Math.max(re, rec.cupPoint)
    }
    return re
  }

  get 首次参与积分 () {
    let re = 0
    for (let rec of this.records) {
      if (rec.isFirstTime) {
        re = 1
        break
      }
    }
    return re
  }

  get 最佳档位积分 () {
    let re = 0
    for (let rec of this.records) {
      re = Math.max(re, rec.scoreLevelPoint)
    }
    return re
  }

  get 总积分 () {
    return this.首次参与积分 + this.参与积分 + this.最佳排名积分 + this.最佳奖杯积分 + this.最佳档位积分
  }
}

export default SeasonStore