const { db } = require('ben7th-fc-utils')
const Game = require('./models/Game')
// const SpiderStep = require('./models/SpiderStep')
const CopyImg = require('./lib/copy-cover-img')

// const { SPIDER_NAME, OFFSET_START, OFFSET_END } = process.env

// const getCurrentOffset = async () => {
//   let spiderName = SPIDER_NAME
//   let ss = await SpiderStep.findOne({ spiderName })
//   if (!ss) {
//     ss = await SpiderStep.create({ spiderName, currentOffset: OFFSET_START })
//   }
//   return ss.currentOffset
// }

// const saveNewOffset = async () => {
//   let ss = await SpiderStep.findOne({ spiderName: SPIDER_NAME })
//   let newOffset = ss.currentOffset + 1
//   if (newOffset >= OFFSET_END) { newOffset = OFFSET_START }
//   ss.currentOffset = newOffset
//   await ss.save()
// }

const func = async () => {
  await db.connectDB(async () => {
    let games = await Game.find({ 
      isCoverCopiedToOSS: { $ne: true },
      OSS_ERROR: { $ne: true }
    }).limit(10)
    for (let game of games) {
      let sourceURL = game.speedrunData.assets['cover-large'].uri
      let fileName = `${ game.abbreviation }/cover-256.png`
      await CopyImg({ sourceURL, fileName })
      game.isCoverCopiedToOSS = true
      await game.save()
    }
  })

  return 'ok'
}

module.exports.handler = (event, context, callback) => {
  console.log(new String(event))
  func().then(res => {
    callback(null, res)
  })
}