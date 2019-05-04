import { GET, POST } from './request'

const liveAPI = {
  // 握手
  async hello () {
    return await GET(`/hello`)
  },

  // 启动转播进程
  async startWatch ({ twitchId, biliRoom, cookie }) {
    return await POST('/startWatch', {
      twitchId, biliRoom, cookie
    })
  },

  // 停止转播进程
  async stopWatch ({ biliRoom }) {
    return await POST('/stopWatch', {
      biliRoom
    })
  },

  // 获取当前转播进程
  async getLiving () {
    return await GET('/getLiving')
  }
}

export default liveAPI