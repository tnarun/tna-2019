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
        <h2>支援 2019-nCoV 新冠疫情援助<span>特别活动</span></h2>

        {/* <div className={ css.desc }>
          <p>这是一次特别的直播</p>
          <p>在这里</p>
          <p>游戏是意志的接力棒</p>
          <p>把我们的声援</p>
          <p>聚集起来</p>
          <p>向前传递</p>
        </div> */}

        <div className={ css.desc }>
          <p>2.8 和 2.9 两天</p>
          <p><span>TNA</span> 将以<span>速通直播</span>的形式</p>
          <p>进行<span>表演募捐</span></p>
          <p>期间全部所得</p>
          <p>将在这段特殊时期</p>
          <p>用以进行<span>医疗援助</span></p>
          <p>并全程公示</p>
        </div>

        {
          store ? <ShowList store={ store } /> : null
        }

        <h2>直播地址</h2>
        <h3>虎牙直播：<a href='https://www.huya.com/15479446' target='_blank' rel='noopener noreferrer'>https://www.huya.com/15479446</a></h3>

        <h2>特邀主持人</h2>
        <h3>老五</h3>
        <h3>女王盐</h3>
        <h3>不能吃的OK酱 (vliver)</h3>
        <h3>白桃channel (vliver)</h3>

        <h2>捐助地址</h2>
        <h3>爱发电：<a href='https://afdian.net/@TNAmarathon' target='_blank' rel='noopener noreferrer'>https://afdian.net/@TNAmarathon</a></h3>

        <div className={ css.img }>
          <img src='https://afdian.net/static/img/logo/logo.png' alt='爱发电' />
        </div>

        <br/><br/><br/>
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
        <span>游戏</span>
        <span>表演者</span>
        <span>项目分类</span>
        <span>开始与结束时间</span>
      </div>
      { _shows }
    </div>
  }
}