import css from './index.scss'
import SH3 from '../../components/StrawberryH3'
import { Container, Row, FlexBox, IBox } from '../../components/FlexBox'
import { Steps, Step, Warning } from '../../components/Steps'

import Prizes from '../../components/Prizes'

import sptBeiton from '@/assets/images/beitong-logo.png'
import sptBenq from '@/assets/images/benq-logo.png'

import MODS from '../../components/MODS'
import PHeader from '../../components/rit19/PHeader'

const CoolLink = (props) => (
  <div className={ css.coollink }>
    <div className={ css.arrow }>
      <div className={ css.a1 }></div>
      <div className={ css.a2 }></div>
      <div className={ css.a3 }></div>
    </div>
    <a { ...props }>{ props.children }</a>
  </div>
)

const SpeedrunLink = () => (
  <a href='https://www.speedrun.com/' target='_blank' rel='noopener noreferrer'>speedrun.com</a>
)

const Publicity = () => (
  <>
  <SH3>成绩公示 <span>publicity</span></SH3>
  <IBox>
    <CoolLink href='/rit19/publicity' target='_blank' rel='noopener noreferrer'>点这里查看已提交的成绩</CoolLink>
  </IBox>
  </>
)

const First = () => (
  <div className={ css.first }>
    <Container>
      <Row>
        <FlexBox flex={ 1 }>
          <SH3>我要参加 <span>i wanna join</span></SH3>
          <IBox>
            <div className={ css.desc }>准备参加之前，先看看规则吧！</div>
            <CoolLink href='rule/'>活动简介与规则说明</CoolLink>
          </IBox>

          <SH3>提交成绩 <span>submit record</span></SH3>
          <IBox>
            <div className={ css.desc }>我已经明白规则了，要提交成绩</div>
            <CoolLink href='https://shimo.im/forms/tGlSvtsqiJgno3Yn/fill' target='_blank' rel='noopener noreferrer'>点这里提交你的成绩</CoolLink>
          </IBox>
        </FlexBox>

        <FlexBox flex={ 1 }>
          <SH3>简明介绍 <span>brief intro</span></SH3>
          <div className={ css.brief }>
            <Steps>
              <Step num='1'>完成游戏速通，录制视频，<br/>把成绩提交到 <SpeedrunLink /> 并通过审核；</Step>
              <Step num='2'>把 <SpeedrunLink /> 上的记录<br/>通过 <a href='https://shimo.im/forms/tGlSvtsqiJgno3Yn/fill' target='_blank' rel="noopener noreferrer">报名页面</a> 提交到 <a href='/rit19/'>RIT19</a> 活动网站；</Step>
              <Step num='3'>根据规则参与当月抽奖！</Step>
              <Warning>注意：报名成绩必须是<br/>当月通过 <SpeedrunLink /> 审核的纪录 🙂</Warning>
            </Steps>
          </div>
        </FlexBox>
      </Row>
    </Container>
  </div>
)

const Second = () => (
  <div className={ css.second }>
  <Container>
    <Row>
      <FlexBox flex={ 6 }>
        <Publicity />

        <SH3>本季度 (4-6 月) MOD 推荐项目 <span>recommend</span></SH3>
        <div className={ css.desc }>
          在迷茫想要打什么游戏吗？可以来看看本月的 MOD 推荐；<br />
          在对应的月份，成功提交对应的推荐游戏，可以获得额外的抽奖机会 😄
        </div>
        <div className={ css.mods }>
          <MODS />
        </div>
      </FlexBox>

      <FlexBox flex={ 6 }>
        <SH3>活动奖品 <span>prize</span></SH3>
        <div className={ css.desc }>
          每个月，我们都会为活动参与者准备丰富奖品，只要符合条件就可以参加月末抽奖！具体看 <a href='rule/'>活动规则</a>
        </div>
        <Prizes />
        {/* <Steps>
          <Warning>我们正在努力筹备更多奖品，敬请期待 <span role='img' aria-label='smile'>🙂</span></Warning>
        </Steps> */}
      </FlexBox>
    </Row>
  </Container>
  </div>
)

export default () => {
  return (
    <div className={ css.index }>
      <PHeader />
      <First />
      <Second />

      <div className={ css.second }>
      <Container>
        <Row>
          <FlexBox flex={ 6 }>
            <SH3>抽奖公示 - 正在筹备 <span>draw</span></SH3>
            <div className={ css.desc }>
              每个月我们会将成绩有效，符合抽奖资格的 runner 公示在网站；<br/>
              月末抽奖结束后，将公布抽奖结果；<br/>
              积极参与活动，人人都有机会中奖！
            </div>

            <SH3>赞助单位 <span>sponsor</span></SH3>
            <div className={ css.desc }>感谢以下赞助单位的大力支持！</div>
            <div className={ css.spos }>
              <a className={ css.spo } 
                href='https://j.youzan.com/ibPgw9' 
                target='_blank' 
                rel='noopener noreferrer'
                title='北通'>
                <img src={ sptBeiton } alt='betop-logo'/>
              </a>
              <a className={ css.spo } 
                href='https://benq.tmall.com/' 
                target='_blank' 
                rel='noopener noreferrer'
                title='明基'>
                <img src={ sptBenq } alt='benq-logo' />
              </a>
            </div>
          </FlexBox>

          <FlexBox flex={ 6 }>
            <SH3>通过捐助支持我们 <span>donate</span></SH3>
            <div className={ css.desc }>
            TNA 希望以速通表演，线上直播，专题活动等多种形式，吸引速通玩家形成圈子，吸引更多玩家参与速通。扩大主机游戏社区的影响，让大家感受到核玩的乐趣。<br/><br/>
            我们收到的所有赞助，将用于支持我们的活动运营。
            </div>
            <div style={{ paddingRight: '1rem' }}>
              <CoolLink href='https://afdian.net/@TNAmarathon' target='_blank' rel='noopener noreferrer'>TNA 捐助地址</CoolLink>
            </div>
          </FlexBox>
        </Row>
      </Container>
      </div>
    </div>
  )
}
