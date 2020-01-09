const ENDPOINT = 'https://1246105.cn-beijing.fc.aliyuncs.com/2016-08-15/proxy/speedrun/api'

const GET = async ({ path }) => {
  let url = `${ ENDPOINT }${ path }`
  let res = await fetch(url)
  let data = await res.json()
  return data.data
}

const runs = {
  async getOne ({ id }) {
    let path = `/runs/${id}`
    return await GET({ path })
  }
}

export default runs