const Game = require('../models/Game')

const _packData = ({ speedrunData }) => {
  let speedrunId = speedrunData.id
  let abbreviation = speedrunData.abbreviation

  return {
    speedrunId, 
    abbreviation,
    speedrunData, 
    updatedAt: new Date() 
  }
}

const createGame = async ({ speedrunData }) => {
  let d = _packData({ speedrunData })
  let game = await Game.create(d)
  return game
}

const updateGame = async ({ speedrunData }) => {
  let d = _packData({ speedrunData })
  let game = await Game.updateOne({ speedrunId: speedrunData.id }, d)
  return game
}

const createOrUpdateGame = async ({ speedrunData }) => {
  let speedrunId = speedrunData.id
  let game = await Game.findOne({ speedrunId })

  if (!game) {
    return await createGame({ speedrunData })
  } else {
    return await updateGame({ speedrunData })
  }
}

module.exports = { createOrUpdateGame }