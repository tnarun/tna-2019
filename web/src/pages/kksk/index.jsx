import React from 'react'
import css from './index.scss'
import { Container, Row, FlexBox } from '../../components/FlexBox'
import PageHeader from '../../components/PageHeader'
import moment from 'moment'
import { day1, day2, images } from '../../data/kksk.js'
import Iconfont from '@/components/Iconfont'

const numberZero = (n) => {
  return n >= 10 ? n : `0${n}`
}

class PlayTime extends React.Component {
  render () {
    let { time } = this.props
    let duration = moment.duration(time)
  
    let h = duration.hours()
    let m = duration.minutes()
  
    let _h = h > 0 ? `${h} 小时` : ''
    let _m = m > 0 ? `${numberZero(m)} 分钟` : ''
    let str = [_h, _m].join(' ')
  
    return (
      <span className={ css.playtime }>{ str }</span>
    )
  }
}

const Table = ({ data }) => {
  let _trs = data.map((d, idx) => {
    let _name = d.special ? d.special : 
      d.runners.length === 2 ? <span className={ css.vs0 }>{ d.runners[0] } <Iconfont name='vs' /> { d.runners[1] }</span> : <span>{ d.runners[0] }</span>

    let _tdname = (
      <td>
        <div>{ _name }</div>
        <div className={ css.tdsub }><Iconfont name='clock' /> { d.start } - { d.end }</div>
      </td>
    )
    let _tdgame = (
      <td className={ css.game }>
        <div className={ css.cover } style={{ backgroundImage: `url(${ images[d.abbr] })` }}></div>
        <a href={ `/games/${ d.abbr }` } target='_blank' rel="noopener noreferrer">
          <div className={ css.zh }>{ d.game.zh }</div>
          <div className={ css.tdsub }>{ d.game.en }</div>
        </a>
      </td>
    )

    let className = d.special ? css.sp : d.runners.length === 2 ? css.vs : css.run

    if (d.special) {
      return <tr key={ idx } className={ className }>
        { _tdname }
        { _tdgame }
        <td>
          <div><Iconfont name='gift' /> 现场奖品</div>
          <div className={ css.tdsub }>{ d.prize }</div>
        </td>
      </tr>
    }

    return <tr key={ idx } className={ className }>
      { _tdname }
      { _tdgame }
      <td>
        <div>{ d.category.zh }</div>
        <div className={ css.tdsub }>{ d.category.en } - <PlayTime time={ d.period } /></div>
      </td>
    </tr>
  })

  return <table className={ css.kksklist }>
    <thead><tr>
      <th className={ css.runner }>速通选手<div className={ css.sub }>Runner</div></th>
      <th className={ css.game }>游戏<div className={ css.sub }>Game</div></th>
      <th>速通分类<div className={ css.sub }>Category</div></th>
    </tr></thead>
    <tbody>
      { _trs }
    </tbody>
  </table>
}

export default class extends React.Component {
  render () {
    return (
      <div className={ css.kksk }>
        <PageHeader>
          <h1><span>K K S K</span></h1>
          <h2 className={ css.hh2 }>看看谁快！核聚变 2019 特别线下表演活动</h2>
        </PageHeader>
        <Container>
        <Row>
          <FlexBox flex={ 1 }>
            <h2>第一天 · DAY ONE · 5.11</h2>
            <div className={ css.tabc }>
              <Table data={ day1 }></Table>
            </div>
          </FlexBox>
        </Row>
        <Row>
          <FlexBox flex={ 1 }>
            <h2>第二天 · DAY TWO · 5.12</h2>
            <div className={ css.tabc }>
              <Table data={ day2 }></Table>
            </div>
          </FlexBox>
        </Row>
        </Container>
      </div>
    )
  }
}