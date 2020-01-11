import React from 'react'
import css from './Prizes.scss'
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
    if (!this.season.prizes) {
      return null
    }

    let _prizes = this.season.prizes.map(p => {
      let { abbr } = p
      // let params = 'resize,l_128'
      let imgURL = `${p.oss}?x-oss-process=image/resize,m_fill,h_90,w_90`
      return <div className={ css.prize } key={ abbr }>
        <img src={ imgURL } alt={ abbr } />
        <div className={ css.name }>{ p.name }</div>
        <div className={ css.amount }>{ p.amount }</div>
      </div>
    })

    return <div className={ css.Prizes }>
      { _prizes }
    </div>
  }
}