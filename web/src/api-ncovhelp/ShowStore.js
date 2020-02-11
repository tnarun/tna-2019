const days = [
  {
    name: 'day1',
    shows: [
      { id: 'd1-1', name: '开幕式', runner: [ '老五', '女王盐' ], start: '12:00', end: '12:30' },
      { id: 'd1-2', name: 'doom(2016)', runner: 'elitenv', category: 'Legacy NG+', start: '12:30', end: '13:30' },
      { id: 'd1-3', name: '伊苏：起源', runner: '火月的捌年', category: '托尔EX模式', start: '13:45', end: '15:20' },
      { id: 'd1-4', name: '宇宙巡航机5', runner: '十三代目秀元', category: 'STG', start: '15:35', end: '17:00' },
      { id: 'd1-5', name: 'SDVX4', runner: '奈克斯', category: 'Showcase', start: '17:15', end: '17:45' },
      { id: 'd1-6', name: '东方永夜抄', runner: 'db0', category: 'Lunatic', start: '18:00', end: '18:35' },
      { id: 'd1-7', name: 'serial experiments kid', runner: 'code', category: 'Any%', start: '18:50', end: '19:35' },
      { id: 'd1-8', name: '以撒的结合：重生 胎衣+', runner: 'Liebesleid', category: '???% bid war', start: '19:50', end: '20:10' },
      { id: 'd1-9', name: '奥日与黑暗森林', runner: '南极猫的眼泪', category: 'NO OOB NO TA All skill', start: '20:25', end: '21:10' },
      { id: 'd1-10', name: '只狼', runner: [ '黑化由歧', 'AkiRa丶24' ], category: '修罗无邪道', start: '21:25', end: '22:05' },
    ]
  },
  {
    name: 'day2',
    shows: [
      { id: 'd2-1', name: '空洞骑士', runner: '创世丶魔术师', category: 'Random Any%', start: '12:00', end: '13:00' },
      { id: 'd2-2', name: '忍龙GB', runner: '阳翼', category: 'Any%', start: '13:15', end: '13:37' },
      { id: 'd2-3', name: '忍龙2', runner: '小夏', category: 'Low%', start: '13:55', end: '16:55' },
      { id: 'd2-4', name: '大复活黑版', runner: '汞京', category: 'STG', start: '17:10', end: '17:55' },
      { id: 'd2-5', name: '健身环', runner: '美国游戏玩家大斯', category: '一小时速打', start: '18:10', end: '19:10' },
      { id: 'd2-6', name: '马里奥创造家2', runner: ['o0水晶梦幻0o', '一笑'], category: '指定地图，初见竞速', start: '19:25', end: '20:25' },
      { id: 'd2-7', name: '怪物猎人世界', runner: '幻金皓月', category: '特定任务', start: '20:40', end: '21:10' },
      { id: 'd2-8', name: 'River City Girls', runner: '职业沙包sorp', category: 'Any% NG normal', start: '21:25', end: '22:25' },
      { id: 'd2-9', name: '蔚蓝', runner: 'DemoJameson', category: '第九章月莓 + 金草莓', start: '22:25', end: '23:25', secret: true },
    ]
  }
]

class ShowStore {
  load () {
    this.days = days.map(d => {
      let name = d.name
      let shows = d.shows.map(s => {
        return new Show(s)
      })
      return { name, shows }
    })
  }

  getShow (id) {
    if (!id) {
      return { }
    }

    for (let day of this.days) {
      for (let show of day.shows) {
        if (show.id === id) { return show }
      }
    }
  }

  getNextShow (id) {
    if (!id) {
      return { }
    }

    for (let day of this.days) {
      let idx = -1
      for (let show of day.shows) {
        idx += 1
        if (show.id === id) { return day.shows[idx + 1] }
      }
    }
  }

  getNextNextShow (id) {
    if (!id) {
      return { }
    }

    for (let day of this.days) {
      let idx = -1
      for (let show of day.shows) {
        idx += 1
        if (show.id === id) { return day.shows[idx + 2] }
      }
    }
  }
}

class Show {
  constructor (data) {
    this.data = data
  }

  get id () {
    return this.data.id
  }

  get name () {
    return this.data.name
  }

  get runnerString () {
    let runner = this.data.runner
    if (!runner) {
      return ''
    }
    if (typeof(runner) === 'string') {
      return runner
    }
    return runner.join("，")
  }

  get runner1 () {
    let runner = this.data.runner
    if (!runner) {
      return ''
    }
    if (typeof(runner) === 'string') {
      return runner
    }
    return runner[0]
  }

  get runner2 () {
    let runner = this.data.runner
    if (!runner) {
      return ''
    }
    if (typeof(runner) === 'string') {
      return runner
    }
    return runner[1]
  }

  get category () {
    return this.data.category
  }

  get startTime () {
    return this.data.start
  }

  get endTime () {
    return this.data.end
  }

  get isSecret () {
    return !!this.data.secret
  }

  get startTimeString () {
    let day = this.data.id.includes('d1-') ? '2020-02-08' : '2020-02-09'
    return `${ day } ${ this.data.start }`
  }
}

module.exports = ShowStore