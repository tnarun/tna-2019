const Game = require('../models/Game')
const Category = require('../models/Category')
const Platform =  require('../models/Platform')

const speedrunAPI = require('../api/speedrun-api')

const _6H = 6 * 60 * 60 * 1000

// 从 speedrun 获取或同步 game 信息
const findOrSyncGameFromSpeedrun = async ({ id }) => {
  let game = await Game.findOne({ 
    $or: [ { speedrunId: id }, { abbreviation: id } ] 
  })

  if (!game || new Date() - game.updatedAt > _6H) {
    let res = await speedrunAPI.games.getById({ id })
    game = await _upsertGameBySpeedrunData({ speedrunData: res.data })
  }

  return game
}

// 根据 speedrunData 创建或更新 Game，
// 并且创建和更新 Category
// 并且创建和更新 Platform
const _upsertGameBySpeedrunData = async ({ speedrunData }) => {
  let speedrunId = speedrunData.id
  let abbreviation = speedrunData.abbreviation
  let updatedAt = new Date()

  // 创建或更新 game
  let game = await Game.findOneAndUpdate(
    { speedrunId }, 
    { speedrunId, speedrunData, updatedAt, abbreviation }, 
    { upsert: true, new: true }
  )

  // 创建或更新 category
  let categories = []
  for (let c of speedrunData.categories.data) {
    let _c = await _upsertCategoryBySpeedrunData({ speedrunData: c, game })
    categories.push(_c)
  }
  game.categories = categories
  await game.save()

  // 创建或更新 platform
  for (let p of speedrunData.platforms.data) {
    await _upsertPlatformBySpeedrunData({ speedrunData: p })
  }
  
  return game
}

// 根据 speedrunData 创建或更新 Category
const _upsertCategoryBySpeedrunData = async ({ speedrunData, game }) => {
  let speedrunId = speedrunData.id
  let name = speedrunData.name
  let updatedAt = new Date()

  return await Category.findOneAndUpdate(
    { speedrunId }, 
    { speedrunData, speedrunId, name, updatedAt, game: game._id }, 
    { upsert: true, new: true }
  )
}

// 根据 speedrunData 创建或更新 Platform
const _upsertPlatformBySpeedrunData = async ({ speedrunData }) => {
  let speedrunId = speedrunData.id
  let name = speedrunData.name
  let updatedAt = new Date()
  
  return await Platform.findOneAndUpdate(
    { speedrunId }, 
    { speedrunId, speedrunData, updatedAt, name },
    { upsert: true, new: true }
  )
}

module.exports = {
  findOrSyncGameFromSpeedrun
}