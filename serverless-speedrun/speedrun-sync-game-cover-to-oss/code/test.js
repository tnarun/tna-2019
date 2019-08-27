process.env.OSS_REGION = "oss-ap-southeast-1"
process.env.OSS_ACCESS_KEY_ID = "r9zoqicpf4kyi0cb1h6lkcwg"
process.env.OSS_ACCESS_KEY_SECRET = "FWrgo3ph2gCYp2FgF8di2whmZLs="
process.env.OSS_BUCKET = "tna-web"

const copy = require('./lib/copy-cover-img')

const run = async () => {
  let sourceURL = 'https://www.speedrun.com/themes/httpsgamejolt.comgamesbeyond-perception28833/cover-256.png'
  let fileName = 'speedrun-game-assets/httpsgamejolt.comgamesbeyond-perception28833/cover-256.png'
  let res = await copy({ sourceURL, fileName })
  console.log(res)
}

run().then()