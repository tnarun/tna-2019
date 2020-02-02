// title: TNA SP

import React from 'react'
import css from './index.scss'

import WidthContainer from '../../components/layouts/WidthContainer'

import ShowStore from '../../api-ncovhelp/ShowStore'

export default class index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      store: null
    }
  }

  render () {
    let { store } = this.state

    return <div className={ css.index }>
      <WidthContainer>
        <h1>TNA <span>SP</span></h1>
        <h2>支援 2019-nCoV 新冠疫情救助<span>特别活动</span></h2>

        {
          store ? <ShowList store={ store } /> : null
        }

        <h2>共渡难关，为武汉加油！</h2>
        <br/><br/><br/>
      </WidthContainer>
    </div>
  }

  async componentDidMount () {
    let store = new ShowStore()
    await store.load()
    this.setState({ store })
  }
}

class ShowList extends React.Component {
  render () {
    let { store } = this.props
    let day1 = store.days[0]
    let day2 = store.days[1]

    return <div className={ css.ShowList }>
      <h3>节目单 DAY1</h3>
      <Day data={ day1 } />
      <h3>节目单 DAY2</h3>
      <Day data={ day2 } />
    </div>
  }
}

class Day extends React.Component {
  render () {
    let { data } = this.props
    let { shows } = data 
    let _shows = shows
      .filter((x) => !x.isSecret)
      .map((x, idx) => {
        return <div className={ css.show } key={ idx }>
          <span>{ x.name }</span>
          <span>{ x.runnerString }</span>
          <span>{ x.category }</span>
          <span>{ x.startTime } - { x.endTime }</span>
        </div>
      })
    return <div className={ css.Day }>
      <div className={ css.header }>
        <span>游戏</span><span>表演者</span><span>项目分类</span><span>开始与结束时间</span>
      </div>
      { _shows }
    </div>
  }
}