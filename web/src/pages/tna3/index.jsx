// title: TNA 3

import React from 'react'
import css from './index.scss'

import PageHeader from '../../components/layouts/PageHeaderV2'
import WidthContainer from '../../components/layouts/WidthContainer'
import Logo from '../../components/grids/Logo'

import { loadBaomingData } from '../../data/tna3/data'

import { estTimeCN } from '../../utils/speedrunTime'

import moment from 'moment'

// const BAOMING_URL = 'https://shimo.im/forms/cBvAroZP88gjbyQd/fill'
// const UPLOAD_URL = 'http://tnarun.com/tna3-upload/index.html'

const HUYA_ROOM = 'https://www.huya.com/15479446'
const BILI_ROOM = 'https://live.bilibili.com/38593'

// const BAOMING_RESULT = '/shimo/form/cBvAroZP88gjbyQd'

export default class extends React.Component {
  render () {
    return <div className={ css.tna3 }>
      <PH />

      <WidthContainer>
        <div className={ css.timeandreg }>
          <div className={ css.info }>
            <div className={ css.time }>
              <div className={ css.gridName }>日期</div>
              <h2>2019. OCT. 04</h2>
            </div>
            <a className={ css.huya } href={ HUYA_ROOM } target='_blank' rel='noopener noreferrer'>
              <div className={ css.gridName }>直播</div>
              <div className={ css.logoi }>
                <Logo src='//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/images/huyalogo200.png' />
              </div>
            </a>
            <a className={ css.bili } href={ BILI_ROOM } target='_blank' rel='noopener noreferrer'>
              <div className={ css.gridName }>直播</div>
              <div className={ css.logoi }>
                <Logo src='//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/images/bililogo200.png' />
              </div>
            </a>
          </div>
          <div className={ css.reg }>
            <div className={ css.gridName }>报名入口</div>
            <div className={ css.bmjz }>
              报名已截止
            </div>
          </div>
        </div>
      </WidthContainer>

      <WidthContainer>
        <BaoMing />
      </WidthContainer>

      <WidthContainer>
        <div className={ css.faqtimeline }>
          <div className={ css.timeline }>
            <h2>Timeline 时间线</h2>
            <Timeline />
          </div>
          <div className={ css.faq }>
            <h2>About TNA3</h2>
            <FAQ />
          </div>
        </div>
      </WidthContainer>
    </div>
  }
}

const PH = () => {
  return <div className={ css.hd }><PageHeader>
    <h1>TNA 3</h1>
    <h2>速通直播会</h2>
  </PageHeader></div>
}

const Timeline = () => {
  return <div className={ css.Timeline }>
    <div className={ css.timepoint }>
      <div className={ css.date }>2019-03-25</div>
      <div className={ css.event }>
        <span>活动公布，开始筹备</span>
      </div>
    </div>
    <div className={ css.timepoint }>
      <div className={ css.date }>2019-04-18</div>
      <div className={ css.event }>
        <span>发布第一个视频访谈</span>
      </div>
    </div>
    <div className={ css.timepoint }>
      <div className={ css.date }>2019-07-01</div>
      <div className={ css.event }>
        <span>正式招募开始</span>
      </div>
    </div>
    <div className={ css.timepoint }>
      <div className={ css.date }>2019-08-31</div>
      <div className={ css.event }>
        <span>报名截止</span>
      </div>
    </div>
    <div className={ css.timepoint }>
      <div className={ css.date }>2019-09-03</div>
      <div className={ css.event }>
        <span>公示报名结果</span>
      </div>
    </div>
    <div className={ css.duetimepoint }>
      <div className={ css.date }>2019-09-10</div>
      <div className={ css.event }>
        <span>内容审核与确认结束</span>
      </div>
    </div>
    <div className={ css.duetimepoint }>
      <div className={ css.date }>时间待定</div>
      <div className={ css.event }>
        <span>公布日程安排</span>
      </div>
    </div>
    <div className={ css.duetimepoint }>
      <div className={ css.date }>2019-10-04</div>
      <div className={ css.event }>
        <span>直播活动开始</span>
      </div>
    </div>
  </div>
}

const FAQ = () => {
  return <div className={ css.FAQ }>
    <div className={ css.qa }>
      <div>
        <label>Q:</label>
        <span>TNA 有什么好康的？</span>
      </div>
      <div>
        <label>A:</label>
        <span>TNA 借鉴了 GDQ 等活动的做法，以串烧方式连续直播不同 Runner 对不同游戏的速通，中间有一定的间歇；形式有单人，竞速等；偶尔也会有 STG 等其他类型的核玩内容。</span>
      </div>
    </div>

    <div className={ css.qa }>
      <div>
        <label>Q:</label>
        <span>怎么收看 TNA3 活动？</span>
      </div>
      <div>
        <label>A:</label>
        <span>TNA3 活动会在虎牙和 Bilibili 同时直播；届时可选择观看。具体时间表我们会在这个网页和新浪微博后续公布。</span>
      </div>
    </div>

    <div className={ css.qa }>
      <div>
        <label>Q:</label>
        <span>活动节目是怎么确定的？</span>
      </div>
      <div>
        <label>A:</label>
        <span>我们通过部分媒体和社交网络发布活动招募，开放报名入口；也会和我们熟悉和了解的 Runner 直接联系；对各种速通内容进行筛选，组织和反复确认后，确定节目单。</span>
      </div>
    </div>

    <div className={ css.qa }>
      <div>
        <label>Q:</label>
        <span>TNA3 相比 1, 2 有什么特别之处？</span>
      </div>
      <div>
        <label>A:</label>
        <span>由于今年部分其他活动分散了一些“人力资源”，并且赶上几个月的游戏发售荒，这一次在组织上需要多花费一些精力；我们希望在维持内容质量的同时，继续邀请到知名的世界级 Runner 来进行表演；同时今年会在直播技术上做一些新的尝试，增加观看体验的流畅性。</span>
      </div>
    </div>

    <div className={ css.qa }>
      <div>
        <label>Q:</label>
        <span>TNA 将来有什么打算？</span>
      </div>
      <div>
        <label>A:</label>
        <span>TNA, KKSK, RIT/SHOT 作为不同目的和形式的活动，我们都希望能够持续进行下去并逐步形成玩家社区的积累；</span>
      </div>
    </div>
  </div>
}

class BaoMing extends React.Component {
  render () {
    let totalTime = 0
    this.state.data.forEach((x, idx) => {
      if (x.est && idx < 1000) {
        let d = moment.duration(x.est)
        totalTime += d
      }
    })

    let race1 = moment.duration('PT45M') + 0
    let race2 = moment.duration('PT2H30M') + 0
    totalTime = moment.duration(totalTime - race1 -race2) 

    console.log({ race1, race2, totalTime, hour: totalTime.hours(), minute: totalTime.minutes(), count: this.state.data.length - 2 })

    let _list = this.state.data.map((x, idx) => {
      let time = x.est ? <>
        {/* <span className={ css.label }>预计</span> */}
        <span>{ estTimeCN(x.est) }</span>
      </> : null
      let guide = x.guide ? <>
        <span className={ css.label }>解说</span>
        <span>{ x.guide }</span>
      </> : null

      let img = x.abbr ? `url(//tna-web.oss-ap-southeast-1.aliyuncs.com/speedrun-game-assets/${ x.abbr }/cover-256.png?x-oss-process=image/resize,m_fill,w_320,h_320,limit_0)` : null

      img = x.megaAbbr ? `url(//tna-upload.oss-cn-shanghai.aliyuncs.com/assets/mega-cover/${ x.megaAbbr }.png?x-oss-process=image/resize,m_fill,w_320,h_320,limit_0)` : img

      return <div className={ css.showItem } key={ idx }>
        <div className={ css.left }>
          <div className={ css.cover }>
            <div className={ css.coveri }>
              <div className={ css.img } style={{ backgroundImage: img }}></div>
            </div>
          </div>
          <div className={ css.name }>
            <div>{ x.cnName }</div>
            <div className={ css.en }>{ x.enName }</div>
          </div>
        </div>
        <div className={ css.right }>
          <div className={ css.category }>{ x.category }</div>
          <div className={ css.player }>
            <span className={ css.label }>表演</span>
            <span>{ x.player }</span>
          </div>
          <div className={ css.time }>{ time }</div>
          <div className={ css.guide }>{ guide }</div>
        </div>
      </div>
    })

    return <>
      <div className={ css.BaoMing }>
        <h2>报名结果公示（并非最终节目单）</h2>
      </div>
      <div className={ css.BaoMingList }>
        <div className={ css.BaoMingHeader }>
          <div className={ css.gameh }>游戏</div>
          <div>类目与时间</div>
          <div>表演与解说</div>
        </div>
        { _list }
      </div>
    </>
  }

  state = {
    data: []
  }

  componentDidMount () {
    let data = loadBaomingData()
    console.log(data)
    this.setState({ data })
  }
}