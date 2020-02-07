import React from 'react'
import css from './afdian.scss'

import WidthContainer from '../../components/layouts/WidthContainer'
import moment from 'moment'

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
      </WidthContainer>
    </div>
  }

  async componentDidMount () {
    let store = new Store()
    await store.load()
    this.setState({ list: store.list, total: store.total })

    this.timer = setInterval(async () => {
      await store.load()
      this.setState({ list: store.list, total: store.total })
    }, 120 * 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }
}

class AFDian extends React.Component {
  render () {
    let { list } = this.props
    let _list = list.map((d, idx) => {
      return <Item key={ idx } data={ d } />
    })
    return <div className={ css.AFDian }>
      <div className={ css.header }>
        <span>捐款人</span>
        <span>捐款项目</span>
        <span>时间</span>
        <span>数量</span>
        <span>金额</span>
      </div>
      { _list }
    </div>
  }
}

class Item extends React.Component {
  render () {
    let { data } = this.props
    let userName = data.user.name
    let planName = data.plan.name
    planName = planName ? planName : '自选赞助' 
    let time = moment(data.create_time * 1000).format('MM-DD HH:mm:ss')
    let count = data.month
    let amount = data.total_amount

    return <div className={ css.Item }>
      <span className={ css.user }>{ userName }</span>
      <span>{ planName }</span>
      <span>{ time }</span>
      <span>{ count }</span>
      <span className={ css.amount }>¥ { amount }</span>
    </div>
  }
}