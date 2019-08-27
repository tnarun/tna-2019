const { db } = require('ben7th-fc-utils')

const getVgGamePage = require('./lib/getVgGamePage')
const GameORM = require('./orm/GameORM')
const SpiderStep = require('./models/SpiderStep')

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
  let id, game

  await db.connectDB(async () => {
    let offset = await getCurrentOffset()

    id = offset
    // id = 10767 // 只狼
    // let id = 3484 // 永恒之柱
    
    let vgtimeData = null

    try {
      vgtimeData = await getVgGamePage({ id })
    } catch (e) {
      console.log(e)
    }

    if (vgtimeData) {
      game = await GameORM.createOrUpdate({ vgtimeData })
    }

    await saveNewOffset()
  })

  return { id, game }
}

module.exports.handler = (event, context, callback) => {
  console.log(new String(event))
  func().then(({ id, game }) => {
    callback(null, { id, game })
  })
}