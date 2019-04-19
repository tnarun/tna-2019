import React from 'react'
import gradientColor from 'gradient-color'
import css from './SpeedrunPlayerName.scss'

export default class extends React.Component {
  render () {
    let { player } = this.props
    let name = player.names ? player.names.international : player.name
    let nameStyle = player['name-style']
  
    if (!nameStyle) {
      return <span className={ css.player }>{ name }</span>
    }
  
    let { style } = nameStyle
    if (style === 'gradient') {
      let colorFrom = nameStyle['color-from'].dark
      let colorTo = nameStyle['color-to'].dark
  
      if (colorFrom === colorTo) {
        return <span className={ css.player } style={{ color: colorFrom }}>{ name }</span>
      }
  
      let arr = name.split('')
      let colors
      if (arr.length === 1) {
        colors = [ colorFrom ]
      } else if (arr.length === 2) {
        colors = [ colorFrom, colorTo ]
      } else {
        colors = gradientColor([ colorFrom, colorTo ], arr.length)
      }
    
      return (
        <span className={ css.player }>
        {
          arr.map((x, idx) => <span key={ idx } style={{ color: colors[idx] }}>{x}</span>)
        }
        </span>
      )
    }
  
    if (style === 'solid') {
      let color = nameStyle.color.dark
      return <span className={ css.player } style={{ color }}>{ name }</span>
    }
  
    return <span className={ css.player }>{ name }</span>
  }
}