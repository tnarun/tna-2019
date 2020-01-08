import React from 'react'

import css from './TNALogo.scss'

const LOGO_URL = '//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/logo2019.png'

export default class TNALogo extends React.Component {
  render () {
    return <div className={ css.TNALogo }>
      <div className={ css.img } style={{ backgroundImage: `url(${ LOGO_URL })` }}></div>
    </div>
  }
}