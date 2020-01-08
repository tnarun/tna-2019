const mongoose = require('mongoose')
const { Schema } = mongoose

const Category = new mongoose.Schema({
  speedrunId: {
    type: String, unique: true, required: true
  },
  speedrunData: {
    type: Object, required: true
  },
  // 规则名称
  name: {
    type: String, required: true
  },
  // 规则本地更新时间
  updatedAt: {
    type: Date, required: true
  },
  // 规则所属的 Game
  game: {
    type: Schema.Types.ObjectId, ref: 'Game'
  },
})

module.exports = mongoose.model('Category', Category)