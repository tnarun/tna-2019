const fetch = require('node-fetch')
const { db } = require('ben7th-fc-utils')

const PlatformORM = require('./orm/PlatformORM')

const getPlatforms = async () => {
  let platforms = []

  await db.connectDB(async () => {
    let max = 200
    let url = `https://www.speedrun.com/api/v1/platforms?max=${ max }`
    console.log({ url })

    let res = await fetch(url)
    let resData = await res.json()

    for (let d of resData.data) {
      let platform = await PlatformORM.createOrUpdate({ speedrunData: d })
      platforms.push(platform)
    }
  })

  return platforms
}

module.exports.handler = (event, context, callback) => {
  console.log(new String(event))
  getPlatforms().then(platforms => {
    callback(null, platforms.length)
  })
}