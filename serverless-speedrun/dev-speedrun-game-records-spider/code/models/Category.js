const mongoose = require('mongoose')

const Category = new mongoose.Schema({
  // speedrun ID
  speedrunId: { type: String, unique: true, required: true },

  // speedrun 游戏分类数据
  // https://www.speedrun.com/api/v1/games/76r55vd8/categories res.data[0]
  speedrunData: { type: Object, required: true },

  // 数据更新时间
  updatedAt: { type: Date, required: true },

  // 分类名
  name: { type: String, required: true },
  gameId: { type: String, required: true },
})

module.exports = mongoose.model('Category', Category)

/*
speedrunData: {
  "id": "w20w1lzd",
  "name": "Any%",
  "weblink": "https://www.speedrun.com/smo#Any",
  "type": "per-game",
  "rules": "Beat the game as fast as possible.\r\n\r\nTiming begins when selecting \"Start\" on a new file and ends when you shoot out of the electric wire in the escape sequence.\r\n\r\nRTA timing is used meaning runs must be completed within one sitting and the timer cannot be paused at any point in the run.\r\n\r\nSubmitting without audio is fine for the first time, second time and onward will be rejected.\r\n\r\nAll runs require video proof.\r\n\r\nUse of Amiibo, Luigi's Balloon World, and Assist Mode is banned.",
  "players": {
    "type": "up-to",
    "value": 2
  },
  "miscellaneous": false,
  "links": [
    {
      "rel": "self",
      "uri": "https://www.speedrun.com/api/v1/categories/w20w1lzd"
    },
    {
      "rel": "game",
      "uri": "https://www.speedrun.com/api/v1/games/76r55vd8"
    },
    {
      "rel": "variables",
      "uri": "https://www.speedrun.com/api/v1/categories/w20w1lzd/variables"
    },
    {
      "rel": "records",
      "uri": "https://www.speedrun.com/api/v1/categories/w20w1lzd/records"
    },
    {
      "rel": "runs",
      "uri": "https://www.speedrun.com/api/v1/runs?category=w20w1lzd"
    },
    {
      "rel": "leaderboard",
      "uri": "https://www.speedrun.com/api/v1/leaderboards/76r55vd8/category/w20w1lzd"
    }
  ]
}
*/