import React from 'react'

import css from './layouts.scss'

import { estTimeCN } from '../../utils/speedrunTime'

export default class LayoutGameName extends React.Component {
  render () {
    let { data, size } = this.props

    return <div className={ `${css.LayoutGameName} ${css[this.props.type]}` }>
      <div className={ `${css.name} ${css[size]}` }>{ data.cnName }</div>
      <div className={ css.category }>{ data.category }</div>
      {
        <div className={ css.info }>
          {
            data.info ? <>
              <div className={ css.ii }>{ data.info.platform }</div>
              <div className={ css.ii }>{ data.info.year }</div>
              <div className={ css.ii }>{ estTimeCN(data.est) }</div>
            </> : <div className={ `${css.ii} ${css.w}` }>{ estTimeCN(data.est) }</div>
          }
        </div>
      }
    </div>
  }
}