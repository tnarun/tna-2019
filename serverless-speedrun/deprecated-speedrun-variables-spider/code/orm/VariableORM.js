const Variable = require('../models/Variable')

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
  let variable = await Variable.create(d)
  return variable
}

const _uodate = async ({ gameId, speedrunData }) => {
  let d = _packData({ gameId, speedrunData })
  let variable = await Variable.updateOne({ speedrunId: speedrunData.id }, d)
  return variable
}

const createOrUpdate = async ({ gameId, speedrunData }) => {
  let speedrunId = speedrunData.id
  let run = await Variable.findOne({ speedrunId })

  if (!run) {
    return await _create({ gameId, speedrunData })
  } else {
    return await _uodate({ gameId, speedrunData })
  }
}

module.exports = { createOrUpdate }