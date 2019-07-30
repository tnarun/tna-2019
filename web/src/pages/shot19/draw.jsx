import React from 'react'
import css from './draw.scss'

import data from '../../assets/submit-data/draw-shot19-4-6.json'

import classNames from 'classnames/bind'

export default class extends React.Component {
  render () {
    return <div className={ css.draw }>
      <h2>SHOT19 4-6 月抽奖</h2>
      <div className={ css.desc}>规则：每有一次抽奖机会，名字就会出现在抽奖面板上一次；:D</div>
      <Roller />
    </div>
  }
}

class Roller extends React.Component {
  render () {
    let _lines = this.state.names.map((name, idx) => {
      let className = classNames.bind(css)({
        line: true,
        aim: idx === this.state.drawIdx
      }) 

      return <div className={ className } key={ idx }>{name}</div>
    })

    return <><div className={ css.roller }>
      { _lines }
    </div>
    {
      this.state.rua ? <button className={ css.rua } onClick={ evt => this.stop() }>I GET DAOLE</button> : 
      <button className={ css.rua } onClick={ evt => this.rua() }>let's RUA!</button>
    }
    </>
  }

  state = {
    names: [],
    drawIdx: 0,
    rua: false
  }

  componentDidMount () {
    console.log({ data })
    let names = []
    for (let d of data) {
      let name = d.runner
      let c = ~~d.chance
      console.log(d)
      for (let i = 0; i < c; i ++) {
        names.push(name)
      }
    }
    console.log(names)
    this.setState({ names })
  }

  rua () {
    this.timer = setInterval(() => {
      let drawIdx = ~~(Math.random() * this.state.names.length)
      this.setState({ drawIdx })
    }, 16);
    this.setState({ rua: true })
  }

  stop () {
    clearInterval(this.timer)
    this.setState({ rua: false })
  }
}