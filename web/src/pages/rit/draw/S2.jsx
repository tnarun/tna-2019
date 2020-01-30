// title: RIT & SHOT 第二期抽奖公示

import React from 'react'
import css from './S2.scss'
import { Container, Row, FlexBox, HR } from '../../../components/FlexBox'
import SH3 from '../../../components/StrawberryH3'
import Markdown from 'markdown-to-jsx'

import RITSeasonStore from '../../../ap-rit-records/SeasonStore'
import RITStore from '../../../ap-rit-records/RITStore'

import SHOTSeasonStore from '../../../ap-rit-records/SHOTSeasonStore'
import SHOTStore from '../../../ap-rit-records/SHOTStore'

import TNA3Store from '../../../ap-rit-records/TNA3Store'

import Prizes from '../../../components/rit19/Prizes'

const md = `
本期抽奖参与范围为：

- RIT'19 S2 (2019 年 7 ~ 9 月) 提交成绩的所有选手；  
  [RIT'19 S2 成绩详单](/rit/season/S2)
  
- SHOT'19 S2 (2019 年 7 ~ 9 月) 提交成绩的所有选手；  
  [SHOT'19 S2 成绩详单](/shot/season/S2)

- 参与 TNA3 表演的所有 Runner;  
  具体清单见下方。
`

export default class S2 extends React.Component {
  render () {
    return <div className={ css.S2 }>
      <Container>
        <Row>
          <FlexBox flex={ 1 }>
            <h2>{ 'RIT & SHOT 第二期抽奖公示' }</h2>
            <HR height='.5rem' />

            <SH3>活动说明</SH3>
            <Markdown className={ css.md }>{ md }</Markdown>
            <HR height='.5rem' />

            <SH3>奖品</SH3>
            <Prizes SeasonID={ 'S2' } />
            <HR height='.5rem' />

            <SH3>抽奖积分权重清单</SH3>
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
    return <div className={ css.DrawRunners }>
      <div className={ css.head }>
        <span>编号</span>
        <span>选手</span>
        <span>参与活动</span>
        <span>抽奖积分权重</span>
      </div>
      <RITList />
      <SHOTList />
      <TNA3List />
    </div>
  }
}

class RITList extends React.Component {
  render () {
    let { seasonStore } = this.state

    if (!seasonStore) {
      return null
    }

    let _briefGroups = seasonStore.recordGroups.map((group, idx) => {
      return <div className={ css.group } key={ idx }>
        <span>{ idx + 1 }</span>
        <span className={ css.name }>{ group.runnerName }</span>
        <span className={ css.activity }>RIT'19 S2</span>
        <span className={ css.point }>{ group.sumPoint }</span>
      </div>
    })

    // console.log(JSON.stringify(seasonStore.recordGroups.map((group, idx) => {
    //   return { number: idx + 1, person: group.runnerName, point: group.sumPoint }
    // })))

    return <div className={ css.RIT }>
      { _briefGroups }
    </div>
  }

  state = {
    seasonStore: null
  }

  async componentDidMount () {
    let ritStore = new RITStore()
    await ritStore.loadSeasons()
    let ritSeason = ritStore.getSeasonById('S2')

    let seasonStore = new RITSeasonStore({ ritSeason })
    await seasonStore.load()
    this.setState({ seasonStore, ritStore })
  }
}

class SHOTList extends React.Component {
  render () {
    let { seasonStore } = this.state

    if (!seasonStore) {
      return null
    }

    let _briefGroups = seasonStore.recordGroups.map((group, idx) => {
      return <div className={ css.group } key={ idx }>
        <span>{ idx + 9 }</span>
        <span className={ css.name }>{ group.runnerName }</span>
        <span className={ css.activity }>SHOT'19 S2</span>
        <span className={ css.point }>{ group.sumPoint }</span>
      </div>
    })

    // console.log(JSON.stringify(seasonStore.recordGroups.map((group, idx) => {
    //   return { number: idx + 9, person: group.runnerName, point: group.sumPoint }
    // })))

    return <div className={ css.SHOT }>
      { _briefGroups }
    </div>
  }

  state = {
    seasonStore: null
  }

  async componentDidMount () {
    let shotStore = new SHOTStore()
    await shotStore.loadSeasons()
    let shotSeason = shotStore.getSeasonById('S2')

    let seasonStore = new SHOTSeasonStore({ shotSeason })
    await seasonStore.load()
    this.setState({ seasonStore, shotSeason })
  }
}

class TNA3List extends React.Component {
  render () {
    let { store } = this.state

    if (!store) {
      return null
    }

    let _briefGroups = store.data.map((group, idx) => {
      return <div className={ css.group } key={ idx }>
        <span>{ idx + 21 }</span>
        <span className={ css.name }>{ group.runner }</span>
        <span className={ css.activity }>TNA3</span>
        <span className={ css.point }>1</span>
      </div>
    })

    // console.log(JSON.stringify(store.data.map((group, idx) => {
    //   return { number: idx + 21, person: group.runner, point: 1 }
    // })))

    return <div className={ css.TNA3 }>
      { _briefGroups }
    </div>
  }

  state = {
    store: null
  }

  async componentDidMount () {
    let store = new TNA3Store()
    await store.load()
    this.setState({ store })
  }
}