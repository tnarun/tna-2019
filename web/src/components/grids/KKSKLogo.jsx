import React from 'react'

import css from './KKSKLogo.scss'

const LOGO_URL = '//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/kksk2019b.png'

export default class KKSKLogo extends React.Component {
  render () {
    return <div className={ css.KKSKLogo }>
      <div className={ css.img } style={{ backgroundImage: `url(${ LOGO_URL })` }}></div>
    </div>
  }
}