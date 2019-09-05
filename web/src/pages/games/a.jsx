import React from 'react'

import css from './a.scss'
import PageHeader from '../../components/layouts/PageHeaderV2'
// import TNALogo from '../../components/grids/TNALogo'
import WidthContainer from '../../components/layouts/WidthContainer'

import classNames from 'classnames/bind'
import moment from 'moment'

import { getGameRecords } from '../../api-speedrun-v2'

export default () => {
  return (
    <div className={ css.games }>
      <PH />
      <WidthContainer>
        <Game abbr='sekiro' />
        <Game abbr='re2remake' />
        <Game abbr='smo' />
        <Game abbr='Darksiders_3' />
        <Game abbr='katana_zero' />
        <Game abbr='Shio' />
      </WidthContainer>
    </div>
  )
}

const PH = () => {
  return <div className={ css.hd }><PageHeader>
    <h1>TNA Speedrun Reactor</h1>
    {/* <h2>速通反应堆</h2> */}
  </PageHeader></div>
}

const formatDurarion = (str) => {
  let d = moment.duration(str)

  let h = d.hours()
  let m = d.minutes()
  let s = d.seconds()

  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s

  return [
    h ? `${ h }h` : '',
    m ? `${ m }m` : '',
    s ? `${ s }s` : '',
  ].join(' ')
}

class Game extends React.Component {
  render () {
    let _grs = this.state.gameRecords.map((x, idx) => {
      let sd = x.speedrunData
      let name = sd.category.data.name

      let runs = sd.runs
      let players = sd.players.data

      let _players = runs.map((y, idy) => {
        console.log(y)
        // let pname = y.run.players[0].id
        let pname = players[idy].names.international
        let time = y.run.times.primary

        let _time = formatDurarion(time)

        let c = classNames.bind(css)({
          rec: true, 
          first: idy === 0,
          second: idy === 1,
          third: idy === 2
        })

        return <div className={ c }>
          <div className={ css.player }>{ pname }</div>
          <div className={ css.time }>{ _time }</div>
        </div>
      })

      return <div className={ css.leaderboard } key={ idx }>
        <div className={ css.name }>{ name }</div>
        { _players }
      </div>
    })

    let logoSrc = `//tna-web.oss-ap-southeast-1.aliyuncs.com/speedrun-game-assets/${ this.props.abbr }/cover-256.png?x-oss-process=image/resize,m_fill,w_320,h_400,limit_0`

    let moreLink = `https://www.speedrun.com/${ this.props.abbr }`
  
    return <div className={ css.game }>
      <div className={ css.cover }>
        <img alt={ this.props.abbr } src={ logoSrc } />
      </div>
      <div className={ css.right }>
        <div className={ css.info }>
          <div className={ css.gamename }>{ this.state.gameName }</div>
          <div className={ css.more }>
            <a className={ css.morelink } href={ moreLink } target='_blank' rel='noopener noreferrer'>MORE</a>
          </div>
        </div>
        <div className={ css.lbs }>
          { _grs }
        </div>
      </div>
    </div>
  }

  state = {
    gameName: '',
    gameRecords: []
  }

  async componentDidMount () {
    let abbr = this.props.abbr
    let res = await getGameRecords({ abbr })
    console.log(res)

    let { game, gameRecords } = res.data

    let gameName = game.speedrunData.names.international
    gameRecords = gameRecords.splice(0, 3)

    this.setState({ gameName, gameRecords })
  }
}