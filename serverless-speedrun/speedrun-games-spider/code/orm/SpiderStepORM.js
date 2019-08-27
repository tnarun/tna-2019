const SpiderStep = require('../models/SpiderStep')

const { MAX_OFFSET } = process.env
const FROM_OFFSET = ~~MAX_OFFSET - 2000

// 获取当前 spider 查询的起始位置，若不存在记录则创建记录
const getCurrentOffset = async ({ spiderName }) => {
  let ss = await SpiderStep.findOne({ spiderName })
  if (!ss) {
    ss = await SpiderStep.create({ spiderName, currentOffset: FROM_OFFSET })
  }
  return ss.currentOffset
}

const updateCurrentOffsetToNextStep = async ({ spiderName }) => {
  let ss = await SpiderStep.findOne({ spiderName })
  let newOffset = ss.currentOffset + 200
  if (newOffset >= ~~MAX_OFFSET) {
    console.log('updateCurrentOffsetToNextStep', newOffset, MAX_OFFSET)
    newOffset = FROM_OFFSET
  }
  ss.currentOffset = newOffset
  console.log({ newOffset })
  await ss.save()
}

module.exports = { getCurrentOffset, updateCurrentOffsetToNextStep }