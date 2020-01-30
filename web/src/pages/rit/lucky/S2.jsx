// title: RIT & SHOT 第二期抽奖

import React from 'react'
import css from './S2.scss'
import classNames from 'classnames/bind'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

class Store {
  @observable currentIdx = 0
  
  @observable prizes = [
    { id: 1, name: '北通蝙蝠2游戏手柄', person: null },
    { id: 2, name: '北通蝙蝠2游戏手柄', person: null },
    { id: 3, name: '北通蝙蝠2游戏手柄', person: null },
    { id: 4, name: '北通蝙蝠2游戏手柄', person: null },
    { id: 5, name: '北通蝙蝠2游戏手柄', person: null },
    { id: 6, name: '北通蝙蝠2游戏手柄', person: null },
    { id: 7, name: '北通蝙蝠2游戏手柄', person: null },

    { id: 8, name: '北通斯巴达2游戏手柄', person: null },
    { id: 9, name: '北通斯巴达2游戏手柄', person: null },
    { id: 10, name: '北通斯巴达2游戏手柄', person: null },
    { id: 11, name: '北通斯巴达2游戏手柄', person: null },
    { id: 12, name: '北通斯巴达2游戏手柄', person: null },
  ]
  
  @observable choices = [
    {"number":1,"person":"Pegaiur","point":4},{"number":2,"person":"Ak1Ra_24","point":5},{"number":3,"person":"Quasimodo","point":3},{"number":4,"person":"Mazirika","point":3},{"number":5,"person":"DoNotForgetMe","point":5},{"number":6,"person":"BlackCYC12","point":3},{"number":7,"person":"mrrsea","point":3},{"number":8,"person":"Hillman","point":4},
    {"number":9,"person":"Timeripper","point":4},{"number":10,"person":"KAL","point":14},{"number":11,"person":"fnag_3p","point":12},{"number":12,"person":"ryukiko1002","point":4},{"number":13,"person":"Sakura","point":8},{"number":14,"person":"星色火雨","point":5},{"number":15,"person":"幽灵人士5号","point":6},{"number":16,"person":"M1897","point":4},{"number":17,"person":"WindiaXIV","point":4},{"number":18,"person":"SAND","point":3},{"number":19,"person":"greatwallace","point":7},{"number":20,"person":"Aquacot","point":3},
    {"number":21,"person":"废料女粉","point":1},{"number":22,"person":"Code","point":1},{"number":23,"person":"方傀儡","point":1},{"number":24,"person":"ixix91","point":1},{"number":25,"person":"优雅的美美","point":1},{"number":26,"person":"peony","point":1},{"number":27,"person":"黑化由歧","point":1},{"number":28,"person":"星子滑落夜空","point":1},{"number":29,"person":"丿灬夜狼","point":1},{"number":30,"person":"凡人","point":1},{"number":31,"person":"埃尔文","point":1},{"number":32,"person":"粥","point":1},{"number":33,"person":"gcghvcg","point":1},{"number":34,"person":"yangyi","point":1},{"number":35,"person":"晓夜","point":1},{"number":36,"person":"羽毛","point":1},{"number":37,"person":"鲑鱼桒","point":1},{"number":38,"person":"六魂","point":1},{"number":39,"person":"象棋鬼降","point":1},{"number":40,"person":"SORP","point":1},{"number":41,"person":"继烈2013","point":1},{"number":42,"person":"lest_TAQ","point":1},{"number":43,"person":"诗皖","point":1},{"number":44,"person":"凉儿","point":1}
  ]
}

const store = new Store()

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
    let idx = ~~(Math.random() * 128)
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