import React from 'react'
import css from './GameHeader.scss'

class Platform extends React.Component {
  render () {
    let { platform } = this.props
    return <span>{ platform.name }</span>
  }
}

export default class GameHeader extends React.Component {
  render () {
    let { game } = this.props
    let sd = game.speedrunData

    let _name = game.cnName ? (
      <h2 className={ css.name }>
        { game.cnName }
        <div className={ css.sub }>{ sd.names.international }</div>
      </h2>
    ) : <h2 className={ css.name }>{ sd.names.international }</h2>

    let _platforms = sd.platforms.data.map((platform, idx) => {
      return <span key={ platform.id } className={ css.platform }>
        <Platform platform={ platform } />
        <span className={ css.slash }>
          { idx < sd.platforms.data.length - 1 ? ' / ' : null }
        </span>
      </span>
    })

    return (
      <div className={ css.header }>
        <div className={ css.cover }>
          <img src={ sd.assets['cover-large'].uri } alt='cover' />
        </div>
        <div className={ css.baseinfo}>
          { _name }
          <div className={ css.speedrunlink }>
            from: <a href={ sd.weblink } target='_blank' rel='noopener noreferrer'>{ sd.weblink.replace('https://www.', '') }</a>
          </div>
          <div className={ css.released }>
            发行时间：{ sd['release-date'] }
          </div>
          <div className={ css.platforms }>
            游戏平台：{ _platforms }
          </div>
        </div>
      </div>
    )
  }
}