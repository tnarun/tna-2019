import React from 'react'
import css from './StaffRoll.scss'

export default class StaffRoll extends React.Component {
  render () {
    return <div className={ css.StaffRoll }>
      <h2>感谢所有的 Runner、解说、主持人们！</h2>
      <div className={ css.roll }>
        <div className={ css.list }>
          <h3>Runner DAY1</h3>
          <div className={ css.p }>elitenv</div>
          <div className={ css.p }>火月的捌年</div>
          <div className={ css.p }>十三代目秀元</div>
          <div className={ css.p }>奈克斯</div>
          <div className={ css.p }>db0</div>
          <div className={ css.p }>code</div>
          <div className={ css.p }>Liebesleid</div>
          <div className={ css.p }>南极猫的眼泪</div>
          <div className={ css.p }>黑化由歧</div>
          <div className={ css.p }>AkiRa丶24</div>

          <h3>Runner DAY2</h3>
          <div className={ css.p }>创世丶魔术师</div>
          <div className={ css.p }>阳翼</div>
          <div className={ css.p }>小夏</div>
          <div className={ css.p }>汞京</div>
          <div className={ css.p }>美国游戏玩家大斯</div>
          <div className={ css.p }>o0水晶梦幻0o</div>
          <div className={ css.p }>一笑</div>
          <div className={ css.p }>幻金皓月</div>
          <div className={ css.p }>职业沙包sorp</div>
          <div className={ css.p }>DemoJameson</div>

          <h3>解说</h3>
          <div className={ css.p }>楼座</div>
          <div className={ css.p }>Callicantzaros</div>
          <div className={ css.p }>香晔</div>
          <div className={ css.p }>毛玉小虎</div>
          <div className={ css.p }>羽毛413</div>
          <div className={ css.p }>YYの小志</div>
          <div className={ css.p }>poppy</div>
          <div className={ css.p }>鲜血染红的樱花树</div>
          <div className={ css.p }>猥琐的阎魔</div>
          <div className={ css.p }>lolo</div>
          <div className={ css.p }>不可燃废料</div>
          <div className={ css.p }>串串</div>

          <h3>主持人</h3>
          <div className={ css.p }>说书人老五</div>
          <div className={ css.p }>女王盐</div>
          <div className={ css.p }>不能吃的OK酱</div>
          <div className={ css.p }>白桃channel</div>

          <h3>宣传资料、视频剪辑、主题设计</h3>
          <div className={ css.p }>钏</div>
          <div className={ css.p }>樱奈雪</div>
          <div className={ css.p }>幻想乡の鬼狐狸</div>

          <h3>网站、直播界面、数据技术</h3>
          <div className={ css.p }>洋气书生</div>

          <h3>组织策划</h3>
          <div className={ css.p }>感受不到的风</div>

          <h3>以及</h3>
          <div className={ css.p }>最好的观众们</div>
        </div>
      </div>
    </div>
  }
}