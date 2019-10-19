// title: 鸣谢

import React from 'react'

import css from './live.scss'

import LiveBG from '../../../components/kksk2/LiveBG'
import LayoutLOGO from '../../../components/kksk2/LayoutLogoKKSK2'

const urls = [
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/ad-kksk.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/ad-gcores.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/ad-huya.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/ad-ave.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/ad-benq.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/ad-omen.png'
]

export default class extends React.Component {
  render () {
    return <div className={ css.live }>
      <div className={ css['c-thank'] }>
        <LiveBG />

        <div className={ css.logo }>
          <LayoutLOGO notext />
        </div>
        <div className={ css.gtitle }>
          KKSK2 看看谁快·杭州站
        </div>

        <div className={ css.battrs }>
          <div className={ css.logos1 }>
            <div></div>
            <Logo url={ urls[1] } text='主办方：机核网' />
            <Logo url={ urls[2] } text='直播平台：虎牙直播' />
          </div>
          <div className={ css.logos2 }>
            <Logo url={ urls[3] } text='采集设备支持：圆刚游戏采集卡' />
            <Logo url={ urls[4] } text='显示设备支持：BenQ Gaming' />
            <Logo url={ urls[5] } text='游戏设备支持：HP 暗影精灵' />
          </div>
        </div>
      </div>
    </div>
  }
}

class Logo extends React.Component {
  render () {
    let { url } = this.props
    return <div className={ css.Logo }>
      <div className={ css.i } style={{ backgroundImage: `url(${url})`}}></div>
      <div className={ css.t }>{ this.props.text }</div>
    </div>
  }
}