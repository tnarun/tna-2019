require('should')
require('./env')

const db = require('../lib/utils/db')

const speedrunAPI = require('../lib/api/speedrun-api')
const { games } = speedrunAPI

const Game = require('../lib/models/Game')
const Category = require('../lib/models/Category')
const Leaderboard = require('../lib/models/Leaderboard')

const GameAdapter = require('../lib/adapters/GameAdapter')
const LeaderboardAdapter = require('../lib/adapters/LeaderboardAdapter')

describe ('speedrun', () => {
  describe ('games', () => {
    it ('getById', async () => {
      let res = await games.getById({ id: 'sekiro' })
      console.log(res.data)
      res.data.should.be.instanceof(Object)
    })
  })
})

describe ('Game', () => {
  before (async () => {
    await db.onlyConnect()
    await Game.deleteMany({})
    await Category.deleteMany({})
  })

  after (async () => {
    await db.onlyClose()
  })

  it ('findOrSyncGameFromSpeedrun', async () => {
    let game = await GameAdapter.findOrSyncGameFromSpeedrun({ id: 'sms' })
    game.should.be.instanceof(Object)
    let game1 = await GameAdapter.findOrSyncGameFromSpeedrun({ id: 'sms' })
    game1.should.be.instanceof(Object)
  })
})

describe ('Leaderboard', () => {
  before (async () => {
    await db.onlyConnect()
    await Leaderboard.deleteMany({})
  })

  after (async () => {
    await db.onlyClose()
  })

  it ('findLeaderboardOrSyncFromSpeedrun', async () => {
    let leaderboard = await LeaderboardAdapter.findLeaderboardOrSyncFromSpeedrun({
      speedrunGameId: 'o1y9zk26', // sekiro
      speedrunCategoryId: 'w20vw6zk', // Shura Ending,
      vars: {
        'gnxrw1jn': '21g48jm1' // PC
      }
    })
    leaderboard.should.be.instanceof(Object)
    console.log(leaderboard)
  })
})