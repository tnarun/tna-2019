import React from 'react'

import css from './index.scss'
import PageHeader from '../components/PageHeader'
import classNames from 'classnames/bind'

import tna from '../assets/images/tna.png'

const series = {
  TNA: {
    title: 'TNA',
    otype: 'online',
    themeColor: '#ff752b',
    activities: [
      { title: 'TNA 1st' },
      { title: 'TNA 2nd' },
      { title: 'TNA 3rd', abbr: 'tna3' }
    ]
  },
  KKSK: {
    title: 'KKSK',
    otype: 'offline',
    themeColor: '#fdb762',
    activities: [
      { title: 'KKSK 1st', abbr: 'kksk' } //,
      // { title: 'KKSK 2nd' }
    ]
  },
  RIT: {
    title: 'RIT',
    otype: 'online',
    themeColor: '#00eeff',
    activities: [
      { title: 'RIT-19', abbr: 'rit19' },
      { title: 'SHOT-19', abbr: 'shot19' }
    ]
  }
}

export default () => {
  return (
    <div className={ css.index }>
      <PH />

      <div className={ css.gamescontainer }>
        <div className={ css.games }>
          <LOGO />
          <TNA />
          <RIT />
          <KKSK />
        </div>
      </div>

      <div className={ css.gamefooter }>
        <div>
          <span>新浪微博：</span>
          <a href='https://weibo.com/u/5288344073' target='_blank' rel='noopener noreferrer'>@TNA速通会</a>
        </div>
        <div>
          <span>策划人：</span>
          <a href='https://weibo.com/u/1663513370' target='_blank' rel='noopener noreferrer'>@感受不到的风</a>
        </div>
        <div>
          <span>web 开发：</span>
          <a href='https://weibo.com/ben7th' target='_blank' rel='noopener noreferrer'>@洋气书生</a>
        </div>
        <div>TNA 组委会 &copy; 2019</div>
      </div>

      {/* <div className={ css.ct }>
        

        <div className={ css.intro }>
          这里是中文圈游戏速通马拉松活动网站；<br/>
          我们正在筹备全新的活动；<br/>
          网站也在改版当中，敬请关注！<br/><br/>

          <a className={ css.ok } href='/rit19/'>Running In The '19</a>
          <a className={ css.ok } href='/shot19/'>SHoot Out The '19</a>

          <a className={ css.no } href='/'>TNA 2 - 整理中</a>
          <a className={ css.no } href='/'>TNA 1 - 整理中</a>
        </div>
      </div> */}
    </div>
  )
}

const PH = () => {
  return <PageHeader>
    <h1>TNA Speedrun</h1>
    <h2>Together Not Alone</h2>
    <h2 className={ css.cntitle }>中文速通圈活动站</h2>
  </PageHeader>
}

const LOGO = () => {
  return <div className={ css.logo }>
    <img className={ css.tnalogo } src={ tna } alt='TNA LOGO'></img>
  </div>
}

class SERIES extends React.Component {
  render () {
    let { data } = this.props 
    let _activities = data.activities.map((x, idx) => {
      let link = x.abbr ? `/${ x.abbr }` : '#'
      let className = classNames.bind(css)({
        activity: true, nolink: !x.abbr
      })

      return <a className={ className } key={ idx } href={ link }>
        <div className={ css.leftline } style={{ backgroundColor: data.themeColor }}></div>
        <span>{ x.title }</span>
      </a>
    })

    let _otype = { online: '线上', offline: '线下' }[data.otype]
    let oClassName = classNames.bind(css)({
      otype: true,
      online: data.otype === 'online',
      offline: data.otype === 'offline',
    })

    return <div className={ css.series }>
      <div className={ css.title } style={{ color: data.themeColor }}>
        <div className={ css.leftline } style={{ backgroundColor: data.themeColor }}></div>
        <div className={ oClassName }>{ _otype }</div>
        <span>{ data.title }</span>
      </div>
      { _activities }
    </div>
  }
}

class TNA extends React.Component {
  render () {
    return <SERIES data={ series.TNA } />
  }
}

class KKSK extends React.Component {
  render () {
    return <SERIES data={ series.KKSK } />
  }
}

class RIT extends React.Component {
  render () {
    return <SERIES data={ series.RIT } />
  }
}