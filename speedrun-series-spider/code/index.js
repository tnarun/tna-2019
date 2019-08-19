const fetch = require('node-fetch')
const { db } = require('ben7th-fc-utils')

const SeriesORM = require('./orm/SeriesORM')

const SpiderStep = require('./models/SpiderStep')

const { SPIDER_NAME, OFFSET_START, OFFSET_END } = process.env

const getCurrentOffset = async () => {
  let spiderName = SPIDER_NAME
  let ss = await SpiderStep.findOne({ spiderName })
  if (!ss) {
    ss = await SpiderStep.create({ spiderName, currentOffset: OFFSET_START })
  }
  return ss.currentOffset
}

const saveNewOffset = async () => {
  let ss = await SpiderStep.findOne({ spiderName: SPIDER_NAME })
  let newOffset = ss.currentOffset + 200
  if (newOffset >= OFFSET_END) { newOffset = OFFSET_START }
  ss.currentOffset = newOffset
  await ss.save()
}

const func = async () => {
  let series = []

  await db.connectDB(async () => {
    let offset = await getCurrentOffset()

    let url = `https://www.speedrun.com/api/v1/series?offset=${ offset }&max=200`
    console.log({ url })

    let res = await fetch(url)
    let resData = await res.json()

    for (let d of resData.data) {
      let s = await SeriesORM.createOrUpdate({ speedrunData: d })
      series.push(s)
    }

    await saveNewOffset()
  })

  return series
}

module.exports.handler = (event, context, callback) => {
  console.log(new String(event))
  func().then((series) => {
    callback(null, series.length)
  })
}