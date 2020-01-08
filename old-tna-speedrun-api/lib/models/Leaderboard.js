const mongoose = require('mongoose')
const { Schema } = mongoose

const Leaderboard = new mongoose.Schema({
  speedrunGameId: {
    type: String, required: true
  },
  speedrunCategoryId: {
    type: String, required: true
  },
  vars: {
    type: Object, required: true
  },
  
  speedrunData: {
    type: Object, required: true
  },
  // 榜单本地更新时间
  updatedAt: {
    type: Date, required: true
  }
})

Leaderboard.index({ 
  speedrunGameId: 1, 
  speedrunCategoryId: 1,
  vars: 1
}, { unique: true })

module.exports = mongoose.model('Leaderboard', Leaderboard)