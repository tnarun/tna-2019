const mongoose = require('mongoose')

const SpiderStep = new mongoose.Schema({
  spiderName: String,
  currentOffset: Number
})

module.exports = mongoose.model('SpiderStep', SpiderStep)