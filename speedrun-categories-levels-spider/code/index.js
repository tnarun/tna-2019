const fetch = require('node-fetch')
const { db } = require('ben7th-fc-utils')

const CategoryORM = require('./orm/CategoryORM')
const LevelORM = require('./orm/LevelORM')
const SpiderStep = require('./models/SpiderStep')
const Game = require('./models/Game')

const { SPIDER_NAME, OFFSET_START, OFFSET_END } = process.env

const getCurrentOffset = async () => {
  let spiderName = SPIDER_NAME
  let ss = await SpiderStep.findOne({ spiderName })
  if (!ss) {
    ss = await SpiderStep.create({ spiderName, currentOffset: OFFSET_START })
  }
  return ss.currentOffset
}

const func = async () => {
  let categories = []
  let levels = []

  await db.connectDB(async () => {
    let offset = await getCurrentOffset()
    let game = await Game.findOne().skip(offset)

    // 分类
    if (game) {
      let { speedrunId } = game
      let url = `https://www.speedrun.com/api/v1/games/${ speedrunId }/categories`
      console.log({ url })

      let res = await fetch(url)
      let resData = await res.json()

      for (let d of resData.data) {
        let category = await CategoryORM.createOrUpdate({ 
          gameId: speedrunId,
          speedrunData: d 
        })
        categories.push(category)
      }
    }

    // 关卡
    if (game) {
      let { speedrunId } = game
      let url = `https://www.speedrun.com/api/v1/games/${ speedrunId }/levels`
      console.log({ url })

      let res = await fetch(url)
      let resData = await res.json()

      for (let d of resData.data) {
        let level = await LevelORM.createOrUpdate({ 
          gameId: speedrunId,
          speedrunData: d 
        })
        levels.push(level)
      }
    }

    let ss = await SpiderStep.findOne({ spiderName: SPIDER_NAME })
    let newOffset = ss.currentOffset + 1
    if (newOffset >= OFFSET_END) { newOffset = OFFSET_START }
    ss.currentOffset = newOffset
    await ss.save()
  })

  return { categories, levels }
}

module.exports.handler = (event, context, callback) => {
  console.log(new String(event))
  func().then(({ categories, levels }) => {
    callback(null, { categories: categories.length, levels: levels.length })
  })
}