const { GET, POST } = require('./base')

const games = {
  // 获取一个游戏
  // 包括一些 embed 详细信息
  // GET /games/{id}
  // https://github.com/speedruncomorg/api/blob/master/version1/games.md#get-gamesid
  async getById ({ id }) {
    return await GET(`/games/${id}?embed=levels,categories,moderators,gametypes,platforms,regions,genres,engines,developers,publishers,variables`)
  }
}

const leaderboards = {
  // 获取一个游戏规则分类下的榜单
  // 包括一些 embed 详细信息
  // 按照 vars 进行过滤
  // GET /leaderboards/{game}/category/{category}
  // https://github.com/speedruncomorg/api/blob/master/version1/leaderboards.md#get-leaderboardsgamecategorycategory
  async get ({ gameId, categoryId, vars }) {
    let params = Object.keys(vars).map(key => `var-${key}=${vars[key]}`).join('&')
    let embed = 'embed=game,category,level,players,regions,platforms,variables'
    let url = `/leaderboards/${gameId}/category/${categoryId}?${params}&${embed}`
    return await GET(url)
  }
}

const speedrunAPI = {
  games, leaderboards
}

module.exports = speedrunAPI