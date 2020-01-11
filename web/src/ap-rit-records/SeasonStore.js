import moment from 'moment'
// 这里不使用 mobx, 因为原始数据不会变化的情况下，使用 computed, observable 意义不大

class SeasonStore {
  constructor ({ ritSeason }) {
    this.from = moment(ritSeason.from)
    this.to = moment(ritSeason.to).add(1, 'day')
  }

  async load () {
    let res = await fetch(`https://tna-web.oss-ap-southeast-1.aliyuncs.com/assets/data/2020-01-10/output-rit-runs.json?${Math.random()}`)
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
    let id = this.data.speedrunName
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

  get ckValue () {
    let t = this.totalPersonNumber
    let p = this.placeNumber
    return ~~((t - p) / t * 100)
  }

  get rankPlusPoint () {
    let re = 0
    let ckValue = this.ckValue
    if (ckValue >= 90) { re = 3 }
    if (ckValue >= 80 && ckValue <= 89) { re = 2 }
    if (ckValue >= 55 && ckValue <= 79) { re = 1 }
    return re
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

  get 推荐游戏积分 () {
    let re = 0
    for (let rec of this.records) {
      if (rec.isModGame) {
        re = 1
        break
      }
    }
    return re
  }

  get 总积分 () {
    return this.首次参与积分 + this.参与积分 + this.最佳排名积分 + this.最佳奖杯积分 + this.推荐游戏积分
  }
}

export default SeasonStore