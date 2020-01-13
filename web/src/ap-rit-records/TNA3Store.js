export default class TNA3Store {
  async load () {
    let res = await fetch(`//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/data/2020-01-10/output-tna3-runners.json?${Math.random()}`)
    let data = await res.json()
    this.data = data.filter(x => !x.ignored)
  }
}