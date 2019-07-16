const deploy = require('ben7th-oss-deploy')
const ossConfig = require('./config.json')

const run = async () => {
  await deploy({ dir: 'dist', ossConfig })
}

run().then()