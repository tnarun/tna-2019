// title: KKSK 2019

import React from 'react'
import css from './show.scss'
import { Container, Row, FlexBox } from '../../components/FlexBox'
// import moment from 'moment'
import { day1, day2, images } from '../../data/kksk-show.js'
import Iconfont from '@/components/Iconfont'
import QRCode from 'qrcode'

// const numberZero = (n) => {
//   return n >= 10 ? n : `0${n}`
// }

class PlayTime extends React.Component {
  render () {
    // let { time } = this.props
    // let duration = moment.duration(time)
  
    // let h = duration.hours()
    // let m = duration.minutes()
  
    // let _h = h > 0 ? `${h} 小时` : ''
    // let _m = m > 0 ? `${numberZero(m)} 分钟` : ''
    // let str = [_h, _m].join(' ')
  
    // return (
    //   // <span className={ css.playtime }><Iconfont name='clock' /> { str }</span>
    //   null
    // )
    return null
  }
}

const Table = ({ data }) => {
  let _trs = data.map((d, idx) => {
    if (d.prologue) {
      return <tr key={ idx } className={ css.prologue }>
        <td colSpan='3'>
          <div>{ d.prologue }</div>
          <div className={ css.tdsub }><Iconfont name='clock' /> { d.start } - { d.end }</div>
        </td>
      </tr>
    }

    let _name = d.special ? d.special : 
      d.runners.length === 2 ? <span className={ css.vs0 }>{ d.runners[0] } <Iconfont name='vs' /> { d.runners[1] }</span> : <span>{ d.runners[0] }</span>

    let _tdname = (
      <td>
        <div>{ _name }</div>
        <div className={ css.tdsub }><Iconfont name='clock' /> { d.start } - { d.end }</div>
        {
          // d.special ? <div className={ css.tdsub }>群众参与环节</div> : null
        }
      </td>
    )
    let _tdgame = (
      <td className={ css.game }>
        <div className={ css.cover } style={{ backgroundImage: `url(${ images[d.abbr] })` }}></div>
        <a href={ `/games/${ d.abbr }${ d.c ? `#${ d.c }` : ''}` } target='_blank' rel="noopener noreferrer">
          <div className={ css.zh }>{ d.game.zh }</div>
          {/* <div className={ css.tdsub }>{ d.game.en }</div> */}
          {
            d.talker ? <div className={ css.tdsub }>{ d.talker }解说</div> : null
          }
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
          {/* <div className={ css.tdsub }><PlayTime time={ d.period } /></div> */}
        </td>
      </tr>
    }

    return <tr key={ idx } className={ className }>
      { _tdname }
      { _tdgame }
      <td>
        <div>{ d.category.zh }</div>
        <div className={ css.tdsub }>{ d.category.en }</div>
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
  state = {
    qrurl: null
  }

  async componentDidMount () {
    let url = await QRCode.toDataURL('https://tnarun.com/kksk/', {
      margin: 1,
      width: 133
    })
    this.setState({ qrurl: url })
  }

  render () {
    return (
      <div className={ css.kksk }>
        <Container>
        <Row>
          <FlexBox flex={ 1 }>
            <h2>第一天 · DAY ONE · 5.11</h2>
            <div className={ css.tabc }>
              <Table data={ day1 }></Table>
            </div>
            {
              this.state.qrurl ? <div className={ css.qrcode }>
                <div className={ css.tip }>
                  手机扫描二维码<br/>
                  访问节目单
                </div>
                <img src={ this.state.qrurl } alt='qr' />
              </div> : null
            }
            
          </FlexBox>

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