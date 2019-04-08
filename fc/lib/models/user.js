/*
用户：
- 邮箱 email String unique
- 加密后密码 String

- 昵称 String
- salt String
- 微信登录字段 openid String
- 注册时间 DateTime
*/

const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const User = new mongoose.Schema({
  nickName: String,
  created: { type: Date, default: Date.now }
})

User.plugin(passportLocalMongoose, {
  usernameField: 'email'
})

module.exports = mongoose.model('User', User)