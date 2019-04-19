const mongoose = require('mongoose')

const Platform = new mongoose.Schema({
  speedrunId: {
    type: String, unique: true, required: true
  },
  speedrunData: {
    type: Object, required: true
  },
  name: {
    type: String, required: true
  },
  updatedAt: {
    type: Date, required: true
  }
})

module.exports = mongoose.model('Platform', Platform)