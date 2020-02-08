import React from 'react'
import css from './LayoutArea.scss'

export default class Area extends React.Component {
  render () {
    let style = {
      left: `${this.props.d.l}px`,
      top: `${this.props.d.t}px`,
      width: `${this.props.d.w}px`,
      height: `${this.props.d.h}px`
    }

    let tip = this.props.tip

    return <div className={ `${ css.Area } ${ this.props.className }` } style={ style }>
      {
        tip ? <div className={ css.areaInner }>
          { this.props.d.w } × { this.props.d.h }
        </div> : null
      }
      {
        this.props.children
      }
    </div>
  }
}