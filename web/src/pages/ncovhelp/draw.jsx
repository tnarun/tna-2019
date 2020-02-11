// title: TNA SP 支持者抽奖公示

import React from 'react'
import css from './draw.scss'
import { Container, Row, FlexBox, HR } from '../../components/FlexBox'
import SH3 from '../../components/StrawberryH3'
import Markdown from 'markdown-to-jsx'

const md = `
本期抽奖参与范围为：

- 所有在 TNA SP 活动中，在爱发电为特定抽奖项目提供过支持的朋友，谢谢你们！
`

export default class S2 extends React.Component {
  render () {
    return <div className={ css.S2 }>
      <Container>
        <Row>
          <FlexBox flex={ 1 }>
            <h2>{ 'TNA SP 支持者抽奖公示' }</h2>
            <HR height='.5rem' />

            <SH3>活动说明</SH3>
            <Markdown className={ css.md }>{ md }</Markdown>
            <HR height='.5rem' />

            <DrawRunners />
            <HR height='.5rem' />
          </FlexBox>
        </Row>
      </Container>
    </div>
  }
}

class DrawRunners extends React.Component {
  render () {
    let { list1, list2, list3, list4 } = this.state

    let arr = [list1, list2, list3, list4].map((l, idx) => {
      return <div key={ idx }>
        <SH3>抽奖项目1</SH3>
        <div className={ css.DrawRunners }>
        <div className={ css.head }>
            <span>抽奖编号</span>
            <span>爱发电用户名</span>
            <span>对应奖品</span>
            <span>支持份数</span>
          </div>
          { l ? <AFDList list={ l } /> : null }
        </div>
      </div>
    })

    return <>
      { arr }
    </>
  }

  state = {}

  async componentDidMount () {
    let store = new Store()
    await store.load()
    let list1 = store.list.filter(x => {
      return x.plan.name && x.plan.name.includes('抽奖项目1')
    })
    let list2 = store.list.filter(x => {
      return x.plan.name && x.plan.name.includes('抽奖项目2')
    })
    let list3 = store.list.filter(x => {
      return x.plan.name && x.plan.name.includes('抽奖项目3')
    })
    let list4 = store.list.filter(x => {
      return x.plan.name && x.plan.name.includes('抽奖项目4')
    })
    this.setState({ list1, list2, list3, list4 })

    console.log(JSON.stringify(list4.map((x, idx) => {
      return { number: idx + 1, person: x.user.name, point: x.month }
    })))
  }
}

class AFDList extends React.Component {
  render () {
    let { list } = this.props

    let _list = list.map((d, idx) => {
      return <div className={ css.group } key={ idx }>
        <span>{ idx + 1 }</span>
        <span>{ d.user.name }</span>
        <span>{ d.plan.desc }</span>
        <span className={ css.point }>{ d.month }</span>
      </div>
    })

    return <div className={ css.RIT }>
      { _list }
    </div>
  }

  state = {
    list: null
  }
}

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