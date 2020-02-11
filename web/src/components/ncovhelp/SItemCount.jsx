import React from 'react'
import css from './SItemCount.scss'

export default class SItemCount extends React.Component {
  render () {
    let { list, filter, max, label, plus } = this.props
    if (list.length === 0) {
      return null
    }

    let slist = list.filter(x => {
      return x.plan.name && x.plan.name.includes(filter)
    })
    let total = 0
    slist.forEach(x => total += ~~parseFloat(x.total_amount))
    if (plus) {
      total += plus
    }

    return <div className={ css.JSHCount }>
      <span>{ label }: <span className={ css.m }>¥{ total }{ max ? ` / ¥${max}` : '' }</span></span>
    </div>
  }
}