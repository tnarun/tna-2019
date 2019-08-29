const mongoose = require('mongoose')

const Level = new mongoose.Schema({
  // speedrun ID
  speedrunId: { type: String, unique: true, required: true },

  // speedrun 游戏关卡数据
  // https://www.speedrun.com/api/v1/games/76r55vd8/levels res.data[0]
  speedrunData: { type: Object, required: true },

  // 数据更新时间
  updatedAt: { type: Date, required: true },

  // 分类名
  name: { type: String, required: true },
  gameId: { type: String, required: true },
})

module.exports = mongoose.model('Level', Level)

/*
speedrunData: {
  "id": "ywe1e6qd",
  "name": "Cap Kingdom",
  "weblink": "https://www.speedrun.com/smo/Cap_Kingdom",
  "rules": "Video proof is required for Individual Levels.\r\n\r\n**Must run on a clean file with no moons obtained upon entry and all skippable cutscenes and cinematics still active to be accepted.**\r\n\r\nRTA timing is used meaning runs must be completed within one sitting and the timer cannot be paused at any point in the run.\r\n\r\nTiming starts when you press \"Start\" on a new file.\r\n\r\nTiming ends when the screen fades to black after the game logo shows up at the end of the kingdom.",
  "links": [
    {
      "rel": "self",
      "uri": "https://www.speedrun.com/api/v1/levels/ywe1e6qd"
    },
    {
      "rel": "game",
      "uri": "https://www.speedrun.com/api/v1/games/76r55vd8"
    },
    {
      "rel": "categories",
      "uri": "https://www.speedrun.com/api/v1/levels/ywe1e6qd/categories"
    },
    {
      "rel": "variables",
      "uri": "https://www.speedrun.com/api/v1/levels/ywe1e6qd/variables"
    },
    {
      "rel": "records",
      "uri": "https://www.speedrun.com/api/v1/levels/ywe1e6qd/records"
    },
    {
      "rel": "runs",
      "uri": "https://www.speedrun.com/api/v1/runs?level=ywe1e6qd"
    },
    {
      "rel": "leaderboard",
      "uri": "https://www.speedrun.com/api/v1/leaderboards/76r55vd8/level/ywe1e6qd/xd1e1r82"
    }
  ]
}
*/