import { GET } from './request'

const leaderboardAPI = {
  async get ({ gameId, categoryId, vars }) {
    let params = Object.keys(vars).map(key => `var-${key}=${vars[key]}`).join('&')
    let url = `/leaderboards/${gameId}/category/${categoryId}?${params}`
    console.log('leaderboardAPI.get', url)
    return await GET(url)
  }
}

export default leaderboardAPI