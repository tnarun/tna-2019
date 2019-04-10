import React from 'react'
import css from './FlexBox.scss'

class Container extends React.Component {
  render () {
    return (
      <div className={ css.container }>{ this.props.children }</div>
    )
  }
}

class Row extends React.Component {
  render () {
    return (
      <div className={ css.row }>{ this.props.children }</div>
    )
  }
}

class FlexBox extends React.Component {
  render () {
    return (
      <div 
        className={ css.flexbox }
        style={{ flex: this.props.flex }}
      >{ this.props.children }</div>
    )
  }
}

class IBox extends React.Component {
  render () {
    return (
      <div className={ css.ibox }>{ this.props.children }</div>
    )
  }
}

export { Container, Row, FlexBox, IBox }