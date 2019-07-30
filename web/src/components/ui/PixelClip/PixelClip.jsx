import React from 'react'
import yaml from 'js-yaml'
import yamlData from './undertale-font.yaml'

import css from './PixelClip.scss'

const loadData = () => {
  let s = yamlData.split('base64,')[1]
  return yaml.safeLoad(new Buffer(s, 'base64'))
}

export default class extends React.Component {
  render () {
    let _clipT = this.state.data.T.clip.split('\n').map((line, idx) => {
      return <PixelRow chars={ line } key={ idx } />
    })

    let _clipN = this.state.data.N.clip.split('\n').map((line, idx) => {
      return <PixelRow chars={ line } key={ idx } />
    })

    let _clipA = this.state.data.A.clip.split('\n').map((line, idx) => {
      return <PixelRow chars={ line } key={ idx } />
    })

    let _clip3 = this.state.data.Three.clip.split('\n').map((line, idx) => {
      return <PixelRow chars={ line } key={ idx } />
    })

    return <>
      <div className={ css.PixelClip }>{ _clipT }</div>
      <div className={ css.PixelClip }>{ _clipN }</div>
      <div className={ css.PixelClip }>{ _clipA }</div>
      <div className={ css.PixelClip }>{ _clip3 }</div>
    </>
  }

  state = {
    d: null
  }

  componentWillMount () {
    let data = loadData()
    console.log({ data })
    this.setState({ data })
  }
}

class PixelRow extends React.Component {
  render () {
    let { chars } = this.props

    let _pixels = chars.split('').map((c, idx) => {
      return <Pixel char={ c } key={ idx } />
    })

    return <div className={ css.PixelRow }>{ _pixels }</div>
  }
}

class Pixel extends React.Component {
  render () {
    let { char } = this.props

    return (char === ' ' || char === '_') ? 
    <div className={ css.emptyPixel }></div> : 
    <div className={ css.Pixel }></div>
  }
}