import css from './CategoriesTab.scss'
import React from 'react'
// import gameAPI from '../../api-client/gameAPI'
import classNames from 'classnames/bind'
import Leaderboard from '../../components/games/Leaderboard'

class CommonTabs extends React.Component {
  render () {
    let { categories, currentTab } = this.props
    let commonCategories = categories.filter(c => !c.miscellaneous)

    let _tabs = commonCategories.map(c => {
      let className = classNames.bind(css)({
        tab: true,
        selected: c._hash === currentTab
      })

      return (
        <div className={ className } key={ c.id }
          onClick={ evt => { this.props.navTo(c) }}
        >{ c.name }</div>
      )
    })

    return _tabs
  }
}

class MiscellaneousTabs extends React.Component {
  state = {
    showMiscellaneous: false
  }

  constructor (props) {
    super(props)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount () {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside (evt) {
    if (!this.mtab) { return }
    if (!this.mtab.contains(evt.target)) {
      this.hideMenu()
    }
  }

  showMenu () {
    this.setState({ showMiscellaneous: true })
  }

  hideMenu () {
    this.setState({ showMiscellaneous: false })
  }

  render () {
    let { categories, currentTab } = this.props
    let { showMiscellaneous } = this.state

    let miscellaneousCategories = categories.filter(c => c.miscellaneous)

    let _list = miscellaneousCategories.map(mc => {
      return (
        <div 
          key={ mc.id }
          className={ css.mitem } 
          onClick={ evt => {
            this.props.navTo(mc)
            this.hideMenu()
          }}
        >{ mc.name }</div>
      )
    })

    let mtabClassName = classNames.bind(css)({
      miscellaneousTab: true, show: (
        showMiscellaneous || miscellaneousCategories.map(mc => mc._hash).includes(currentTab)
      )
    }) 
    let mlistClassName = classNames.bind(css)({
      list: true, show: showMiscellaneous
    })

    let _miscellaneousTabs = miscellaneousCategories.length ? (
      <div className={ mtabClassName }
        ref={ node => this.mtab = node }
      >
        <span className={ css.text }
          onClick={ evt => this.showMenu() }
        >其他类别</span>
        <div className={ mlistClassName }>
          { _list }
        </div>
      </div>
    ) : null

    return _miscellaneousTabs
  }
}

class SubTabs extends React.Component {
  state = {
    currentVariables: [],
    selectedValues: []
  }

  componentWillMount () {
    let { variables, currentCategory } = this.props
    // 获取需要在 subCategories 上显示的标签
    console.log({ variables }, variables.data.map(x => x.scope))
    let currentVariables = variables.data
      .filter(v => {
        let c0 = ['global', 'full-game'].includes(v.scope.type)
        let c1 = v['is-subcategory'] === true
        let c2 = [null, currentCategory.id].includes(v.category)
        return c0 && c1 && c2
      })
    let selectedValues = { }
    currentVariables.forEach(cv => {
      selectedValues[cv.id] = cv.values.default
    })
    console.log({ currentVariables, selectedValues })
    this.setState({ currentVariables, selectedValues })
  }

  select ({ varKey, varValue }) {
    // console.log({ varKey, varValue })
    let { selectedValues } = this.state
    selectedValues[varKey] = varValue
    this.setState({ selectedValues })
  }

  render () {
    let { currentCategory, gameId } = this.props
    let { currentVariables, selectedValues } = this.state
    let _tabs = currentVariables.map(cv => {
      let cvid = cv.id
      let values = cv.values.values
      let _values = Object.keys(values).map(vid => {
        let item = values[vid]
        let className = classNames.bind(css)({
          stab: true, selected: selectedValues[cvid] === vid
        })
        return <div 
          key={ vid } 
          className={ className }
          onClick={ evt => this.select({ varKey: cvid, varValue: vid }) }
        >{ item.label }</div>
      })
      return <div key={ cvid } className={ css.stabs }>
        <label>{ cv.name }</label>
        { _values }
      </div>
    })

    let _debug = (
      <div className={ css.debug }>
        <div>
          <span>game: { gameId }</span>
          <span>catrgory: { currentCategory.id }</span>
          {
            Object.keys(selectedValues).map(key => <span key={key}>{key}={selectedValues[key]}</span>)
          }
        </div>
        <div>
          queryPath: { `/leaderboards/${gameId}/category/${currentCategory.id}?${ 
            Object.keys(selectedValues)
              .map(key => `var-${key}=${selectedValues[key]}`)
              .join('&')
          }` }
        </div>
      </div>
    )

    let _leaderboard = <Leaderboard 
      key={ JSON.stringify(selectedValues) }
      gameId={ gameId } 
      categoryId={ currentCategory.id } 
      vars={ selectedValues }
    />

    return (
      <>
      <div className={ css.varTabs }>
        { _tabs }
      </div>
      { _debug }
      { _leaderboard }
      </>
    )
  }
}

export default class extends React.Component {
  state = {
    gameId: null,
    categories: null,
    currentTab: null
  }

  async componentWillMount () {
    let { game } = this.props

    console.log({ game })

    let gameId = game.speedrunId
    let categories = game.speedrunData.categories.data
      .filter(x => x.type === 'per-game')

    this.setState({ gameId, categories })
    this._setCurrentTab(categories)
  }

  _setCurrentTab (categories) {
    let tabHashes = categories.map(c => {
      let h = `#${ c.weblink.split('#')[1] }`
      c._hash = h
      return h
    })
    let hash = window.location.hash
    console.log({ hash })
    if (!hash) {
      this.setState({ currentTab: tabHashes[0] })
      return
    } 

    let _h = tabHashes.filter(x => x === hash)[0]
    if (!_h) {
      this.setState({ currentTab: tabHashes[0] })
      return
    }

    this.setState({ currentTab: _h })
  }

  navToCategory (category) {
    let { location } = window
    let currentTab = category._hash
    window.location.href = `${location.origin}${location.pathname}${currentTab}`
    this.setState({ currentTab })
  }

  render () {
    let { game } = this.props
    let { categories } = this.state
    let { currentTab } = this.state

    let currentCategory = categories.filter(c => c._hash === currentTab)[0]

    return (
      <>
      <div className={ css.tabs }>
        <CommonTabs 
          categories={ categories } 
          currentTab={ currentTab } 
          navTo={ c => this.navToCategory(c) } 
        />
        <MiscellaneousTabs
          categories={ categories }
          currentTab={ currentTab }
          navTo={ c => this.navToCategory(c) } 
        />
      </div>
      <SubTabs 
        gameId={ game.speedrunId }
        variables={ this.props.game.speedrunData.variables } 
        currentCategory={ currentCategory }
        key={ currentTab }
      />
      </>
    )
  }
}