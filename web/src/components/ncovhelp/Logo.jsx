import React from 'react'
import css from './Logo.scss'

class Logo extends React.Component {
  render () {
    return <div className={ css.Logo }>
      <h2>TNA Special</h2>
      <img src='https://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/tnasplogo.png' alt='logo' />
    </div>
  }
}

class AFDLogo extends React.Component {
  render () {
    return <div className={ css.AFDLogo }>
      <h2>特别鸣谢：爱发电</h2>
      <img src='https://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/afdlogo.png' alt='logo' />
    </div>
  }
}

export {
  Logo, AFDLogo
}