import React from 'react'

import css from './layouts.scss'

export default class LayoutGameCover extends React.Component {
  render () {
    let { data } = this.props
    let x = data

    let host0 = '//tna-web.oss-ap-southeast-1.aliyuncs.com/speedrun-game-assets'
    let host1 = '//tna-upload.oss-cn-shanghai.aliyuncs.com/assets/mega-cover'
    let ossParams = '?x-oss-process=image/resize,l_320'

    let img = x.abbr ? `url(${ host0 }/${ x.abbr }/cover-256.png${ ossParams })` : null
    img = x.megaAbbr ? `url(${ host1 }/${ x.megaAbbr }.png${ ossParams })` : img

    return <div className={ css.LayoutGameCover }>
      <div className={ css.img } style={{ backgroundImage: img }}></div>
    </div>
  }
}