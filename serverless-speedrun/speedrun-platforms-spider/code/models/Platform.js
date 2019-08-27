const mongoose = require('mongoose')

const Platform = new mongoose.Schema({
  // speedrun ID
  speedrunId: { type: String, unique: true, required: true },

  // 游戏平台名
  name: { type: String, required: true },

  // speedrun 游戏平台元数据
  // https://www.speedrun.com/api/v1/platforms?max=200 res.data[0]
  // https://www.speedrun.com/api/v1/platforms/8gejmne3 res.data
  speedrunData: { type: Object, required: true },

  // 数据更新时间
  updatedAt: { type: Date, required: true }
})

module.exports = mongoose.model('Platform', Platform)

/*
speedrunData: {
  "id": "8gejmne3",
  "released": 1993,
  "links": [
    {
      "rel": "self",
      "uri": "https://www.speedrun.com/api/v1/platforms/8gejmne3"
    },
    {
      "rel": "games",
      "uri": "https://www.speedrun.com/api/v1/games?platform=8gejmne3"
    },
    {
      "rel": "runs",
      "uri": "https://www.speedrun.com/api/v1/runs?platform=8gejmne3"
    }
  ],
  "name": "3DO Interactive Multiplayer"
}
*/