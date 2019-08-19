const fetch = require('node-fetch')
const { db } = require('ben7th-fc-utils')

const GameORM = require('./orm/GameORM')
const SpiderStepORM = require('./orm/SpiderStepORM')

const { SPIDER_NAME } = process.env

const getSpeedrunGames = async () => {
  let games = []

  await db.connectDB(async () => {
    let spiderName = SPIDER_NAME
    let offset = await SpiderStepORM.getCurrentOffset({ spiderName })
    let max = 200
    let url = `https://www.speedrun.com/api/v1/games?orderby=created&direction=asc&offset=${ offset }&max=${ max }`
    console.log({ url })

    let res = await fetch(url)
    let resData = await res.json()

    for (let d of resData.data) {
      let game = await GameORM.createOrUpdateGame({ speedrunData: d })
      games.push(game)
    }

    await SpiderStepORM.updateCurrentOffsetToNextStep({ spiderName })
  })
  
  return games
}

module.exports.handler = (event, context, callback) => {
  console.log(new String(event))

  getSpeedrunGames({ offset: 0 }).then(games => {
    callback(null, games.length)
  })
}