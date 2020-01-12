const seasons = [
  {
    id: 'S1',
    name: '第一期', from: '2019-04-01', to: '2019-06-30',
    prizes: [
      { abbr: 'bt-bf-2', amount: 7, name: '北通蝙蝠2游戏手柄', oss: '//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/data/2020-01-10/bt-bf-2.png'},
      { abbr: 'bt-axl-2', amount: 3, name: '北通阿修罗2游戏手柄', oss: '//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/data/2020-01-10/bt-axl-2.png'},
    ]
  },
  {
    id: 'S2',
    name: '第二期', from: '2019-07-01', to: '2019-09-30',
    prizes: [
      { abbr: 'bt-bf-2', amount: 7, name: '北通蝙蝠2游戏手柄', oss: '//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/data/2020-01-10/bt-bf-2.png'},
      { abbr: 'bt-sbd-2', amount: 5, name: '北通斯巴达2游戏手柄', oss: '//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/data/2020-01-10/bt-sbd-2.png'},
    ]
  },
  // {
  //   id: 'S3',
  //   name: '第三期', from: '2019-10-01', to: '2020-03-31'
  // }
]

class SHOTStore {
  loadSeasons () {
    this.seasons = seasons
  }

  getSeasonById (id) {
    return this.seasons.filter(x => x.id === id)[0]
  }
}

export default SHOTStore