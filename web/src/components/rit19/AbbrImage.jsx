import React from 'react'

export default class AbbrImage extends React.Component {
  constructor (props) {
    super(props)

    let { abbr, params } = props
    let _p = params || 'resize,l_320'

    let host0 = '//tna-web.oss-ap-southeast-1.aliyuncs.com/speedrun-game-assets'
    // let host1 = '//tna-upload.oss-cn-shanghai.aliyuncs.com/assets/mega-cover'
    let ossParams = `?x-oss-process=image/${ _p }`

    let imgURL = abbr ? `${ host0 }/${ abbr }/cover-256.png${ ossParams }` : null
    // img = x.megaAbbr ? `url(${ host1 }/${ megaAbbr }.png${ ossParams })` : img
    this.state = {
      imgURL
    }
  }

  render () {
    return <img src={ this.state.imgURL } alt={ this.props.abbr} />
  }
}