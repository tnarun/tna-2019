import React from 'react'
import css from './countdown.scss'
import moment from 'moment'

export default class extends React.Component {
  state = {
    cdstr: ''
  }

  componentDidMount () {
    this.cd = setInterval(() => {
      let deadline = moment('2019-05-12 13:00')
      let now = moment()
      let d = moment.duration(deadline.diff(now))
      console.log(d > 0)
      let str = d > 0 ? moment(d.asMilliseconds()).add(-8, 'hours').format('HH:mm:ss') : '00:00'
      this.setState({ cdstr: str })
    }, 100);
  }

  componentWillUnmount () {
    clearInterval(this.cd)
  }

  render () {
    let { cdstr } = this.state
    return <div className={ css.countdown }>
      <div className={ css.cd }>{ cdstr }</div>
    </div>
  }
}