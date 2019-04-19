import leaderboardAPI from '../../api-client/leaderboardAPI'
import css from './Leaderboard.scss'
import React from 'react'
import moment from 'moment'
import PacmanLoading from '../../components/utils/PacmanLoading'
import SpeedrunPlayerName from '../../components/games/SpeedrunPlayerName'
import SpeedrunPlayTime from '../../components/games/SpeedrunPlayTime'

const Locations = ({ run, players }) => {
  let _locations = run.players.map((p, idx) => {
    let player = players.filter(x => x.id === p.id)[0]
    
    return <div className={ css.location } key={ idx }>
      { player.location && player.location.country ?
        player.location.country.names.international : <span className={ css.unknown }>--</span> }
    </div>
  })

  return (
    <div className={ css.locations }>{ _locations }</div>
  )
}

const Players = ({ run, players }) => {
  let _players = run.players.map((p, idx) => {
    if (p.rel === 'guest') {
      return <div key={ idx } className={ css.player }>{ p.name }</div>
    }

    let player = players.filter(x => x.id === p.id)[0]
    return <SpeedrunPlayerName key={ idx } player={ player } />
  })

  return <div className={ css.players }>{ _players }</div>
}

const Platform = ({ run, platforms }) => {
  try {
    let _platform = platforms.filter(p => p.id === run.system.platform)[0]
  
    return <div className={ css.platform }>{ _platform.name }</div>
  } catch (e) {
    console.log('run 平台获取失败', { run, platforms })
    return <div className={ css.platform }></div>
  }
}

export default class extends React.Component {
  state = {
    leaderboard: null
  }

  async componentWillMount () {
    let { gameId, categoryId, vars } = this.props
    let str = JSON.stringify({ gameId, categoryId, vars })
    this.setState({ str })

    let data = await leaderboardAPI.get({ gameId, categoryId, vars })
    let { leaderboard } = data
    this.setState({ leaderboard })
  }

  render () {
    // let { gameId, categoryId, vars } = this.props
    let { leaderboard } = this.state
    console.log({ leaderboard })

    // loading
    if (!leaderboard) {
      return <div className={ css.loading }>
        <div className={ css.debug }>{ this.state.str }</div>
        <PacmanLoading />
      </div>
    }

    console.log({ timing: leaderboard.speedrunData.timing })
 
    let { speedrunData } = leaderboard

    // 表格增补字段
    let extraFields = speedrunData.variables.data
      .filter(x => x.category === null && x['is-subcategory'] === false)
    console.log({ extraFields })

    let _runs = speedrunData.runs.map(x => {
      let { run, place } = x
      let runVarValues = run.values

      let _extraTds = extraFields.map(f => {
        let variableKey = f.id

        // 速通记录变量缺失
        if (!runVarValues) {
          console.log('no runVarValues: 速通记录变量缺失', x)
          return <td key={variableKey}></td>
        }

        let runVarValue = runVarValues[variableKey]
        if (!runVarValue) {
          console.log('no runVarValue: 速通记录变量中没有该字段', { variableKey })
          return <td key={variableKey}></td>
        }

        let variableObj = f.values.values[runVarValue]
        let variableLabel = variableObj ? variableObj.label : ''

        return <td key={variableKey}>{ variableLabel }</td>
      })

      return (
        <tr className={ css.run } key={ run.id }>
          <td className={ css.tdplace }>{ place }</td>
          <td><Players run={ run } players={ speedrunData.players.data } /></td>
          <td><Locations run={ run } players={ speedrunData.players.data } /></td>
          <td><SpeedrunPlayTime time={ run.times } /></td>
          { _extraTds }
          <td><Platform run={ run } platforms={ speedrunData.platforms.data } /></td>
          <td className={ css.tdsubmitted }>{ moment(run.submitted).locale('zh-cn').fromNow() }</td>
        </tr>
      )
    })

    if (_runs.length === 0) {
      return (
        <div className={ css.leaderboard }>
          这个规则分类下目前没有成绩
        </div>
      )
    }

    return (
      <div className={ css.leaderboard }>
        <h3>此排行榜上共有 { _runs.length } 名玩家</h3>
        <table className={ css.table }>
          <thead><tr>
            <th>排名</th><th>玩家</th>
            <th>国家或地区</th><th>时长</th>
            {
              extraFields.map(f => <th key={f.id}>{f.name}</th>)
            }
            <th>平台</th><th>提交时间</th>
            {/* <th>speedrun 链接</th> */}
          </tr></thead>
          <tbody>
            { _runs }
          </tbody>
        </table>
      </div>
    )
  }
}