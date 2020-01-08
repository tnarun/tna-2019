const mongoose = require('mongoose')

const Series = new mongoose.Schema({
  // speedrun ID
  speedrunId: { type: String, unique: true, required: true },

  // speedrun 游戏系列数据
  // https://www.speedrun.com/api/v1/series/rv7emz49 res.data
  // https://www.speedrun.com/api/v1/series?offset=0&max=200 res.data[0]
  speedrunData: { type: Object, required: true },

  // 数据更新时间
  updatedAt: { type: Date, required: true },

  // 系列名
  abbreviation: { type: String, required: true }
})

module.exports = mongoose.model('Series', Series)

/*
speedrunData: {
  "id": "8nwjpj7y",
  "weblink": "https://www.speedrun.com/.hack",
  "links": [
    {
      "rel": "self",
      "uri": "https://www.speedrun.com/api/v1/series/8nwjpj7y"
    },
    {
      "rel": "games",
      "uri": "https://www.speedrun.com/api/v1/series/8nwjpj7y/games"
    }
  ],
  "names": {
    "international": ".hack//",
    "japanese": null
  },
  "abbreviation": ".hack",
  "moderators": {
    "68we7q8g": "moderator",
    "qjoee786": "moderator",
    "48ge6kyj": "super-moderator"
  },
  "created": "2015-11-19T03:09:47Z",
  "assets": {
    "logo": {
      "uri": "https://www.speedrun.com/themes/Default/logo.png",
      "width": 640,
      "height": 78
    },
    "cover-tiny": {
      "uri": "https://www.speedrun.com/themes/.hack/cover-32.png",
      "width": 45,
      "height": 25
    },
    "cover-small": {
      "uri": "https://www.speedrun.com/themes/.hack/cover-64.png",
      "width": 90,
      "height": 50
    },
    "cover-medium": {
      "uri": "https://www.speedrun.com/themes/.hack/cover-128.png",
      "width": 180,
      "height": 101
    },
    "cover-large": {
      "uri": "https://www.speedrun.com/themes/.hack/cover-256.png",
      "width": 195,
      "height": 110
    },
    "icon": {
      "uri": "https://www.speedrun.com/themes/Default/favicon.png",
      "width": 64,
      "height": 64
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
    "background": {
      "uri": "https://www.speedrun.com/themes/.hack/background.png",
      "width": 1956,
      "height": 1564
    },
    "foreground": null
  }
}
*/