const util = require('util')

const { respJSON } = require('ben7th-fc-utils')
const { db } = require('ben7th-fc-utils')

const Game = require('./models/Game')
const GameRecord = require('./models/GameRecord')

const func = async ({ abbreviation }) => {
  if (!abbreviation) {
    return { gameRecords: [] }
  }

  let game = null
  let gameRecords = []

  await db.connectDB(async () => {
    game = await Game.findOne({ abbreviation })
    gameRecords = await GameRecord.find({ gameId: game.speedrunId })
  })

  return { game, gameRecords }
}

module.exports.handler = (req, resp, context) => {
  // let params = {
  //   path: req.path,
  //   queries: req.queries,
  //   headers: req.headers,
  //   method : req.method,
  //   requestURI : req.url,
  //   clientIP : req.clientIP,
  // }

  let { game } = req.queries

  func({ abbreviation: game })
    .then(data => {
      respJSON(resp, { data })
    })
    .catch(e => {
      respJSON(resp, { error: util.inspect(e).split(`\n`) })
    })
}