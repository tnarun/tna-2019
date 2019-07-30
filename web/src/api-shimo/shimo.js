import { GET } from './request'

const shimoAPI = {
  // /shimo/formdata/?formGuid=tGlSvtsqiJgno3Yn
  async formdata ({ formGuid }) {
    return await GET(`/formdata/?formGuid=${ formGuid }`)
  }
}

export default shimoAPI