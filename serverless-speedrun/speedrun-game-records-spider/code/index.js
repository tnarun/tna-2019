const fetch = require('node-fetch')
const { db } = require('ben7th-fc-utils')

const GameRecordORM = require('./orm/GameRecordORM')
const Game = require('./models/Game')

const { getCurrentOffset, saveNewOffset } = require('./orm/SpiderStepLogic')

const func = async () => {
  let gameRecords = []

  await db.connectDB(async () => {
    let offset = await getCurrentOffset()
    let game = await Game.findOne().skip(offset)

    // 游戏记录榜
    // embed=game,category,level,players,regions,platforms,variables
    if (game) {
      let { speedrunId } = game
      let url = `https://www.speedrun.com/api/v1/games/${ speedrunId }/records?max=200&embed=game,category,level,players,regions,platforms,variables`
      console.log({ url })

      let res = await fetch(url)
      let resData = await res.json()

      let resRecords = resData.data

      for (let d of resRecords) {
        let gr = await GameRecordORM.createOrUpdate({ 
          speedrunData: d 
        })
        gameRecords.push(gr)
      }
    }

    await saveNewOffset()
  })

  return { gameRecords }
}

module.exports.handler = (event, context, callback) => {
  console.log(new String(event))
  func().then(({ gameRecords }) => {
    callback(null, { gameRecords: gameRecords.length })
  })
}