const mongoose = require('mongoose')

const Variable = new mongoose.Schema({
  // speedrun ID
  speedrunId: { type: String, unique: true, required: true },

  // speedrun 游戏分类变量
  // https://www.speedrun.com/api/v1/games/kyd4pxde/variables res.data[0]
  speedrunData: { type: Object, required: true },

  // 数据更新时间
  updatedAt: { type: Date, required: true },

  // 变量名
  name: { type: String, required: true },
  gameId: { type: String, required: true },
})

module.exports = mongoose.model('Variable', Variable)

/*
speedrunData: {
  "id": "6nj5wpl4",
  "links": [
    {
      "rel": "self",
      "uri": "https://www.speedrun.com/api/v1/variables/6nj5wpl4"
    },
    {
      "rel": "game",
      "uri": "https://www.speedrun.com/api/v1/games/kyd4pxde"
    },
    {
      "rel": "category",
      "uri": "https://www.speedrun.com/api/v1/categories/zdnwj6ed"
    }
  ],
  "name": "Individual Cup",
  "category": "zdnwj6ed",
  "scope": {
    "type": "full-game"
  },
  "mandatory": true,
  "user-defined": false,
  "obsoletes": true,
  "values": {
    "_note": "`choices` is deprecated, please use `values` instead",
    "choices": {
      "gq7m2nqp": "Mushroom Cup",
      "21gz9xlz": "Flower Cup",
      "jqzzg4qp": "Star Cup",
      "klrox0lp": "Special Cup"
    },
    "values": {
      "gq7m2nqp": {
        "label": "Mushroom Cup",
        "rules": "Ends at the finish line of Thwomp Ruins.",
        "flags": {
          "miscellaneous": false
        }
      },
      "21gz9xlz": {
        "label": "Flower Cup",
        "rules": "Ends at the finish line of Shy Guy Falls.",
        "flags": {
          "miscellaneous": false
        }
      },
      "jqzzg4qp": {
        "label": "Star Cup",
        "rules": "Ends at the finish line of Mount Wario.",
        "flags": {
          "miscellaneous": false
        }
      },
      "klrox0lp": {
        "label": "Special Cup",
        "rules": "Ends at the finish line of Rainbow Road.",
        "flags": {
          "miscellaneous": false
        }
      }
    },
    "default": "gq7m2nqp"
  },
  "is-subcategory": true
}
*/