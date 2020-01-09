import runSampleData from './run-sample.json'
import $runs from './runs'
import moment from 'moment'
import SpeedrunPlayTime from '../components/games/SpeedrunPlayTime'

class RunStore {
  constructor ({ id }) {
    this.id = id    
  }

  async loadSample () {
    this.data = runSampleData.data
    return this.data
  }

  async load () {
    this.data = await $runs.getOne({ id: this.id })
    return this.data
  }

  get gameName () {
    return this.data.runData.game.data.names.international
  }

  get categoryName () {
    return this.data.runData.category.data.name
  }

  get videoURL () {
    return this.data.runData.videos.links[0].uri
  }

  get submitTime () {
    let m = moment(this.data.runData.submitted)
    return m.format('YYYY-MM-DD HH:mm:ss')
  }

  get verifyTime () {
    let m = moment(this.data.runData.status['verify-date'])
    return m.format('YYYY-MM-DD HH:mm:ss')
  }

  get leaderboardLength () {
    return this.data.leaderboardData.runs.length
  }

  get currentRunPlace () {
    let current = this.data.leaderboardData.runs.filter(r => {
      return r.run.id === this.id
    })[0]
    if (current) {
      return current.place
    }
    return 'n/a'
  }

  get currentRunVars () {
    return this.data.currentRunVars
  }

  get runnerName () {
    let players = this.data.runData.players.data
    return players.map(p => p.names.international)
  }

  get playTime () {
    let run = this.data.runData
    return <SpeedrunPlayTime time={ run.times } />
  }
}

export default RunStore