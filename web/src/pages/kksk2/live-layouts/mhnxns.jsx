// title: 结束

import React from 'react'

import css from './live.scss'

import LiveBG from '../../../components/kksk2/LiveBG'
import LayoutLOGO from '../../../components/kksk2/LayoutLogoKKSK2'

export default class extends React.Component {
  render () {
    return <div className={ css.live }>
      <div className={ css['c-mhnxns'] }>
        <LiveBG />

        <div className={ css.logo }>
          <LayoutLOGO notext />
        </div>
        <div className={ css.gtitle }>
          你行你上 · 怪物猎人世界 · 烤肉大赛 · 游戏规则
        </div>
        <div className={ css.battrs }>
          <div className={ css.staff }>
            <div className={ css.list }>
              <div className={ css.block }>
                <h2>一，任务</h2>
                <div>特定斗技场任务</div>

                <h2>二，基本玩法</h2>
                <div className={ css.p }>给你固定的道具装备和十块生肉</div>
                <div className={ css.p }>从玩家使用斗技场滑索开始计时</div>
                <div>限时五分钟时间，在任务内烤肉</div>

                <h2>三，游戏结束</h2>
                <div className={ css.p }>五分钟时限到达</div>
                <div className={ css.p }>或者生肉全部烤完</div>
                <div className={ css.p }>或者玩家力尽（猫车）后</div>
                <div>停止计时</div>
              </div>

              <div className={ css.block }>
                <h2>四，分数计算</h2>
                <div className={ css.p }>“烤熟的肉” 3 分</div>
                <div className={ css.p }>“半生肉” 1 分</div>
                <div className={ css.p }>“烤焦的肉” 0 分</div>
                <div className={ css.p }>分高者胜</div>
                <div>如果同分，时间短者胜</div>

                <h2>五，规则补充</h2>
                <div className={ css.p }>禁止吃猫饭</div>
                <div>必须下到斗技场坑内进行烤肉</div>

                <h2>六，道具与装备详情</h2>
                <div>烟雾弹 × 1，大回复药 × 1，不动衣装</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}