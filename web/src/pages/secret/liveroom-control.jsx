import React from 'react'
import css from './liveroom-control.scss'
import liveAPI from '../../api-liveroom/liveAPI'

class Living extends React.Component {
  async stopWatch (biliRoom) {
    let res = await liveAPI.stopWatch({ biliRoom })
    console.log(res)
    window.location.reload()
  }

  render () {
    let { livingData } = this.props

    let trs = livingData ? livingData.map((x, idx) => {
      return <tr key={ idx }>
        <td>{ x.data.from }</td>
        <td>{ x.data.to }</td>
        <td>{ x.pid }</td>
        <td><button onClick={ evt => this.stopWatch(x.data.to) }>停止转播</button></td>
      </tr>
    }) : null
  
  
    return <table className={ css.table }>
      <thead><tr><th>转播源</th><th>转播到</th><th>进程编号</th><th>操作</th></tr></thead>
      <tbody>
        { trs }
      </tbody>
    </table>
  }
}

export default class extends React.Component {
  state = {
    twitchId: '',
    biliRoom: '',
    cookie: '',
    hello: 'CONNECT'
  }

  async componentWillMount () {
    let twitchId = window.localStorage.getItem('live.twitchId') || ''
    let biliRoom = window.localStorage.getItem('live.biliRoom') || ''
    let cookie = window.localStorage.getItem('live.cookie') || ''
    this.setState({ twitchId, biliRoom, cookie })

    try {
      let res = await liveAPI.hello()
      if (res) {
        this.setState({ hello: 'OK' })
      } else {
        this.setState({ hello: 'ERROR' })
      }
    } catch (e) {
      console.log(11111111111)
      this.setState({ hello: 'ERROR' })
    }
  }

  async componentDidMount () {
    let res1 = await liveAPI.getLiving()
    let livingData = res1.res
    console.log(livingData)
    this.setState({ livingData })
  }

  async startWatch () {
    let { twitchId, biliRoom, cookie } = this.state
    let res = await liveAPI.startWatch({ twitchId, biliRoom, cookie })
    console.log(res)
    window.location.reload()
  }

  isValid () {
    let { twitchId, biliRoom, cookie, livingData } = this.state
    if (!(twitchId && biliRoom && cookie)) {
      return '表单每一项都要填写'
    }

    if (livingData) {
      let rooms = livingData.map(x => x.data.to)
      if (rooms.includes(biliRoom + '')) {
        return `${ biliRoom } 直播间已经在转播了`
      }
    }
  }

  render () {
    let { hello } = this.state

    if (hello === 'CONNECT') {
      return <div className={ css.liveroom }>正在连接服务器，please wait ...</div>
    }

    if (hello === 'ERROR') {
      return <div className={ css.liveroom }>服务器连接失败</div>
    }

    let { twitchId, biliRoom, cookie } = this.state

    let error = this.isValid()

    return <div className={ css.liveroom }>
      <h1>TNA 简单转播控制台</h1>
      <div className={ css.form }>
        <div className={ css.field }>
          <label>Twitch 转播源</label>
          <input placeholder='Twitch ID' value={ twitchId } 
            onChange={ evt => { 
              let { value } = evt.target
              this.setState({ twitchId: value }) 
              window.localStorage.setItem('live.twitchId', value)
            } }/>
        </div>
        <div className={ css.field }>
          <label>Bilibili 直播间号</label>
          <input placeholder='直播间号' value={ biliRoom }
            onChange={ evt => {
              let { value } = evt.target
              this.setState({ biliRoom: value }) 
              window.localStorage.setItem('live.biliRoom', value)
            } }/>
        </div>
        <div className={ css.field }>
          <label>paste your bilibili cookie</label>
          <div className={ css.desc }>
            visit: https://api.live.bilibili.com/live_stream/v1/StreamList/get_stream_by_roomId
          </div>
          <textarea placeholder='cookie' rows='12' value={ cookie }
            onChange={ evt => {
              let { value } = evt.target
              this.setState({ cookie: value }) 
              window.localStorage.setItem('live.cookie', value)
            } }/>
        </div>

        {
          error ? (
            <button className={ css.livebtn } disabled>{ error }</button>
          ) : (
            <button className={ css.livebtn } onClick={ evt => this.startWatch() }>开始转播</button>
          )
        }
        
        <Living livingData={ this.state.livingData } />
      </div>
    </div>
  }
}