const mongoose = require('mongoose')

const Game = new mongoose.Schema({
  // speedrun ID
  speedrunId: { type: String, unique: true, required: true },

  // 游戏缩写
  abbreviation: { type: String, required: true },

  // speedrun 游戏元数据
  // https://www.speedrun.com/api/v1/games?offset=16515 res.data[0]
  // https://www.speedrun.com/api/v1/games/o1y5w2dq res.data
  speedrunData: { type: Object, required: true },

  // 数据更新时间
  updatedAt: { type: Date, required: true }
})

module.exports = mongoose.model('Game', Game)

/*
speedrunData: {
  "id": "o1y5w2dq",
  "names": {
    "international": "¿Cuántas Brujas?",
    "japanese": null,
    "twitch": "¿Cuántas Brujas?"
  },
  "abbreviation": "cuantas_brujas",
  "weblink": "https://www.speedrun.com/cuantas_brujas",
  "released": 1999,
  "release-date": "1999-01-01",
  "ruleset": {
    "show-milliseconds": false,
    "require-verification": true,
    "require-video": true,
    "run-times": [
      "realtime"
    ],
    "default-time": "realtime",
    "emulators-allowed": false
  },
  "romhack": false,
  "gametypes": [],
  "platforms": [
    "8gej2n93"
  ],
  "regions": [],
  "genres": [],
  "engines": [],
  "developers": [],
  "publishers": [],
  "moderators": {
    "1xy7yzxr": "super-moderator",
    "1xy65yjr": "super-moderator"
  },
  "created": "2015-05-22T01:52:22Z",
  "assets": {
    "logo": {
      "uri": "https://www.speedrun.com/themes/cuantas_brujas/logo.png",
      "width": 168,
      "height": 32
    },
    "cover-tiny": {
      "uri": "https://www.speedrun.com/themes/cuantas_brujas/cover-32.png",
      "width": 25,
      "height": 45
    },
    "cover-small": {
      "uri": "https://www.speedrun.com/themes/cuantas_brujas/cover-64.png",
      "width": 50,
      "height": 90
    },
    "cover-medium": {
      "uri": "https://www.speedrun.com/themes/cuantas_brujas/cover-128.png",
      "width": 100,
      "height": 180
    },
    "cover-large": {
      "uri": "https://www.speedrun.com/themes/cuantas_brujas/cover-256.png",
      "width": 200,
      "height": 360
    },
    "icon": {
      "uri": "https://www.speedrun.com/themes/cuantas_brujas/favicon.png",
      "width": 16,
      "height": 16
    },
    "trophy-1st": {
      "uri": "https://www.speedrun.com/themes/Default/1st.png",
      "width": 64,
      "height": 64
    },
    "trophy-2nd": {
      "uri": "https://www.speedrun.com/themes/Default/2nd.png",
      "width": 64,
      "height": 64
    },
    "trophy-3rd": {
      "uri": "https://www.speedrun.com/themes/Default/3rd.png",
      "width": 64,
      "height": 64
    },
    "trophy-4th": null,
    "background": null,
    "foreground": null
  },
  "links": [
    {
      "rel": "self",
      "uri": "https://www.speedrun.com/api/v1/games/o1y5w2dq"
    },
    {
      "rel": "runs",
      "uri": "https://www.speedrun.com/api/v1/runs?game=o1y5w2dq"
    },
    {
      "rel": "levels",
      "uri": "https://www.speedrun.com/api/v1/games/o1y5w2dq/levels"
    },
    {
      "rel": "categories",
      "uri": "https://www.speedrun.com/api/v1/games/o1y5w2dq/categories"
    },
    {
      "rel": "variables",
      "uri": "https://www.speedrun.com/api/v1/games/o1y5w2dq/variables"
    },
    {
      "rel": "records",
      "uri": "https://www.speedrun.com/api/v1/games/o1y5w2dq/records"
    },
    {
      "rel": "series",
      "uri": "https://www.speedrun.com/api/v1/series/yr4gon12"
    },
    {
      "rel": "derived-games",
      "uri": "https://www.speedrun.com/api/v1/games/o1y5w2dq/derived-games"
    },
    {
      "rel": "romhacks",
      "uri": "https://www.speedrun.com/api/v1/games/o1y5w2dq/derived-games"
    },
    {
      "rel": "leaderboard",
      "uri": "https://www.speedrun.com/api/v1/leaderboards/o1y5w2dq/category/zd3ngykn"
    }
  ]
}
*/