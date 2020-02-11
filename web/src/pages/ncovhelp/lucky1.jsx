// title: TNA SP 抽奖

import React from 'react'
import css from './lucky.scss'
import classNames from 'classnames/bind'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

class Store {
  @observable currentIdx = 0
  
  @observable prizes = [
    { id: 1, name: '东方鬼形兽正版实体碟', person: null },
  ]
  
  @observable choices = [{"number":1,"person":"洩矢诹访子","point":1},{"number":2,"person":"violion","point":1},{"number":3,"person":"wutou","point":1},{"number":4,"person":"田源猫","point":1},{"number":5,"person":"杰洛特","point":1},{"number":6,"person":"saltfish","point":1},{"number":7,"person":"诡异","point":3},{"number":8,"person":"美美","point":3},{"number":9,"person":"凡人","point":1},{"number":10,"person":"TJoker","point":1},{"number":11,"person":"McGuffin","point":1},{"number":12,"person":"爱发电用户_xKpB","point":1},{"number":13,"person":"Reghnall0225","point":1},{"number":14,"person":"纠结的草稿纸","point":1},{"number":15,"person":"爱发电用户_qcna","point":1}]
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