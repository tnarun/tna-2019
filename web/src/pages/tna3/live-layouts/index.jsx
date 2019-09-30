import React from 'react'
import css from './index.scss'

import WidthContainer from '../../../components/layouts/WidthContainer'
import { loadSchedueData } from '../../../data/tna3/data'

export default class liveLayouts extends React.Component {
  render () {
    return <div className={ css.liveLayouts }>
      <WidthContainer>
        <h3>TNA3 直播布局索引</h3>
        <div className={ css.layouts }>
          <div className={ css.header }>
            <div className={ css.h }>幕前准备</div>
            <div className={ css.h }>游戏</div>
            <div className={ css.h }>表演者</div>
            <div className={ css.h }>解说</div>
            <div className={ css.h }>布局</div>
          </div>
          <DAY data={ this.state.DAY1 } title='第一天 10-04' />
          <DAY data={ this.state.DAY2 } title='第二天 10-05'/>
          <DAY data={ this.state.DAY3 } title='第三天 10-06'/>
        </div>
      </WidthContainer>
    </div>
  }

  state = {
    DAY1: [],
    DAY2: [],
    DAY3: [],
  }

  componentDidMount () {
    let data = loadSchedueData()
    let { DAY1, DAY2, DAY3 } = data
    console.log({ DAY1, DAY2, DAY3 })
    this.setState({ DAY1, DAY2, DAY3 })
  }
}

class DAY extends React.Component {
  render () {
    let _shows = this.props.data.map((x, idx) => {
      let player = typeof(x.player) == 'string' ? x.player : x.player.join(' & ')

      return <div className={ css.show } key={ idx }>
        <div className={ `${ css.h } ${ css.layout }` }>
          <a href={ `/tna3/live-layouts/rest?id=${ x.id }` } target='_blank' rel='noopener noreferrer'>{ `/tna3/live-layouts/rest?id=${ x.id }` }</a>
        </div>
        <div className={ css.h }>{ x.cnName }</div>
        <div className={ css.h }>{ player }</div>
        <div className={ css.h }>{ x.guide }</div>
        <div className={ `${ css.h } ${ css.layout }` }>
          <a href={ `/tna3/live-layouts/${ x.layout }?id=${ x.id }` } target='_blank' rel='noopener noreferrer'>{ `${ x.layout }?id=${ x.id }` }</a>
        </div>
      </div>
    })

    return <div className={ css.DAY }>
      <div className={ css.title }>{ this.props.title }</div>
      {
        _shows
      }
    </div>
  }
}