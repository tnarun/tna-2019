import React from 'react'
import css from './huya.scss'

export default class extends React.Component {
  render () {
    let wordMax = this.state.commonData[0] ? this.state.commonData[0][1] : 0
    let _wordList = this.state.commonData.map((x, idx) => {
      let percent = (~~x[1] / ~~wordMax) * 100

      return <div className={ css.word } key={ idx }>
        <div className={ css.w }>{ x[0] } ({ x[1] })</div>
        <div className={ css.bar }
          style={ { width: `${percent}%`} }
        ></div>
      </div>
    })

    let userMax = this.state.userData[0] ? this.state.userData[0][1] : 0
    let _userList = this.state.userData.map((x, idx) => {
      let percent = (~~x[1] / ~~userMax) * 100

      return <div className={ css.user } key={ idx }>
        <div className={ css.w }>{ x[0] } ({ x[1] })</div>
        <div className={ css.bar }
          style={ { width: `${percent}%`} }
        ></div>
      </div>
    })

    return <div className={ css.huyaWords }>
      <h2>114514 过去一周弹幕统计</h2>
      <div className={ css.tongji }>
        <div className={ css.tj}>
          <h3>弹幕关键词计数 (TOP 50)</h3>
          <div className={ css.list }>
            { _wordList }
          </div>
        </div>
        <div className={ css.tj}>
          <h3>活跃水友 (TOP 50)</h3>
          <div className={ css.list }>
            { _userList }
          </div>
        </div>
      </div>

    </div>
  }

  state = {
    commonData: [],
    userData: []
  }

  async componentDidMount () {
    this.timer = setInterval(async () => {
      await this.refresh()
    }, 30000);
    await this.refresh()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  async refresh () {
    await this.refreshWords()
    await this.refreshUsers()
  }

  async refreshWords () {
    let path = `https://tna-web.oss-ap-southeast-1.aliyuncs.com/huya-danmu/114514.commonStatArr.json?rand=${ new Date().getTime() }`

    let res = await fetch(path)
    let data = await res.json()
    data = data.slice(0, 50)

    this.setState({ commonData: data })
  }

  async refreshUsers () {
    let path = `https://tna-web.oss-ap-southeast-1.aliyuncs.com/huya-danmu/114514.userStatArr.json?rand=${ new Date().getTime() }`

    let res = await fetch(path)
    let data = await res.json()
    data = data.slice(0, 50)

    this.setState({ userData: data })
  }
}