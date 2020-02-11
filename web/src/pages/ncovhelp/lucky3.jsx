// title: TNA SP 抽奖

import React from 'react'
import css from './lucky.scss'
import classNames from 'classnames/bind'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

class Store {
  @observable currentIdx = 0
  
  @observable prizes = [
    { id: 1, name: '北通宙斯游戏手柄', person: null },
    { id: 2, name: '北通宙斯游戏手柄', person: null },
    { id: 3, name: '北通宙斯游戏手柄', person: null },
  ]
  
  @observable choices = [{"number":1,"person":"哀","point":1},{"number":2,"person":"骁狼丶","point":1},{"number":3,"person":"DemonD","point":1},{"number":4,"person":"薯片","point":1},{"number":5,"person":"魉般剿暨氮","point":1},{"number":6,"person":"Zinnia","point":1},{"number":7,"person":"puer","point":1},{"number":8,"person":"七叶","point":1},{"number":9,"person":"McGuffin","point":1},{"number":10,"person":"四方月流歌","point":1},{"number":11,"person":"爱发电用户_Gasg","point":3},{"number":12,"person":"Jxly","point":1},{"number":13,"person":"超级大叶子","point":6},{"number":14,"person":"蒜头","point":1},{"number":15,"person":"万象无极","point":1},{"number":16,"person":"Heilou","point":1},{"number":17,"person":"Ak1Ra_24","point":1},{"number":18,"person":"骁狼丶","point":1},{"number":19,"person":"Rainy","point":1},{"number":20,"person":"Miracle_","point":3},{"number":21,"person":"田源猫","point":1},{"number":22,"person":"涛","point":1},{"number":23,"person":"XBluestarX","point":1},{"number":24,"person":"洋气书生","point":1},{"number":25,"person":"阿明","point":1},{"number":26,"person":"saltfish","point":1},{"number":27,"person":"Heilou","point":1},{"number":28,"person":"骁狼丶","point":1},{"number":29,"person":"hunbi","point":1},{"number":30,"person":"离岛","point":1},{"number":31,"person":"L_Wanna","point":1},{"number":32,"person":"墨雨","point":1},{"number":33,"person":"爱发电用户_fDa4","point":1},{"number":34,"person":"无某某","point":1},{"number":35,"person":"Rainy","point":1},{"number":36,"person":"天魔baka","point":1},{"number":37,"person":"帕秋莉","point":1},{"number":38,"person":"纠结的草稿纸","point":1},{"number":39,"person":"AGS逆棺戟","point":3},{"number":40,"person":"凯特琳喜欢搞基","point":1},{"number":41,"person":"鸟乘肆pipi","point":12}]
}

const store = new Store()

const sum = (() => {
  let re = 0
  for (let c of store.choices) {
    re += c.point
  }
  return re
})()

export default class S2 extends React.Component {
  render () {
    return <div className={ css.S2 }>
      <Header />
      <div className={ css.main }>
        <Prizes store={ store } />
        <Persons store={ store } 
          startDraw={ evt => this.startDraw() } 
          stopDraw={ evt => this.stopDraw() }
        />
        <Choices store={ store } ref={ node => this.choices = node } />
      </div>
    </div>
  }

  startDraw () {
    this.choices.start()
  }

  stopDraw () {
    this.choices.stop()
  }
}

class Header extends React.Component {
  render () {
    return <div className={ css.Header }>
      <span>奖品</span><span>中奖人</span><span>抽奖转盘</span>
    </div>
  }
}

class Prizes extends React.Component {
  render () {
    let _prizes = this.props.store.prizes.map(x => {
      return <div key={ x.id } className={ css.prize }>{ x.name }</div>
    })

    return <div className={ css.Prizes }>
      { _prizes }
    </div>
  }
}

@observer
class Persons extends React.Component {
  render () {
    let _persons = this.props.store.prizes.map((x, idx) => {
      if (idx === store.currentIdx) {
        if (this.state.drawing) {
          return <div key={ x.id } className={ css.person }>
            <button onClick={ evt => this.stop() }>停止</button>
          </div>
        }

        return <div key={ x.id } className={ css.person }>
          <button onClick={ evt => this.start() }>开始</button>
        </div>
      }

      return <div key={ x.id } className={ css.person }>
        { x.person ? `${x.person.number}: ${x.person.person}` : null }
      </div>
    })

    return <div className={ css.Persons }>
      { _persons }
    </div>
  }

  state = {
    drawing: false
  }

  start () {
    this.props.startDraw()
    this.setState({ drawing: true })
  }

  stop () {
    this.props.stopDraw()
    this.setState({ drawing: false })
  }
}

class Choices extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      idx: -1
    }
  }

  render () {
    let grids = []
    this.props.store.choices.forEach(c => {
      for (let i = 0; i < c.point; i ++) {
        grids.push(c)
      }
    })

    let _grids = grids.map((g, idx) => {
      let className = classNames.bind(css)({
        grid: true,
        active: idx === this.state.idx,
        disabled: g.disabled
      })
      return <span className={ className } key={ idx }>
        { g.number }
      </span>
    })

    this.grids = grids

    return <div className={ css.Choices }>
      { _grids }
    </div>
  }

  start () {
    this.timer = setInterval(() => {
      let idx = this._choice()
      this.setState({ idx })
    }, 16)
  }

  _choice () {
    let idx = ~~(Math.random() * sum)
    let person = this.grids[idx]
    if (person.disabled) {
      return this._choice()
    }
    return idx
  }

  stop () {
    clearInterval(this.timer)
    let store = this.props.store
    let person = this.grids[this.state.idx]

    store.prizes[store.currentIdx].person = person
    store.currentIdx += 1

    store.choices.forEach(c => {
      if (c.number === person.number) {
        c.disabled = true
      }
    })

    console.log(person)
  }
}