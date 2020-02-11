import React from 'react'
import css from './afdian.scss'

import WidthContainer from '../../components/layouts/WidthContainer'
import moment from 'moment'
import SItemCount from '../../components/ncovhelp/SItemCount'

class Store {
  constructor () {
    this.list = []
  }

  async load () {
    let url = `https://tna-upload.oss-cn-shanghai.aliyuncs.com/afdian-data/newest.json?r=${Math.random()}`
    let res = await fetch(url)
    let data = await res.json()
    let list = data.list.filter(x => x.create_time > 1580515200)
    this.list = list
  }

  get total () {
    let sum = 0
    for (let x of this.list) {
      let amount = ~~parseFloat(x.total_amount)
      sum += amount
    }
    return sum
  }
}

export default class Afdian extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      total: 0
    }
  }

  render () {
    let { list } = this.state

    return <div className={ css.Afdian }>
      <WidthContainer>
        <h1>爱发电筹款情况公示</h1>
        <h2>目前总金额： <span>¥ { this.state.total }.00</span></h2>
        <AFDian list={ list } />
        {
          list.length ? <Chart list={ list } /> : null
        }
      </WidthContainer>
    </div>
  }

  async componentDidMount () {
    let store = new Store()
    await store.load()
    this.setState({ list: store.list, total: store.total })

    // this.timer = setInterval(async () => {
    //   await store.load()
    //   this.setState({ list: store.list, total: store.total })
    // }, 120 * 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }
}

class AFDian extends React.Component {
  render () {
    let { list } = this.props

    let uuuuu = { }

    for (let d of list) {
      let name = d.user.name
      let amount = ~~parseFloat(d.total_amount)
      let u = uuuuu[name]

      if (!u) {
        uuuuu[name] = [ amount ]
      } else {
        uuuuu[name].push(amount)
      }
    }

    // console.log(111111, uuuuu, 2222)

    let _data = Object.keys(uuuuu).map((user) => {
      return {
        name: user,
        amount: uuuuu[user]
      }
    }).sort((a, b) => {
      let amount = 0
      let bmount = 0
      for (let ax of a.amount) {
        amount += ax
      }
      for (let bx of b.amount) {
        bmount += bx
      }
      
      return bmount - amount
    })

    let _list = _data.map((d, idx) => {
      return <Item key={ idx } data={ d } />
    })

    return <div className={ css.AFDian }>
      <h3>共 { _list.length } 人</h3>
      <div className={ css.header }>
        <span>捐款人</span>
        <span>金额</span>
      </div>
      { _list }
    </div>
  }
}

class Item extends React.Component {
  render () {
    let { data } = this.props
    let userName = data.name
    let amount = data.amount

    let amountt = 0
    for (let ax of amount) {
      amountt += ax
    }

    return <div className={ css.Item }>
      <span className={ css.user }>{ userName }</span>
      <span className={ css.amount }>{ amountt }</span>
    </div>
  }
}

class Chart extends React.Component {
  render () {
    let { arr, max } = this.state

    let _arr = arr.map((x, idx) => {
      let amount = x[0]
      let time = moment(x[1]).format('MM-DD HH:mm:ss')
      let p = amount / max * 100
      return <div key={ idx } className={ css.item }>
        <div className={ css.bar } style={{ width: `${ p }%` }}></div>
        <div className={ css.time }>{ time }</div>
      </div>
    })

    return <div className={ css.Chart }>
      { _arr }
    </div>
  }

  state = {
    arr: [],
    max: 0
  }

  componentDidMount () {
    let list = this.props.list
    let timeList = list.map(x => {
      return { amount: ~~parseInt(x.total_amount), time: x.create_time * 1000 }
    })

    let first = timeList[timeList.length - 1]
    let last = timeList[0]

    let arr = []
    let s = first.time
    while (true) {
      let e = s + 30 * 60 * 1000
      let sum = 0
      for (let d of timeList) {
        if (s <= d.time && d.time < e) {
          sum += d.amount
        }
      }
      arr.push([sum, s])
      if (e > last.time) { break }
      s = e
    }

    let max = 0
    for (let a of arr) {
      max = Math.max(a[0], max)
    }

    this.setState({ arr, max })

    // console.log({ arr }, moment(last.time).format('YYYY-MM-DD hh:mm:ss'), moment(first.time).format('YYYY-MM-DD hh:mm:ss'), (last.time - first.time) / 3600000)
  }
}