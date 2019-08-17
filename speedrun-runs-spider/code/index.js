const fetch = require('node-fetch')
const { db } = require('ben7th-fc-utils')

const RunORM = require('./orm/RunORM')
const SpiderStep = require('./models/SpiderStep')

const { SPIDER_NAME } = process.env

const getCurrentOffset = async () => {
  let spiderName = SPIDER_NAME
  let ss = await SpiderStep.findOne({ spiderName })
  if (!ss) {
    ss = await SpiderStep.create({ spiderName, currentOffset: 0 })
  }
  return ss.currentOffset
}

const func = async () => {
  let runs = []

  await db.connectDB(async () => {
    let offset = await getCurrentOffset()
    let max = 200
    let url = `https://www.speedrun.com/api/v1/runs?orderby=submitted&offset=${ offset }&max=${ max }`
    console.log({ url })

    let res = await fetch(url)
    let resData = await res.json()

    for (let d of resData.data) {
      let run = await RunORM.createOrUpdate({ speedrunData: d })
      runs.push(run)
    }

    let count = runs.length
    let ss = await SpiderStep.findOne({ spiderName: SPIDER_NAME })
    ss.currentOffset = ss.currentOffset + count
    await ss.save()
  })

  return runs
}

module.exports.handler = (event, context, callback) => {
  console.log(new String(event))
  func().then(runs => {
    callback(null, runs.length)
  })
}