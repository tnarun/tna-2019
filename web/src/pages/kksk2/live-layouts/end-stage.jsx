// title: 4:3 单人

import React from 'react'

import css from './live.scss'

import LayoutTNA from '../../../components/tna3/LayoutTNA'

const urls = [
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/ad-kksk.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/ad-gcores.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/ad-huya.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/ad-ave.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/ad-benq.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/ad-omen.png'
]

export default class extends React.Component {
  render () {
    let { type } = this.props.location.query

    return <div className={ css.live }>
      <div className={ css['c-end-stage'] }>
        <div className={ css.gtitle }>
          {
            type === 'end' ? 
              <h1>KKSK2 杭州站活动已结束，谢谢大家！</h1> : 
              <h1>KKSK2 杭州站今天的活动已结束，明天也精彩！</h1>
          }
        </div>
        <div className={ css.battrs }>
          <div className={ css.logos1 }>
            <Logo url={ urls[1] } text='机核网' />
            <Logo url={ urls[2] } text='虎牙直播' />
          </div>
          <div className={ css.staff }>
            <div className={ css.list }>
              <div className={ css.head }></div>

              <div className={ css.block }>
                <h2>DAY1 表演者</h2>

                <span>超惑星战记 ZERO</span>
                <div>埃尔文</div>

                <span>鬼泣 4</span>
                <div>殇</div>

                <span>空洞骑士</span>
                <div>创世、魔术师</div>

                <span>洛克人 11</span>
                <div>南极猫的眼泪</div>

                <span>耻辱 2</span>
                <div>佩奇(Pegaiur)</div>

                <span>血源诅咒</span>
                <div>黑化由歧</div>
              </div>

              <div className={ css.block }>
                <h2>DAY2 表演者</h2>

                <span>决意：绊地狱</span>
                <div>ixix91</div>

                <span>合金装备崛起：复仇</span>
                <div>DarkSlayer</div>

                <span>怪物猎人世界：冰原</span>
                <div className={ css.p }>黑化由歧</div>
                <div>幻金皓月</div>

                <span>武士刀 · 零</span>
                <div>方傀儡</div>

                <span>只狼：影逝二度</span>
                <div className={ css.p }>痴人思梦</div>
                <div>Ak1Ra、24</div>

                <span>蔚蓝</span>
                <div>哈特涅特</div>
              </div>

              <div className={ css.block }>
                <h2>技术组</h2>

                <span>主持与解说</span>
                <div className={ css.p }>喂狗组</div>
                <div className={ css.p }>羽毛</div>
                <div className={ css.p }>伯爵</div>
                <div className={ css.p }>楼座</div>
                <div className={ css.p }>手冢文轩</div>
                <div>佩奇(Pegaiur)</div>

                <span>直播与网站技术</span>
                <div>洋气书生</div>

                <span>导播</span>
                <div className={ css.p }>Elitenv</div>
                <div>多啦二猪</div>

                <span>现场摄像</span>
                <div>阿黄</div>
              </div>

              <div className={ css.block }>
                <h2>鸣谢单位</h2>

                <span>活动主办方·场地提供</span>
                <div>机核网</div>

                <span>直播平台</span>
                <div>虎牙直播</div>

                <span>游戏采集卡设备支持</span>
                <div>圆刚游戏采集卡</div>

                <span>显示设备支持</span>
                <div>BenQ Gaming</div>

                <span>显示设备支持</span>
                <div>BenQ Gaming</div>

                <span>游戏设备支持</span>
                <div>HP 暗影精灵</div>
              </div>

              <div className={ css.block }>
                <h2>以及</h2>
                <div className={ css.p }>感谢所有在现场</div>
                <div>和在直播间观看的你们</div>
              </div>

              <div className={ css.tail }></div>
            </div>
          </div>
          <div className={ css.logos2 }>
            <Logo url={ urls[3] } text='圆刚游戏采集卡' />
            <Logo url={ urls[4] } text='BenQ Gaming' />
            <Logo url={ urls[5] } text='HP 暗影精灵' />
          </div>
        </div>
      </div>
    </div>
  }
}

class Logo extends React.Component {
  render () {
    let { url } = this.props
    return <div className={ css.Logo }>
      <div className={ css.i } style={{ backgroundImage: `url(${url})`}}></div>
      <div className={ css.t }>{ this.props.text }</div>
    </div>
  }
}