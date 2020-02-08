import React from 'react'

import css from './TNALogo.scss'

const LOGO_URL = '//tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/tnasplogo.png'

export default class TNASPLogo extends React.Component {
  render () {
    return <div className={ css.TNALogo }>
      <div className={ css.img } style={{ backgroundImage: `url(${ LOGO_URL })` }}></div>
    </div>
  }
}