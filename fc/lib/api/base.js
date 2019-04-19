const fetch = require('node-fetch')
const BASE = 'https://www.speedrun.com/api/v1'

const GET = (path) => {
  return new Promise((resolve, reject) => {
    let url = `${ BASE }${ path }`
    console.log(`GET ${url}`)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
  })
}

const POST = (path, data) => {
  return new Promise((resolve, reject) => {
    let url = `${ BASE }${ path }`
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
  })
}

 module.exports = {
  GET, POST
}