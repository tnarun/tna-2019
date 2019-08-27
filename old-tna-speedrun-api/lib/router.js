const jsonBody = require('body/json')
const Router = require('url-router')

const getBody = ({ req, resp }) => {
  return new Promise(resolve => {
    jsonBody(req, resp, (err, body) => {
      resolve({ err, body })
    })
  })
}

const respJSON = (resp, data) => {
  resp.setHeader('content-type', 'application/json')
  resp.send(JSON.stringify(data))
}

const { connectDB } = require('../lib/utils/db')

const GameAdapter = require('../lib/adapters/GameAdapter')
const LeaderboardAdapter = require('../lib/adapters/LeaderboardAdapter')

module.exports = new Router([
  // 获取指定游戏 id 的信息，并每六小时从 speedrun 同步
  ['GET', '/games/:id', async ({ req, resp, route }) => {
    let { body } = await getBody({ req, resp })
    let id = route.params.id

    let game
    await connectDB(async () => {
      game = await GameAdapter.findOrSyncGameFromSpeedrun({ id })
    })

    respJSON(resp, { game })
  }],

  // 获取指定游戏在指定分类下的榜单
  // 支持 vars（查询变量）
  ['GET', '/leaderboards/:gameId/category/:categoryId', async ({ req, resp, route }) => {
    let { body } = await getBody({ req, resp })
    let { gameId, categoryId } = route.params
    let queries = req.queries
    let vars = {}
    Object.keys(queries).forEach(key => {
      if (key.startsWith('var-')) {
        let k = key.split('var-')[1]
        vars[k] = queries[key]
      }
    })

    let leaderboard
    await connectDB(async () => {
      leaderboard = await LeaderboardAdapter.findLeaderboardOrSyncFromSpeedrun({
        speedrunGameId: gameId, 
        speedrunCategoryId: categoryId,
        vars
      })
    })

    respJSON(resp, { gameId, categoryId, vars, leaderboard })
  }],
])