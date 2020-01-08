const Leaderboard = require('../models/Leaderboard')
const speedrunAPI = require('../api/speedrun-api')

const _createOrUpdateLeaderboardBySpeedrunData = async ({ speedrunData, vars }) => {
  let speedrunGameId = speedrunData.game.data.id
  let speedrunCategoryId = speedrunData.category.data.id
  let updatedAt = new Date()

  return await Leaderboard.findOneAndUpdate(
    { speedrunGameId, speedrunCategoryId, vars }, 
    { speedrunGameId, speedrunCategoryId, vars, speedrunData, updatedAt }, 
    { upsert: true, new: true }
  )
}

// 2019.04.19 update
// 增加对 vars（查询变量）的支持
const findLeaderboardOrSyncFromSpeedrun = async ({ speedrunGameId, speedrunCategoryId, vars }) => {
  let leaderboard = await Leaderboard.findOne({ speedrunGameId, speedrunCategoryId, vars })
  let now = new Date()

  if (!leaderboard || now - leaderboard.updatedAt > 6 * 60 * 60 * 1000) {
    let res = await speedrunAPI.leaderboards.get({ 
      gameId: speedrunGameId, 
      categoryId: speedrunCategoryId,
      vars
    })
    leaderboard = await _createOrUpdateLeaderboardBySpeedrunData({ speedrunData: res.data, vars })
  }

  return leaderboard
}

module.exports = {
  findLeaderboardOrSyncFromSpeedrun
}