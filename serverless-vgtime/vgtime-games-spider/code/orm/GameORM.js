const Game = require('../models/Game')

const _packData = ({ vgtimeData }) => {
  let vgtimeId = vgtimeData.id
  let name = vgtimeData.names.cn

  return {
    vgtimeId, 
    name,
    vgtimeData, 
    updatedAt: new Date(),
  }
}

const _create = async ({ vgtimeData }) => {
  let d = _packData({ vgtimeData })
  let game = await Game.create(d)
  return game
}

const _update = async ({ vgtimeData }) => {
  let d = _packData({ vgtimeData })
  let game = await Game.updateOne({ vgtimeId: vgtimeData.id }, d)
  return game
}

const createOrUpdate = async ({ vgtimeData }) => {
  let vgtimeId = vgtimeData.id
  let run = await Game.findOne({ vgtimeId })

  if (!run) {
    return await _create({ vgtimeData })
  } else {
    return await _update({ vgtimeData })
  }
}

module.exports = { createOrUpdate }