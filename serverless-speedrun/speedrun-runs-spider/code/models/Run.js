const mongoose = require('mongoose')

// https://github.com/Automattic/mongoose/issues/6890
mongoose.set('useCreateIndex', true)

const Run = new mongoose.Schema({
  // speedrun ID
  speedrunId: { type: String, unique: true, required: true },

  // speedrun Game, Category, Level ID
  gameId: { type: String, index: true, required: true },
  categoryId: { type: String, index: true },
  levelId: { type: String, index: true },

  // speedrun 成绩元数据
  // https://www.speedrun.com/api/v1/runs res.data[0]
  // https://www.speedrun.com/api/v1/runs/yj3179gz res.data
  speedrunData: { type: Object, required: true },

  // 数据更新时间
  updatedAt: { type: Date, required: true }
})

module.exports = mongoose.model('Run', Run)

/*
speedrunData: {
  "id": "yj3179gz",
  "links": [
    {
      "rel": "self",
      "uri": "https://www.speedrun.com/api/v1/runs/yj3179gz"
    },
    {
      "rel": "game",
      "uri": "https://www.speedrun.com/api/v1/games/j1llopv1"
    },
    {
      "rel": "category",
      "uri": "https://www.speedrun.com/api/v1/categories/z27omrzd"
    },
    {
      "rel": "level",
      "uri": "https://www.speedrun.com/api/v1/levels/xd1x76e9"
    },
    {
      "rel": "platform",
      "uri": "https://www.speedrun.com/api/v1/platforms/8gej2n93"
    },
    {
      "rel": "region",
      "uri": "https://www.speedrun.com/api/v1/regions/e6lxy1dz"
    },
    {
      "rel": "examiner",
      "uri": "https://www.speedrun.com/api/v1/users/1xyd03yx"
    }
  ],
  "weblink": "https://www.speedrun.com/Netstorm_Islands_At_War/run/yj3179gz",
  "game": "j1llopv1",
  "level": "xd1x76e9",
  "category": "z27omrzd",
  "videos": {
    "links": [
      {
        "uri": "https://youtu.be/AqePwB7-9bc"
      }
    ]
  },
  "comment": "Speedrun was done by me (StormCat) on the Hard difficulty. \r\nNetstorm 10.82 build compiled Jule , 8, 2019 balance v5.6",
  "status": {
    "status": "verified",
    "examiner": "1xyd03yx",
    "verify-date": "2019-08-11T17:30:23Z"
  },
  "players": [
    {
      "rel": "user",
      "id": "1xyd03yx",
      "uri": "https://www.speedrun.com/api/v1/users/1xyd03yx"
    }
  ],
  "date": "2019-08-11",
  "submitted": "2019-08-11T17:30:23Z",
  "times": {
    "primary": "PT2M8S",
    "primary_t": 128,
    "realtime": "PT2M8S",
    "realtime_t": 128,
    "realtime_noloads": null,
    "realtime_noloads_t": 0,
    "ingame": "PT2M8S",
    "ingame_t": 128
  },
  "system": {
    "platform": "8gej2n93",
    "emulated": false,
    "region": "e6lxy1dz"
  },
  "splits": null,
  "values": {
    "wlex9dk8": "4lxe3241"
  }
}
*/