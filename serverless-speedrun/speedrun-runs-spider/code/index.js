const fetch = require('node-fetch')
const { db } = require('ben7th-fc-utils')
const queryString = require('query-string')

const RunORM = require('./orm/RunORM')
const { getCurrentOffset, saveNewOffset } = require('./orm/SpiderStepLogic')

const { OFFSET_END } = process.env

const buildURL = ({ offset, max }) => {
  let path = 'https://www.speedrun.com/api/v1/runs'

  /**
   * 查询参数考虑：
   * 只抓 status = verified 审核通过的成绩
   * 按照 verify-date direction=asc 排序
   */
  let qstring = queryString.stringify({
    offset, max,
    status: 'verified',
    orderby: 'verify-date',
    embed: 'players'
  })
  return `${ path }?${ qstring }`
}

const func = async () => {
  let runs = []

  await db.connectDB(async () => {
    let offset = await getCurrentOffset()
    if (offset >= OFFSET_END) {
      return
    }

    let max = 200
    let url = buildURL({ offset, max })
    console.log({ url })

    let res = await fetch(url)
    let resData = await res.json()

    for (let d of resData.data) {
      let run = await RunORM.createOrUpdate({ speedrunData: d })
      runs.push(run)
    }

    await saveNewOffset({ add: runs.length })
  })

  return runs
}

module.exports.handler = (event, context, callback) => {
  console.log(new String(event))
  func().then(runs => {
    callback(null, { runs: runs.length })
  })
}