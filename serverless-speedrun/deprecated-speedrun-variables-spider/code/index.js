const fetch = require('node-fetch')
const { db } = require('ben7th-fc-utils')

const VariableORM = require('./orm/VariableORM')
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

const saveNewOffset = async () => {
  let ss = await SpiderStep.findOne({ spiderName: SPIDER_NAME })
  let newOffset = ss.currentOffset + 1
  if (newOffset >= OFFSET_END) { newOffset = OFFSET_START }
  ss.currentOffset = newOffset
  await ss.save()
}

const func = async () => {
  let variables = []
  let levels = []

  await db.connectDB(async () => {
    let offset = await getCurrentOffset()
    let game = await Game.findOne().skip(offset)

    // 变量
    if (game) {
      let { speedrunId } = game
      let url = `https://www.speedrun.com/api/v1/games/${ speedrunId }/variables`
      console.log({ url })

      let res = await fetch(url)
      let resData = await res.json()

      for (let d of resData.data) {
        let variable = await VariableORM.createOrUpdate({ 
          gameId: speedrunId,
          speedrunData: d 
        })
        variables.push(variable)
      }
    }

    await saveNewOffset()
  })

  return variables
}

module.exports.handler = (event, context, callback) => {
  console.log(new String(event))
  func().then((variables) => {
    callback(null, variables.length)
  })
}