const mongoose = require('mongoose')
const { Schema } = mongoose

const Game = new mongoose.Schema({
  speedrunId: {
    type: String, unique: true, required: true
  },
  speedrunData: {
    type: Object, required: true
  },
  abbreviation: {
    type: String, required: true
  },
  updatedAt: {
    type: Date, required: true
  },
  // game 包含的规则
  categories: [{
    type: Schema.Types.ObjectId, ref: 'Category'
  }],
})

module.exports = mongoose.model('Game', Game)