import React from 'react'
import css from './index.scss'

import WidthContainer from '../../../components/layouts/WidthContainer'
import ShowStore from '../../../api-ncovhelp/ShowStore'

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
    let store = new ShowStore()
    await store.load()
    this.setState({ store })
  }
}

class Layouts extends React.Component {
  render () {
    let { store } = this.props
    let day1 = store.days[0]
    let day2 = store.days[1]

    return <div className={ css.Layouts }>
      <Day data={ day1 } />
      <Day data={ day2 } />
    </div>
  }
}

// class Header extends React.Component {
//   render () {
//     return <div className={ css.Header }>
//     </div>
//   }
// }

class Day extends React.Component {
  render () {
    let { data } = this.props
    let { shows } = data
    let _shows = shows.map((x, idx) => {
      return <div className={ css.show }>
        <div className={ css.name }>{ x.name }</div>
        <div className={ css.layouts }>
          {/* <span><a href={ `/ncovhelp/live-layouts/l-4-3-1P` } target='_blank' rel='noopener noreferrer'>幕间</a></span> */}
          <span><a href={ `/ncovhelp/live-layouts/l-4-3-1P?id=${x.id}` } target='_blank' rel='noopener noreferrer'>4:3 1P</a></span>
          <span><a href={ `/ncovhelp/live-layouts/l-16-9-1P?id=${x.id}` } target='_blank' rel='noopener noreferrer'>16:9 1P</a></span>
          {/* <span><a href={ `/ncovhelp/live-layouts/l-4-3-1P` } target='_blank' rel='noopener noreferrer'>4:3 2P</a></span>
          <span><a href={ `/ncovhelp/live-layouts/l-4-3-1P` } target='_blank' rel='noopener noreferrer'>16:9 2P</a></span> */}
        </div>
      </div>
    })

    return <div className={ css.Day }>
      { _shows }
    </div>
  }
}