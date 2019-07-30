import css from './index.scss'
import { Container, Row, FlexBox, IBox } from '../../components/FlexBox'
import React from 'react'
import SH3 from '../../components/StrawberryH3'
import PHeader from '../../components/shot19/PHeader'
import { Steps, StepMini, Warning } from '../../components/Steps'

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

const Publicity = () => (
  <>
  <SH3>成绩公示 <span>publicity</span></SH3>
  <IBox>
    <CoolLink href='/shot19/publicity' target='_blank' rel='noopener noreferrer'>点这里查看已提交的成绩</CoolLink>
  </IBox>
  </>
)

const Table = ({ name, scores }) => (
  <table>
    <thead>
      <tr><th colSpan='5'>{ name }</th></tr>
      <tr><th>第一档</th><th>第二档</th><th>第三档</th><th>第四档</th><th>第五档</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>{scores[0]}</td>
        <td>{scores[1]}</td>
        <td>{scores[2]}</td>
        <td>{scores[3]}</td>
        <td>{scores[4]}</td>
      </tr>
    </tbody>
  </table>
)

const Tables = () => (
  <>
    <Table name='大往生（黑）' scores={[ '5000万', '3亿', '8亿', '10亿', '10.8亿' ]} />
    <Table name='绊地狱（羁绊地狱群）' scores={[ '4500万', '1.2亿', '1.8亿', '2.2亿', '2.5亿' ]} />
    <Table name='圣战之翼' scores={[ '1000万', '4000万', '5500万', '6000万', '6350万' ]} />
    <Table name='虫1original模式' scores={[ '1000万', '5000万', '6300万', '6550万', '6650万' ]} />
    <Table name='1945' scores={[ '60万', '80万', '95万', '105万', '115万' ]} />
    <Table name='1945II' scores={[ '100万', '120万', '130万', '145万', '160万' ]} />
    <Table name='1945III' scores={[ '95万', '105万', '115万', '124万', '128万' ]} />
    <Table name='战国ACE（战国世纪）' scores={[ '40万', '55万', '70万', '82万', '90万' ]} />
  </>
)

export default class extends React.Component {
  render () {
    return (
      <div className={ css.stg }>
        <PHeader />

        <Container>
          <Row>
            <FlexBox flex={ 4 }>
              <SH3>资源下载 <span>download</span></SH3>
              <IBox>
                模拟器：<br/>
                <a className={ css.download } href='http://tna-web.oss-ap-southeast-1.aliyuncs.com/download/Shot19STG.rar' target='_blank' rel="noopener noreferrer">Shot19STG.rar</a>
                <br/><br/>

                模拟器使用说明：<br/>
                <a className={ css.download } href='https://shimo.im/docs/b67419e462fc4c1b/ 《模拟器使用说明》，可复制链接后用石墨文档 App 或小程序打开' target='_blank' rel="noopener noreferrer">戳这里</a>
              </IBox>

              <SH3>STG 项目和成绩档位</SH3>
              <Tables />
            </FlexBox>
            <FlexBox flex={ 8 }>
              <SH3>提交成绩 <span>submit record</span></SH3>
              <IBox>
                <CoolLink href='https://shimo.im/forms/LMlDFo1DBfoAt8SL/fill' target='_blank' rel='noopener noreferrer'>点这里提交你的成绩</CoolLink>
              </IBox>
              <Publicity />
              <div className={ css.doc }>
                <SH3>活动介绍 <span>intro</span></SH3>
                <IBox>
                  <div className={ css.d1 }>
                    射，早在 4000 年前就已是古代王朝的贵族必修课；<br/>
                    射，4000 年后同样也是超然于世的一种生活态度；<br/><br/>

                    射，冷兵器时代可以是弓矢弩箭投石掷矛；<br/>
                    射，现代战争中也能是枪林弹雨炮火连天；<br/><br/>

                    射，是一门古老而又优雅的艺术；<br/>
                    射，是一种精密同时狂放的快感；<br/><br/>

                    射，不需要，不能停下来。<br/><br/>

                    TNA × ASRAC 共同诚邀，领略这份摧毁与躲避集于一身的美。Shoot out the '19，就此发射。<br/><br/>

                    作为 RIT '19 的并行系列活动， SHOT '19 和 RIT '19 的理念同源，同样都为鼓励大家参与到体验和欣赏飞行射击(简称 STG)这一古老游戏流派的活动中来，在这其中感受这类形式上简洁易懂，动作上华丽炫目游戏的魅力。同时，又能在不断的尝试和练习中切实感受到自己的提升，获得纯粹的成就感。<br/><br/>

                    你也许会觉得，高分，上榜遥不可及。可曾想过，榜上的那些鼎鼎大名，不也正是从萌新一步一个脚印坚持走下来才收获了如此成绩呢。<br/><br/>

                    给你一年的时间，我们帮你记录成长的感动。现在就出发，踏出第一步吧！
                  </div>
                </IBox>

                <SH3>参与方法</SH3>
                <IBox>
                  <Steps>
                    <StepMini num='1'>
                      访问全国主流 STG 高分排行榜网站： <a href='http://ranking.niyaozao.com' target='_blank' rel="noopener noreferrer">http://ranking.niyaozao.com</a>, 在右上角部分选择“注册”，在跳转到的论坛注册页面注册一个账号。（如果碰到的注册验证问题不明白可以自己百度搜一下答案）<br/><br/>
                    </StepMini>
                    <StepMini num='2'>
                      回到全国榜网站，右上角点击“登录”，在对话框中填入刚才注册时使用的用户名和密码确认。<br/><br/>
                    </StepMini>
                    <StepMini num='3'>
                      登录后右上角的操作行为增加“提交成绩”，在跳转到的表格内填写各项信息。<br/>
                      厂商、游戏、模式、机体和平台是下拉选择框，请选择与自己所进行游戏对应的条目；<br/>
                      分数、到达关卡、玩家名、玩家机签（即自己在街机上用的三字母签名）、成绩时间自己手动填写；<br/>
                      成绩获得地统一填写 TNA'19 或 SHOT'19, 以标明自己提交的成绩参加活动；<br/><br/>
                    </StepMini>
                    <StepMini num='3a'>
                      有关成绩资源这一栏<br/>
                      《决意~绊地狱》接受 PS4 版游戏的得分，主机版本的得分需要提交的内容为自己的 PSN 昵称和该局的实时 MP4 录像链接。要求分数在游戏官方联网排行榜上能查到对应记录。成绩效力等同于街机成绩，会列入街机全国榜排行内。<br/><br/>
                      《虫姬》Original 模式接受 Steam 版游戏的得分，PC 版本的得分需要提交该局的实时 MP4 录像链接，并且能在游戏官方联网排行榜上能查到对应记录和流程录像。<br/><br/>
                      其余情况下，所有游戏统一使用特定版本的 MAME 模拟器(ShmupMAME 4.2) 和 ROM, 官方会打包提供统一下载。这些游戏提交的记录，需要提供 inp 文件和实时 MP4 录像链接的获取地址。<br/><br/>
                    </StepMini>
                    <Warning>注意：所有成绩，均指游戏一周目的成绩。如果游戏一周目通关后自动进入二周目，则进入二周目后开幕自杀。</Warning>
                    <StepMini num='4'>
                      将通过审核的成绩提交到 tnarun 主站。获取对应的表单并填写，附上 3a 内提到的成绩资源，活动团队确认录入后，可参加当月抽奖。
                    </StepMini>
                  </Steps>
                </IBox>

                <IBox>
                  <h4>奖励规则</h4>
                  <div className={ css.d1 }>
                    SHOT'19 的奖励规则和 RIT'19 略有不同，因为是不同种类的游戏，评判标准也会有差异。在 STG 游戏中，我们通常只会采用一种评判方式，那就是得分。根据你的得分表现，RIT'19 主办方会授予你在主站活动中的抽奖机会。
                  </div>
                </IBox>

                <IBox>
                  <h4>和 RIT'19 共通的奖励规则</h4>
                  <Steps>
                    <StepMini num='1'>
                      参与奖励：每个月首次提交有效的成绩，审核通过后，便可在当月的抽奖中获得1次抽奖机会。
                    </StepMini>
                    <StepMini num='2'>
                      新人奖励：参与 SHOT'19 活动的首次提交，会在提交所参与的月份额外获得1次抽奖机会。
                    </StepMini>
                    <StepMini num='3'>
                    连续出勤奖励：在整个 SHOT'19 活动流程中，连续 8 个月提交有效成绩。在活动收尾阶段时可获得“连续出勤奖”特殊奖项的抽奖机会。
                    </StepMini>
                  </Steps>
                </IBox>

                <IBox>
                  <h4>和 RIT'19 不同的奖励规则</h4>
                  <Steps>
                    <StepMini num='1'>
                      里程碑奖励：每一款 SHOT'19 的游戏项目我们都设立有得分的里程碑，当自己的成绩提交达到某一里程碑后，将会获得不高于该分数的所有里程碑抽奖奖励，每一个里程碑提供一个当月抽奖机会。
                    </StepMini>
                    <StepMini num='2'>
                      排名奖励：在当月提交的成绩的排行上，第 1 位将获得3次额外抽奖机会；第 2~4 位将获得 2 次额外抽奖机会；第 5~10 位将获得 1 次额外抽奖机会。
                    </StepMini>
                  </Steps>
                </IBox>

                <IBox>
                <h4>额外内容：</h4>
                <div className={ css.d1 }>
                ※ 每月的赛期结束后，ASRAC 官方直播频道 (B站直播间号 12702) 会邀请国内资深玩家对当月通过审核的高排位录像进行直播评点。
                </div><br/>

                <div className={ css.warning }>⚠WARNING⚠ Best of luck… ⚠WARNING⚠</div><br/>
                <div className={ css.end }>Approach your target and attack! Your mission start now, are you ready?</div>
                </IBox>
              </div>
            </FlexBox>
          </Row>
        </Container>
      </div>
    )
  }
}