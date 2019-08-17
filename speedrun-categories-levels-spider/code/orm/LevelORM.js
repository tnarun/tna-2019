const Level = require('../models/Level')

const _packData = ({ gameId, speedrunData }) => {
  let speedrunId = speedrunData.id
  let name = speedrunData.name

  return {
    speedrunId, 
    speedrunData, 
    updatedAt: new Date(),
    name, gameId
  }
}

const _create = async ({ gameId, speedrunData }) => {
  let d = _packData({ gameId, speedrunData })
  let level = await Level.create(d)
  return level
}

const _uodate = async ({ gameId, speedrunData }) => {
  let d = _packData({ gameId, speedrunData })
  let level = await Level.updateOne({ speedrunId: speedrunData.id }, d)
  return level
}

const createOrUpdate = async ({ gameId, speedrunData }) => {
  let speedrunId = speedrunData.id
  let run = await Level.findOne({ speedrunId })

  if (!run) {
    return await _create({ gameId, speedrunData })
  } else {
    return await _uodate({ gameId, speedrunData })
  }
}

module.exports = { createOrUpdate }