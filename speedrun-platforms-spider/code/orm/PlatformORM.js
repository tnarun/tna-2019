const Platform = require('../models/Platform')

const _packData = ({ speedrunData }) => {
  let speedrunId = speedrunData.id
  let name = speedrunData.name

  return {
    speedrunId, 
    name,
    speedrunData, 
    updatedAt: new Date() 
  }
}

const _create = async ({ speedrunData }) => {
  let d = _packData({ speedrunData })
  let platform = await Platform.create(d)
  return platform
}

const _update = async ({ speedrunData }) => {
  let d = _packData({ speedrunData })
  let platform = await Platform.updateOne({ speedrunId: speedrunData.id }, d)
  return platform
}

const createOrUpdate = async ({ speedrunData }) => {
  let speedrunId = speedrunData.id
  let platform = await Platform.findOne({ speedrunId })

  if (!platform) {
    return await _create({ speedrunData })
  } else {
    return await _update({ speedrunData })
  }
}

module.exports = { createOrUpdate }