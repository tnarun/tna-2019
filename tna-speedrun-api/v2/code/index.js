const util = require('util')

const { respJSON } = require('ben7th-fc-utils')
const { db } = require('ben7th-fc-utils')

const Game = require('./models/Game')

const func = async ({ }) => {
  let game = null
  let categories = []

  let variables = []
  let _variables = []

  await db.connectDB(async () => {
    game = await Game.findOne({ abbreviation: 'sekiro' })
    categories = game.speedrunData.categories.data
    variables = game.speedrunData.variables.data
    _variables = variables.map(x => {
      let { id, name, category } = x
      let values = x.values.values
      Object.keys(values).forEach(key => {
        values[key] = values[key].label
      })
      return { 
        id, name, category, values, default: x.values.default,
        "is-subcategory": x["is-subcategory"]
      }
    })
  })

  return { categories, variables, _variables }
  // return { categories, categoriesVariablesFilters }
}

/*

以只狼为例，默认分类取值为：
[
  {
    "category": null,
    "default": "21g48jm1",
    "name": "PC / Console",
    "id": "gnxrw1jn",
    "values": {
      "21g48jm1": "PC",
      "jqz5p6mq": "Console"
    },
    "is-subcategory": true
  },
  {
    "category": null,
    "default": null,
    "name": "Patch",
    "id": "68kd70ql",
    "values": {
      "gq74pkvq": "1.02",
      "21g45yn1": "1.03",
      "xqk45p4l": "1.04"
    },
    "is-subcategory": false
  },
  {
    "category": "w20vw6zk",
    "default": "jq6xpvvq",
    "name": "Shura Ending Subcategories",
    "id": "ylqkog7l",
    "values": {
      "jq6xpvvq": "Unrestricted",
      "mln098oq": "No Airswim",
      "810mp6ol": "Glitchless"
    },
    "is-subcategory": true
  },
  {
    "category": "vdomxnv2",
    "default": "5lm4p28l",
    "name": "IS Ending Subcategories",
    "id": "gnxr2z4n",
    "values": {
      "5lm4p28l": "Unrestricted",
      "81wd97mq": "No Airswim",
      "zqo39j5q": "Glitchless"
    },
    "is-subcategory": true
  },
  {
    "id": "789jd09n",
    "name": "All NG Memories Subcategories",
    "category": "wkpm0rwk",
    "values": {
      "z199vdk1": "Unrestricted",
      "p12wk4k1": "Glitchless"
    },
    "default": "z199vdk1",
    "is-subcategory": true
  },
  {
    "id": "2lgg107l",
    "name": "All NG Memories and Bead Subcategories",
    "category": "zdnxnen2",
    "values": {
      "81p0z6kq": "Unrestricted",
      "xqk436yl": "Glitchless"
    },
    "default": "81p0z6kq",
    "is-subcategory": true
  }
]

TODO:
目前 runs 数据抓取存在问题，需要先解决才能继续

查询条件：
https://www.speedrun.com/api/v1/runs?max=200&game=o1y9zk26&category=w20vw6zk&status=verified&var-gnxrw1jn=21g48jm1&var-ylqkog7l=jq6xpvvq

query {   
  "speedrunData.game": "o1y9zk26",    
  "speedrunData.category": "w20vw6zk",
  "speedrunData.status.status": "verified",
  "speedrunData.values.gnxrw1jn": "21g48jm1",
  "speedrunData.values.ylqkog7l": "jq6xpvvq",
}

sort {
  "speedrunData.times.realtime_t": 1
}
*/

module.exports.handler = (req, resp, context) => {
  let params = {
    path: req.path,
    queries: req.queries,
    headers: req.headers,
    method : req.method,
    requestURI : req.url,
    clientIP : req.clientIP,
  }

  func({ })
    .then(data => {
      respJSON(resp, { data })
    })
    .catch(e => {
      respJSON(resp, { error: util.inspect(e).split(`\n`) })
    })
}