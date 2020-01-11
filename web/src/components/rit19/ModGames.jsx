import React from 'react'
import css from './ModGames.scss'
import AbbrImage from '../../components/rit19/AbbrImage'
import RITStore from '../../ap-rit-records/RITStore'

export default class ModGames extends React.Component {
  constructor (props) {
    super(props)
    let store = new RITStore()
    store.loadSeasons()
    let season = store.getSeasonById(props.SeasonID)
    this.season = season
  }

  render () {
    if (!this.season.modGames) {
      return null
    }

    let _games = this.season.modGames.map(g => {
      let { abbr } = g
      // let params = 'resize,l_128'
      let params = 'resize,m_fill,h_90,w_90'
      return <div className={ css.game } key={ abbr }>
        <AbbrImage abbr={ abbr } params={ params } />
        <div className={ css.names }>
          <div className={ css.cnName }>{ g.cnName }</div>
          <div className={ css.enName }>{ g.enName }</div>
          <div className={ css.category }>{ g.category }</div>
        </div>
      </div>
    })

    return <div className={ css.ModGames }>
      { _games }
    </div>
  }
}