// const BASE = 'http://localhost:3000'
const BASE = 'http://149.28.66.174'

const GET = (path) => {
  return new Promise((resolve, reject) => {
    let url = `${ BASE }${ path }`
    console.log(`GET ${url}`)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
      .catch(e => {
        console.log('GET ERROR')
        reject(e)
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