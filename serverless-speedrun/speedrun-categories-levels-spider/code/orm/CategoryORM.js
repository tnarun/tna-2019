const Category = require('../models/Category')

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
  let category = await Category.create(d)
  return category
}

const _uodate = async ({ gameId, speedrunData }) => {
  let d = _packData({ gameId, speedrunData })
  let category = await Category.updateOne({ speedrunId: speedrunData.id }, d)
  return category
}

const createOrUpdate = async ({ gameId, speedrunData }) => {
  let speedrunId = speedrunData.id
  let run = await Category.findOne({ speedrunId })

  if (!run) {
    return await _create({ gameId, speedrunData })
  } else {
    return await _uodate({ gameId, speedrunData })
  }
}

module.exports = { createOrUpdate }