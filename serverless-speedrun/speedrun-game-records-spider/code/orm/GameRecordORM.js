const GameRecord = require('../models/GameRecord')

const _packData = ({ speedrunData }) => {
  let speedrunWeblink = speedrunData.weblink

  let gameId = speedrunData.game.data.id
  let categoryId = speedrunData.category.data.id
  let levelId = speedrunData.level.data.id

  return {
    speedrunWeblink,
    gameId, categoryId, levelId,
    speedrunData, 
    updatedAt: new Date() 
  }
}

const _create = async ({ speedrunData }) => {
  let d = _packData({ speedrunData })
  let gr = await GameRecord.create(d)
  return gr
}

const _update = async ({ speedrunData }) => {
  let d = _packData({ speedrunData })
  let gr = await GameRecord.updateOne({ speedrunWeblink: speedrunData.weblink }, d)
  return gr
}

const createOrUpdate = async ({ speedrunData }) => {
  let speedrunWeblink = speedrunData.weblink
  let run = await GameRecord.findOne({ speedrunWeblink })

  if (!run) {
    return await _create({ speedrunData })
  } else {
    return await _update({ speedrunData })
  }
}

module.exports = { createOrUpdate }