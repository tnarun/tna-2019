import React from 'react'
import css from './Season.scss'
import classNames from 'classnames/bind'

export default class Season extends React.Component {
  render () {
    let { store } = this.props

    let _recordGroups = store.recordGroups.map((group, idx) => {
      return <RecordGroup group={ group } key={ idx } />
    })

    let _briefGroups = store.recordGroups.map((group, idx) => {
      return <div className={ css.group } key={ idx }>
        <span className={ css.name }>{ group.runnerFullName }</span>
        <span className={ css.point }>{ group.sumPoint }</span>
      </div>
    })

    return <>
      <h4>简明表</h4>
      <p>本期共有 { _briefGroups.length } 名选手参与</p>
      <div className={ css.brief }>
        <div className={ css.head }>
          <span>选手</span><span>该期抽奖机会</span>
        </div>
        { _briefGroups }
      </div>

      <h4>详细计算表</h4>
      <div className={ css.Season }>
        { _recordGroups }
      </div>
    </>
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
        <span>月份</span><span>类型</span><span>游戏</span>
        <span>排名</span><span>排名区间</span><span>排名奖励</span>
        <span>分数档位</span><span>档位奖励</span>
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
              group.最佳档位积分 > 0 ? <span className={ css.part }>
                <span className={ css.plus }>＋</span>
                <span className={ css.p }>{ group.最佳档位积分 }</span>
                <span className={ css.d }>(最佳档位)</span>
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

    let gameDescClassName = classNames.bind(css)({
      gameDesc: true,
      isModGame: record.isModGame
    })

    return <div className={ css.Record }>
      { record.getSubmitTypeName(css) }
      {/* { record.data.id } */}
      <span className={ gameDescClassName }>{ record.gameDesc }</span>
      <span>{ record.placeNumber }</span>
      <span>{ record.placeNumberLabel }</span>
      <span className={ rppClassName }>{ rankPlusPoint }</span>
      <span>{ record.scoreLevelLabel }</span>
      <span className={ css.point }>{ record.scoreLevelPoint }</span>
    </div>
  }
}