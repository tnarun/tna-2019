import React from 'react'
import css from './SeasonNav.scss'
import RITStore from '../../ap-rit-records/RITStore'
import classNames from 'classnames/bind'

export default class SeasonNav extends React.Component {
  render () {
    let { SeasonID, prefix, activityName } = this.props

    return <div className={ css.SeasonNav }>
      <div className={ css.navbar }>
        <h3>{ activityName } Seasons</h3>
        <Seasons ActiveSeasonID={ SeasonID } prefix={ prefix } />
      </div>
      <div className={ css.content }>
        { this.props.children }
      </div>
    </div>
  }
}

class Seasons extends React.Component {
  constructor (props) {
    super(props)
    this.store = new RITStore()
    this.store.loadSeasons()
  }

  render () {
    let { ActiveSeasonID, prefix } = this.props

    let _seasons = this.store.seasons.map((s, idx) => {
      let className = classNames.bind(css)({
        season: true,
        active: ActiveSeasonID === s.id
      })

      return <a href={ `${prefix}/season/${s.id}` } className={ className } key={ idx }>
        <span className={ css.name }>{ s.name }</span>
        <span className={ css.period }>{ s.from } 至 { s.to }</span>
      </a>
    })

    return <div className={ css.Seasons }>
      { _seasons }
    </div>
  }
}