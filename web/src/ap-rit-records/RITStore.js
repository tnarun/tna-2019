const seasons = [
  {
    id: 'S1',
    name: '第一期', from: '2019-04-01', to: '2019-06-30',
    modGames: [
      { abbr: 'ori', cnName: '奥日与黑暗森林', enName: 'Ori and the Blind Forest', category: 'Any%' },
      { abbr: 'Celeste', cnName: '蔚蓝山/塞莱斯特', enName: 'Celeste', category: 'Any%' },
      { abbr: 'sekiro', cnName: '只狼：影逝二度', enName: 'Sekiro: Shadows Die Twice', category: '任意规则' },
      { abbr: 're2', cnName: '生化危机 2 2019 重制版', enName: 'Resident Evil 2 (2019)', category: '任意规则' },
    ],
    prizes: [
      { abbr: 'bt-bf-2', amount: 7, name: '北通蝙蝠2游戏手柄', oss: '//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/data/2020-01-10/bt-bf-2.png'},
      { abbr: 'bt-axl-2', amount: 3, name: '北通阿修罗2游戏手柄', oss: '//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/data/2020-01-10/bt-axl-2.png'},
    ]
  },
  {
    id: 'S2',
    name: '第二期', from: '2019-07-01', to: '2019-09-30',
    modGames: [
      { abbr: 'bsrotn', cnName: '血污·夜之仪式', enName: 'Bloodstained: Ritual of the Night', category: '任意规则' },
      { abbr: 'katana_zero', cnName: '武士刀·零', enName: 'Katana ZERO', category: '任意规则' },
      { abbr: 'tln', cnName: '东方月神夜', enName: 'Touhou Luna Nights', category: '任意规则' },
      { abbr: 'human_fall_flat', cnName: '人类一败涂地', enName: 'Human: Fall Flat', category: '任意规则' },
    ],
    prizes: [
      { abbr: 'bt-bf-2', amount: 7, name: '北通蝙蝠2游戏手柄', oss: '//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/data/2020-01-10/bt-bf-2.png'},
      { abbr: 'bt-sbd-2', amount: 5, name: '北通斯巴达2游戏手柄', oss: '//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/data/2020-01-10/bt-sbd-2.png'},
    ]
  },
  {
    id: 'S3',
    name: '第三期', from: '2019-10-01', to: '2020-03-31',
    modGames: [
      { abbr: 'goose', cnName: '鹅作剧', enName: 'Untitled Goose Game', category: '任意规则' },
      { abbr: 'coh', cnName: '节奏海拉鲁', enName: 'Cadence of Hyrule', category: '任意规则' },
      { abbr: 'hollowknight', cnName: '空洞骑士', enName: 'Hollow Knight', category: '任意规则' },
      { abbr: 'tln', cnName: '东方月神夜', enName: 'Touhou Luna Nights', category: '任意规则' },
      { abbr: 'isaacrebirth', cnName: '以撒的结合·重生', enName: 'The Binding of Isaac: Rebirth', category: '任意规则' },
    ],

    prizes: [
      { abbr: 'qch', amount: 1, name: '七彩虹 igame GTX1660TI', oss: null },
      { abbr: 'bt-sbd-2', amount: 2, name: '明基27英寸爱眼显示器EW277HDR', oss: null },
      { abbr: 'bt-sbd-2', amount: 1, name: '北通宙斯游戏手柄国潮限量版', oss: null },
      { abbr: 'bt-sbd-2', amount: 3, name: '北通宙斯游戏手柄精英版', oss: null },
      { abbr: 'bt-sbd-2', amount: 5, name: '北通斯巴达2游戏手柄', oss: null },
    ]
  }
]

class RITStore {
  loadSeasons () {
    this.seasons = seasons
  }

  getSeasonById (id) {
    return this.seasons.filter(x => x.id === id)[0]
  }
}

export default RITStore