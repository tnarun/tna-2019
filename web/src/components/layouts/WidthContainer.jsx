import React from 'react'

import css from './WidthContainer.scss'

export default class WidthContainer extends React.Component {
  render () {
    return <div className={ css.WidthContainer }>
      <div className={ css.cinner }>
        { this.props.children }
      </div>
    </div>
  }
}