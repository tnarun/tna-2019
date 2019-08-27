require('should')

const User = require('../lib/models/user')
const { connectDB, onlyConnect, onlyClose } = require('../lib/utils/db')

describe ('db', () => {
  it ('connect', async () => {
    await connectDB()
  })
})

describe ('user model', () => {
  before (async () => {
    await onlyConnect()
    await User.deleteMany({})
  })

  after (async () => {
    await onlyClose()
  })

  it ('引用', () => {
    let user = new User()
    user.should.be.Object()
  })

  it ('创建用户', async () => {
    let user = await User.register({ email: 'ben7th@sina.com' }, '1q2w3e')
    user.should.be.instanceof(User)
    let users = await User.find({ email: 'ben7th@sina.com' })
    users.length.should.equal(1)
  })

  it ('不能注册重复邮箱用户', async () => {
    try {
      let u1 = await User.register({ email: 'aaa@aaa.com' }, 'aaaa')
      u1.should.be.instanceof(User)
      let u2 = await User.register({ email: 'aaa@aaa.com' }, 'bbbb')
    } catch (e) {
      e.should.be.Error()
    }
    let users = await User.find({ email: 'aaa@aaa.com' })
    users.length.should.equal(1)
  })

  it ('验证邮箱和密码', async () => {
    let user = await User.register({ email: 'ben7th@126.com' }, '123456')
    user.should.be.instanceof(User)

    let auth = await User.authenticate()('ben7th@126.com', '123456')
    auth.user.should.be.instanceof(User)

    let auth1 = await User.authenticate()('ben7th@126.com', '12345678')
    auth1.user.should.be.False()
  })
})