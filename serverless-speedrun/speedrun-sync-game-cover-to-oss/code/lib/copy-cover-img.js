const OSS = require('ali-oss')
const params = {
  "region": process.env.OSS_REGION,
  "accessKeyId": process.env.OSS_ACCESS_KEY_ID,
  "accessKeySecret": process.env.OSS_ACCESS_KEY_SECRET,
  "bucket": process.env.OSS_BUCKET
}
const client = new OSS(params)

const request = require('request')

module.exports = async ({ sourceURL, fileName }) => {
  let osspath = `speedrun-game-assets/${fileName}`

  console.log({ sourceURL, fileName, osspath })
  // console.log({ params })

  return new Promise(resolve => {
    request({ 
      url: encodeURI(sourceURL), 
      encoding: null 
    }, async (err, res, buffer) => {
      // console.log(new String(buffer))
      try {
        await client.put(osspath, new Buffer(buffer))
      } catch (e) {
        console.log('error')
      }
      resolve(osspath)
    })
  })
}