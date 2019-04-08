import css from './index.scss'
import PageHeader from '../../components/PageHeader'
import { GrayLink, ArrowLink } from '../../components/GoldLink'
import SH3 from '../../components/StrawberryH3'

import Awards from '../../components/Awards'

import sptBeiton from '@/assets/images/beitong-logo.png'
import sptBenq from '@/assets/images/benq-logo.png'

import MODS from '../../components/MODS'

export default () => {
  return (
    <div className={ css.index }>
      <PageHeader>
        <h1>running in the 19</h1>
        <h2>2019 年特别线上速通活动</h2>
      </PageHeader>

      <div className={ css.ct }>
        <div className={ css.intro }>
          <ArrowLink href='rule/'>活动简介与规则说明</ArrowLink><br/>

          <div style={{ textAlign: 'center', marginBottom: '0.3rem' }}>我已明白了规则，要提交成绩</div>
          <ArrowLink href='https://shimo.im/forms/tGlSvtsqiJgno3Yn/fill' target='_blank' rel='noopener noreferrer'>成绩提交表单入口</ArrowLink>
        </div>

        <SH3>极简活动介绍</SH3>
        <div className={ css.intro }>
          一， 完成游戏速通，把成绩提交到 <a href='https://www.speedrun.com/' target='_blank' rel='noopener noreferrer'>speedrun.com</a> 并通过审核；<br />
          二， 把 speedrun.com 上的记录通过报名页面提交到 RIT19 活动网站；<br />
          三， 根据规则参与每月抽奖！<br/><br/>
          <span className={ css.warn }>注意：报名成绩必须是当月通过 speedrun 审核的纪录 :)</span>
        </div>

        <SH3>活动奖品</SH3>
        <div className={ css.intro }>
          <span className={ css.warn }>每个月，我们会为活动参与者准备丰富奖品，只要符合条件就可以参加抽奖！具体看 <a href='rule/'>活动规则</a></span>
          <Awards />
          <br /><br />
          <span className={ css.warn }>我们正在努力筹备更多奖品，敬请期待 🙂</span>
        </div>

        <SH3>MOD 推荐</SH3>
        <div className={ css.intro }>
          在迷茫想要打什么游戏吗？可以来看看本月的 MOD 推荐；<br />
          在对应的月份，成功提交对应的推荐游戏，可以获得额外的抽奖机会 😄
        </div>

        <MODS />

        <SH3>抽奖公示 -筹备中</SH3>
        <div className={ css.intro }>
          每个月我们会将成绩有效，符合抽奖资格的 runner 公示在网站；<br/>
          月末抽奖结束后，将公布抽奖结果；<br/>
          积极参与活动，人人都有机会中奖！
        </div>

        <SH3>合作单位</SH3>
        <div className={ css.intro }>
          <div className={ css.support }>
            感谢以下赞助单位的大力支持！<br/><br/>
            <div className={ css.spts }>
              <a className={ css.spt } 
                href='https://j.youzan.com/ibPgw9' 
                target='_blank' 
                rel='noopener noreferrer'
                title='北通'>
                <img src={ sptBeiton } alt='betop-logo'/>
              </a>
              <a className={ css.spt } 
                href='https://benq.tmall.com/' 
                target='_blank' 
                rel='noopener noreferrer'
                title='明基'>
                <img src={ sptBenq } alt='benq-logo' />
              </a>
            </div>
          </div>
        </div>

        <SH3>通过捐助支持我们</SH3>
        <div className={ css.intro }>
          TNA 希望以速通表演，线上直播，专题活动等多种形式，吸引速通玩家形成圈子，吸引更多玩家参与速通。扩大主机游戏社区的影响，让大家感受到核玩的乐趣。<br/><br/>
          我们收到的所有赞助，将用于支持我们的活动运营。<br/><br/>

          <ArrowLink href='https://afdian.net/@TNAmarathon'>TNA 捐助地址</ArrowLink>
        </div>
      </div>
    </div>
  )
}
