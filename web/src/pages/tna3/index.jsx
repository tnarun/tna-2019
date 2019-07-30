// title: TNA 3

import React from 'react'
import css from './index.scss'
// import PixelClip from '../../components/ui/PixelClip/PixelClip'

const baoming = 'https://shimo.im/forms/cBvAroZP88gjbyQd/fill'


const CoolLink = (props) => (
  <div className={ css.coollink }>
    <div className={ css.arrow }>
      <div className={ css.a1 }></div>
      <div className={ css.a2 }></div>
      <div className={ css.a3 }></div>
    </div>
    <a { ...props }>{ props.children }</a>
  </div>
)

export default class extends React.Component {
  render () {
    return <div className={ css.tna3 }>
      {/* <PixelClip /> */}

      <h1>TNA 3</h1>
      <h2>OCT. 04 2019</h2>
      <p>Runner 报名已经开始</p>

      <CoolLink href={ baoming } target='_blank' rel='noopener noreferrer'>报名入口</CoolLink>

      <p className={ css.formResult }>
        <a href='/shimo/form/cBvAroZP88gjbyQd'>目前报名情况</a>
      </p>
    </div>
  }
}