const Series = require('../models/Series')

const _packData = ({ speedrunData }) => {
  let speedrunId = speedrunData.id
  let abbreviation = speedrunData.abbreviation

  return {
    speedrunId, 
    speedrunData, 
    updatedAt: new Date(),
    abbreviation
  }
}

const _create = async ({ speedrunData }) => {
  let d = _packData({ speedrunData })
  let series = await Series.create(d)
  return series
}

const _uodate = async ({ speedrunData }) => {
  let d = _packData({ speedrunData })
  let series = await Series.updateOne({ speedrunId: speedrunData.id }, d)
  return series
}

const createOrUpdate = async ({ speedrunData }) => {
  let speedrunId = speedrunData.id
  let run = await Series.findOne({ speedrunId })

  if (!run) {
    return await _create({ speedrunData })
  } else {
    return await _uodate({ speedrunData })
  }
}

module.exports = { createOrUpdate }