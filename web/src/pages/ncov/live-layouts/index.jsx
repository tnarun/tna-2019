import React from 'react'
import css from './index.scss'

import WidthContainer from '../../../components/layouts/WidthContainer'
import LiveLayoutStore from './LiveLayoutStore'

export default class liveLayouts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      store: null
    }
  }

  render () {
    return <div className={ css.liveLayouts }>
      <WidthContainer>
        <h3>nCoV 新冠疫情期间直播活动布局索引</h3>
        {
          this.state.store ? <Layouts store={ this.state.store } /> : null
        }
      </WidthContainer>
    </div>
  }

  async componentDidMount () {
    let store = new LiveLayoutStore()
    await store.loadLayouts()
    this.setState({ store })
  }
}

class Layouts extends React.Component {
  render () {
    let { layouts } = this.props.store
    let _items = layouts.map((layout, idx) => {
      return <LayoutItem layout={ layout } key={ idx } />
    })

    return <div className={ css.Layouts }>
      <Header />
      { _items }
    </div>
  }
}

class Header extends React.Component {
  render () {
    return <div className={ css.Header }>
      <span>节目或类目名称</span><span>布局链接</span>
    </div>
  }
}

class LayoutItem extends React.Component {
  render () {
    let { layout } = this.props
    let link = `/ncov/live-layouts/${layout.base}`
    return <div className={ css.LayoutItem }>
      <span>{ layout.name }</span>
      <span>
        <a href={ link } target='_blank' rel='noopener noreferrer'>{ link }</a>
      </span>
    </div>
  }
}