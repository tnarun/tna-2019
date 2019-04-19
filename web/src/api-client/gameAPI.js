import { GET } from './request'

const gameAPI = {
  async getOne ({ abbr }) {
    return await GET(`/games/${ abbr }`)
  }
}

export default gameAPI