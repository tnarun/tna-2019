const Run = require('../models/Run')

const _packData = ({ speedrunData }) => {
  let speedrunId = speedrunData.id
  let gameId = speedrunData.game
  let categoryId = speedrunData.category
  let levelId = speedrunData.level

  return {
    speedrunId, 
    gameId, categoryId, levelId,
    speedrunData, 
    updatedAt: new Date() 
  }
}

const _create = async ({ speedrunData }) => {
  let d = _packData({ speedrunData })
  let run = await Run.create(d)
  return run
}

const _update = async ({ speedrunData }) => {
  let d = _packData({ speedrunData })
  let run = await Run.updateOne({ speedrunId: speedrunData.id }, d)
  return run
}

const createOrUpdate = async ({ speedrunData }) => {
  let speedrunId = speedrunData.id
  let run = await Run.findOne({ speedrunId })

  if (!run) {
    return await _create({ speedrunData })
  } else {
    return await _update({ speedrunData })
  }
}

module.exports = { createOrUpdate }