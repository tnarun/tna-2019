import React from 'react'

import css from './LiveBG.scss'

export default class LiveBG extends React.Component {
  render () {
    return  <div className={ css.LiveBG }>
      <video autoPlay={ true } muted={ true } loop={ true } playsInline={ true }>
        <source src='//alioss.gcores.com/page_resources/fusion2019_lite/videos/hangzhou.mp4' type='video/mp4' />
      </video>
    </div>
  }
}