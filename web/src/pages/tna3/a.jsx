// title: TNA 3

import React from 'react'
import css from './a.scss'

import WidthContainer from '../../components/layouts/WidthContainer'

import { loadSchedueData } from '../../data/tna3/data'

import { estTimeCN } from '../../utils/speedrunTime'

import moment from 'moment'

export default class extends React.Component {
  render () {
    return <div className={ css.tna3 }>
      <WidthContainer>
        <BaoMing data={ this.state.DAY1 } name='DAY 1 - 2019.10.04' />
        <BaoMing data={ this.state.DAY2 } name='DAY 2 - 2019.10.05' />
        <BaoMing data={ this.state.DAY3 } name='DAY 3 - 2019.10.06' />
      </WidthContainer>
    </div>
  }

  state = {
    DAY1: [],
    DAY2: [],
    DAY3: []
  }

  componentDidMount () {
    let data = loadSchedueData()
    let { DAY1, DAY2, DAY3 } = data
    console.log({ DAY1, DAY2, DAY3 })
    this.setState({ DAY1, DAY2, DAY3 })
  }
}

class BaoMing extends React.Component {
  render () {
    let data = this.props.data
    let _list = data.map((x, idx) => {

      let _from = ''
      let _to = ''
      if (x.time) {
        _from = moment(x.time).format('HH:mm')
      }
      if (x.est && x.time) {
        _to = moment(moment(x.time) + moment.duration(x.est)).format('HH:mm')
      }

      let duration = x.est ? <>
        {/* <span className={ css.label }>预计</span> */}
        <span>{ estTimeCN(x.est) }</span>
      </> : null
      let guide = x.guide ? <>
        <span className={ css.label }>解说</span>
        <span>{ x.guide }</span>
      </> : null

      let img = x.abbr ? `url(//tna-web.oss-ap-southeast-1.aliyuncs.com/speedrun-game-assets/${ x.abbr }/cover-256.png?x-oss-process=image/resize,m_fill,w_320,h_320,limit_0)` : null

      img = x.megaAbbr ? `url(//tna-upload.oss-cn-shanghai.aliyuncs.com/assets/mega-cover/${ x.megaAbbr }.png?x-oss-process=image/resize,m_fill,w_320,h_320,limit_0)` : img

      let player = x.player
      if (x.type === 'race') {
        player = <span>{ player[0] }<span className={css.cross}>×</span>{ player[1] }</span>
      }

      let playerLabel = x.type === 'race' ? 
        <span className={ `${css.label} ${css.race}` }>竞速</span> :
        <span className={ css.label }>表演</span>

      if (x.type === 'secret') {
        return <div className={ `${css.showItem} ${css.secret}` } key={ idx }>
          <div className={ css.left }>
            <div className={ css.time }>
              <div className={ css.from }>
                <span>?</span>
              </div>
              <div className={ css.to }>
                <span>?</span>
              </div>
            </div>

            <div className={ css.info }>
              <div className={ css.cover }>
                ?
              </div>
              <div className={ css.name }>
                ?
              </div>
            </div>
          </div>

          <div className={ css.right }>
            <div className={ css.category }>Secret Item</div>
            <div className={ css.player }>
              <span>?</span>
            </div>
            <div className={ css.duration }>{ duration }</div>
            <div className={ css.guide }>?</div>
          </div>
        </div>
      }

      return <div className={ css.showItem } key={ idx }>
        <div className={ css.left }>
          <div className={ css.time }>
            <div className={ css.from }>
              <span className={ css.label }>开始</span>
              <span>{ _from }</span>
            </div>
            <div className={ css.to }>
              <span className={ css.label }>结束</span>
              <span>{ _to }</span>
            </div>
          </div>

          <div className={ css.info }>
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
        </div>

        <div className={ css.right }>
          <div className={ css.category }>{ x.category }</div>
          <div className={ css.player }>
            { playerLabel }
            <span>{ player }</span>
          </div>
          <div className={ css.duration }>{ duration }</div>
          <div className={ css.guide }>{ guide }</div>
        </div>
      </div>
    })

    return <>
      <div className={ css.BaoMing }>
        <h2>{ this.props.name }</h2>
      </div>
      <div className={ css.BaoMingList }>
        <div className={ css.BaoMingHeader }>
          <div className={ css.time }>时间</div>
          <div className={ css.gameh }>游戏</div>
          <div>类目与时长</div>
          <div>表演与解说</div>
        </div>
        { _list }
      </div>
    </>
  }
}