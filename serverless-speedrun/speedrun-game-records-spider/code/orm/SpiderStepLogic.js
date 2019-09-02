const SpiderStep = require('../models/SpiderStep')

const { SPIDER_NAME, OFFSET_START, OFFSET_END } = process.env

const _findOne = async () => {
  return await SpiderStep.findOne({ spiderName: SPIDER_NAME })
}

const _createOne = async () => {
  return await SpiderStep.create({ spiderName: SPIDER_NAME, currentOffset: OFFSET_START })
}

const getCurrentOffset = async () => {
  let ss = await _findOne()
  if (!ss) { ss = await _createOne() }
  return ss.currentOffset
}

const saveNewOffset = async () => {
  let ss = await _findOne()
  let newOffset = ss.currentOffset + 1
  if (newOffset >= OFFSET_END) { newOffset = OFFSET_START }
  ss.currentOffset = newOffset
  await ss.save()
}

module.exports = {
  getCurrentOffset, saveNewOffset
}