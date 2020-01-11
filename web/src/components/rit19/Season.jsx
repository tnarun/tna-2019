import React from 'react'
import css from './Season.scss'
import classNames from 'classnames/bind'

export default class Season extends React.Component {
  render () {
    let { store } = this.props

    let _recordGroups = store.recordGroups.map((group, idx) => {
      return <RecordGroup group={ group } key={ idx } />
    })

    return <div className={ css.Season }>
      { _recordGroups }
    </div>
  }
}

class RecordGroup extends React.Component {
  render () {
    let { group } = this.props

    let _monthGroups = group.monthGroups.map((group, idx) => {
      return <MonthGroup group={ group } key={ idx } />
    })

    return <div className={ css.RunnerRecords }>
      <div className={ css.head }>
        <span>月份</span><span>类型</span><span>游戏与分类</span><span>总人数</span>
        <span>排名</span><span>参考值</span><span>排名奖励</span><span>奖杯奖励</span>
        <span>该月积分</span>
      </div>
      { _monthGroups }
      <div className={ css.runner }>
        <div className={ css.info }>
          <div className={ css.name }>
            {/* { group.runnerName } ({ group.runnerOtherName }) */}
            { group.runnerFullName }
          </div>
          {
            group.runnerHomePage ? <div>
              <a href={ group.runnerHomePage } target='_blank' rel='noopener noreferrer'>{ group.runnerHomePage }</a>
            </div> : null
          }
        </div>
        <div className={ css.sumPoint }>
          <span>抽奖机会</span>
          <span>{ group.sumPoint }</span>
        </div>
      </div>
    </div>
  }
}

class MonthGroup extends React.Component {
  render () {
    let { group } = this.props

    let _records = group.records.map((r, idx) => {
      return <Record record={ r } key={ idx } />
    })

    return <div className={ css.MonthGroup }>
      <div className={ css.month }>{ group.month }</div>
      <div className={ css.records }>
        { _records }
        <div className={ css.monthsum }>
          <div className={ css.compute }>
            {/* <span>月份积分：</span> */}

            <span className={ css.part }>
              <span className={ css.p }>{ group.参与积分 }</span>
              <span className={ css.d }>(参与)</span>
            </span>

            {
              group.最佳排名积分 > 0 ? <span className={ css.part }>
                <span className={ css.plus }>＋</span>
                <span className={ css.p }>{ group.最佳排名积分 }</span>
                <span className={ css.d }>(最佳排名)</span>
              </span> : null
            }

            {
              group.最佳奖杯积分 > 0 ? <span className={ css.part }>
                <span className={ css.plus }>＋</span>
                <span className={ css.p }>{ group.最佳奖杯积分 }</span>
                <span className={ css.d }>(最佳奖杯)</span>
              </span> : null
            }

            {
              group.首次参与积分 > 0 ? <span className={ css.part }>
                <span className={ css.plus }>＋</span>
                <span className={ css.p }>{ group.首次参与积分 }</span>
                <span className={ css.d }>(首次参与)</span>
              </span> : null
            }

            {
              group.推荐游戏积分 > 0 ? <span className={ css.part }>
                <span className={ css.plus }>＋</span>
                <span className={ css.p }>{ group.推荐游戏积分 }</span>
                <span className={ css.d }>(当期推荐游戏)</span>
              </span> : null
            }

            <span className={ css.eq }>＝</span>
          </div>
        </div>
      </div>
      <div className={ css.result }>
        { group.总积分 }
      </div>
    </div>
  }
}

class Record extends React.Component {
  render () {
    let { record } = this.props

    let { rankPlusPoint } = record
    let rppClassName = classNames.bind(css)({
      point: true,
      isZero: rankPlusPoint === 0
    })

    let { cupPoint } = record
    let cpClassName = classNames.bind(css)({
      point: true,
      isZero: cupPoint === 0
    })

    let gameDescClassName = classNames.bind(css)({
      gameDesc: true,
      isModGame: record.isModGame
    })

    return <div className={ css.Record }>
      { record.getSubmitTypeName(css) }
      {/* { record.data.id } */}
      <span className={ gameDescClassName }>{ record.gameDesc }</span>
      <span>{ record.totalPersonNumber }</span>
      <span>{ record.placeNumber }</span>
      <span>{ record.ckValue }</span>
      <span className={ rppClassName }>{ rankPlusPoint }</span>
      <span className={ cpClassName }>{ cupPoint }</span>
    </div>
  }
}