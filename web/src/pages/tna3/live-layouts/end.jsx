// title: 4:3 单人

import React from 'react'

import css from './live.scss'

import LayoutTNA from '../../../components/tna3/LayoutTNA'

const urls = [
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-10-02/ads/ad-beitong.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-10-02/ads/ad-benq.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-10-02/ads/ad-afd.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-10-02/ads/ad-cow.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-10-02/ads/ad-destiny2.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-10-02/ads/ad-vg.png'
]

export default class extends React.Component {
  render () {
    let { type } = this.props.location.query

    let _imgs = urls.map((imgurl, idx) => {
      return <div 
        key={ idx }
        className={ css.cover } style={{ backgroundImage: `url(${imgurl})`}}
      ></div>
    })

    return <div className={ css.live }>
      <div className={ css['c-end'] }>
        <div className={ css.gtitle }>
          {
            type === 'end' ? <h1>TNA3 本届活动已结束，谢谢大家！</h1> : <h1>TNA3 今天的活动已结束，明天也精彩！</h1>
          }
        </div>
        <div className={ css.logo }><LayoutTNA type='large' /></div>
        <div className={ css.ads }>
          <div className={ css.adlogos }>
            { _imgs }
          </div>
        </div>
      </div>
    </div>
  }
}