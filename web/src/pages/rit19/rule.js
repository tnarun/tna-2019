import css from './index.scss'
import PageHeader from '../../components/PageHeader'
import { BackLink } from '../../components/GoldLink'
import SH3 from '../../components/StrawberryH3'

import gs from '@/assets/images/gongshi.png'

import reg1 from '@/assets/images/speedrun/reg1.jpg'
import reg2 from '@/assets/images/speedrun/reg2.jpg'
import reg3 from '@/assets/images/speedrun/reg3.jpg'

import up1 from '@/assets/images/speedrun/up1.jpg'
import up2 from '@/assets/images/speedrun/up2.jpg'
import up3 from '@/assets/images/speedrun/up3.jpg'
import up4 from '@/assets/images/speedrun/up4.jpg'

// 内容参考
// https://drive.google.com/file/d/1_LBY1FlMXH1zdjJZUxU8XUB7B6DgjUNa/view?tdsourcetag=s_pcqq_aiomsg

export default () => {
  return (
    <div className={ css.help }>
      <PageHeader>
        <h1>running in the 19</h1>
        <h2>2019 年特别线上速通活动</h2>
      </PageHeader>

      <div className={ css.ct }>
        <div className={ css.intro }>
          <BackLink href='../'>回到活动首页</BackLink>
        </div>

        <P1 />
        <P2 />
        <P3 />
      </div>
    </div>
  )
}

const P1 = () => (
  <>
  <SH3>活动简介与规则说明</SH3>
  <div className={ css.intro }>
    <div className={ css.texts }>
      　　“速通里面好多高级技巧，我做不到的” <br/><br/>

      　　“这样的玩法是没有灵魂的，游戏制作者也不会希望你这么做”<br/><br/>

      　　“你这么做有什么意义么，剧情都看不到，为了啥？”<br/><br/>

      　　不！你们都错了！<br/><br/>

      　　随着国内的主机市场逐渐回暖，大家接触到了各种各样的游戏，同时也接触到了精彩万分的游戏速通文化，了解到这种与一般攻关套路有所不同，追求最速破关的游戏玩法。<br/><br/>

      　　但是，<br/><br/>

      　　正是由于追求如此极致的目标,所有位于排行榜前端的高端玩家所展示出来的,都是令人瞠目结舌、叹为观止、甚至一般玩家根本不可能用出来的高超技巧。也因为如此,在众多的的普通玩家、观众心中烙下了一个“速通都是用奇怪的技巧”“只有用BUG才能算速通”的印记。<br/><br/>

      　　实际上并不是这样的。<br/><br/>

      　　在竞速通关的世界裡,只要遵守各个游戏社区所制定的规则、能够达成游戏与规则所设立的目的并正常计时且记录下来,他就是一个完整的 Speedrun 。不会有任何一个社区会要求、也不该用规则要求玩家“必须利用BUG或者特殊技巧完成游戏”。<br/><br/>

      　　虽然speedrun有着一份排行榜去竞争，但是速通的核心要义是“突破自我”。一款游戏从初见到通关，然后多次游戏渐渐熟悉游戏的风格与套路，尤其是在小时候游戏不多的时候，一款游戏打了很多遍，就会想出不同的花样去破关，速通也不过是其中的一种形式。<br/><br/>
      
      　　随着熟练度增加，游戏的破关时间也越来越短，而速通则是让这个概念更加的升华。通过不停地练习与回顾，去发掘自己在哪里有不足哪里还能精进，找出做得好的地方并加以保持，让破关流程更加稳定、顺畅，拥有一个属于自己的节奏，一次次的突破自己的最好成绩并从中获得成就感与快乐。这才是速通的本质。<br/><br/>

      　　而为了追求机制中的机制去找寻BUG或者更高难度的技巧，虽然也是速通的一部分。但是也是在你能够熟练破关的基础上再去争取的部分，而不是强硬的说只要速通就要这么做到。<br/><br/>

      　　总之，重点就在于：<br/><br/>

      　　速通，没什么好怕的，你也可以做到。<br/><br/>

      　　为了这个理念而催生的，正是这个为期一整年的长期特别活动—— "running in the 19". 而我们最大的目标，就是希望那些知道速通但是只是当做消遣或者认为自己没有实力去尝试速通的人，能够有一个机会去改编自己的看法，进一步去接触，体会不同于看别人的成绩，而是自己尝试突破自我的感受！<br/><br/>

      　　既然都站在了门前，为什么不尝试往前踏一步？<br/>
      　　我们所有前行者会陪着你们！<br/>
      　　去体验这个未知但是充满挑战的世界！<br/><br/><br/>


      　　<strong style={{ fontSize: '1.5rem', color: 'gold' }}>Run Together Not Alone</strong>
    </div>
  </div>
  </>
)

const P2 = () => (
  <>
  <SH3>活动参与方法与规则</SH3>
  <div className={ css.intro }>
    <div className={ css.texts }>
      <h4>1. 注册 speedrun</h4>
      <div>
        我们的活动所有成绩的认定都基于 speedrun.com , 所以你必须要有 <a href='https://www.speedrun.com/' target='_blank' rel='noopener noreferrer'>speedrun.com</a> 的账号。下面教你怎么注册：<br /><br />

        第一步：访问 <a href='https://www.speedrun.com/' target='_blank' rel='noopener noreferrer'>speedrun.com</a> , 点击右上角的注册；<br />
        <div className={ css.helpimg }><a href={ reg1 } target='_blank' rel='noopener noreferrer'><img src={ reg1 } alt='step1' /></a></div>

        第二步：填写用户名和邮箱；<br />
        <div className={ css.helpimg }><a href={ reg2 } target='_blank' rel='noopener noreferrer'><img src={ reg2 } alt='step2' /></a></div>

        第三步：在邮箱里收到账号激活邮件，点击里面的链接完成注册；<br />
        <div className={ css.helpimg }><a href={ reg3 } target='_blank' rel='noopener noreferrer'><img src={ reg3 } alt='step3' /></a></div>

        完成注册，有了 speedrun 账号之后，就可以提交成绩了。
      </div>
    </div>

    <div className={ css.texts }>
      <h4>2. 录制视频</h4>
      在 speedrun 提交的成绩必须有视频作为证明；你可以按以下两种方式准备视频：<br/>
      一是自己录制游戏过程，把视频上传到 youtube 或 bilibili .<br/>
      二是把你的直播实况（如果你是直播播主）剪辑成精华视频来上传；<br/><br/>

      速通的视频必须同时包含“游戏内容”和“计时器”。<br/>
      如果需要相关的软件，可以从 LiveSplit 获取相关资源。<br/>
      具体地址是：<a href='http://livesplit.github.io' target='_blank' rel='noopener noreferrer'>http://livesplit.github.io</a>
    </div>

    <div className={ css.texts }>
      <h4>3. 上传成绩，通过审核</h4>
      成绩需要通过 speedrun 的审核才有效。下面教你怎么提交成绩：<br /><br />

      第一步：搜索你完成速通的游戏；<br />
      <div className={ css.helpimg }><a href={ up1 } target='_blank' rel='noopener noreferrer'><img src={ up1 } alt='step1' /></a></div>

      第二步：在游戏下方，选择成绩对应的分类；<br />
      <div className={ css.helpimg }><a href={ up2 } target='_blank' rel='noopener noreferrer'><img src={ up2 } alt='step2' /></a></div>

      第三步：填写表单，提交成绩；注意要有视频连接，最好是 youtube 上的，bilibili 也可以；<br />
      <div className={ css.helpimg }><a href={ up3 } target='_blank' rel='noopener noreferrer'><img src={ up3 } alt='step3' /></a></div>

      第四步：等待成绩审核，你可以通过个人信息页面的 pending actions 查看审核情况；<br />
      <div className={ css.helpimg }><a href={ up4 } target='_blank' rel='noopener noreferrer'><img src={ up4 } alt='step4' /></a></div>
    </div>

    <div className={ css.texts }>
      <h4>4. 将通过审核的成绩提交到 tnarun 网站</h4>
      本网站会准备报名与提交 speedrun 成绩的表单供活动参加者填写；填写表单，并且附上有效的成绩证明，经活动团队后，参加者就可以参加当月的抽奖。需要注意的是，speedrun 的成绩同样需要是当月的；<br/><br/>

      只要在某个月份上传了成绩，就会在当月获得一次抽奖机会！<br/><br/>

      每月结束时，活动团队会统计抽奖参与者名单；根据抽奖规则得出抽奖结果后，将获奖者名单与参与者名单一并公示；
    </div>

    <div className={ css.texts }>
      <h4>额外的抽奖机会之一：成绩排名奖励！</h4>
      为了鼓励在热门速通项目中争取更高排名，活动特别设置了根据项目人数与排名来计算的额外抽奖机会。计算公式如下：<br/><br/>

      <img src={ gs } alt='公式' /><br/><br/>

      其中，总人数指：该速通成绩对应的游戏下的成绩列表的 category 下的 runner 人数。<br/><br/>
      名次指：参与该活动的 runner，在上述 游戏-分类 下提交的成绩的名次。<br/><br/>

      根据上述公式，计算得到参考值（向下取整），然后按照下表换算额外抽奖次数：

      <table>
        <thead>
        <tr>
          <th>参考值</th>
          <th>可获得的额外抽奖次数</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>90 以上</td>
          <td>3</td>
        </tr>
        <tr>
          <td>80 至 89</td>
          <td>2</td>
        </tr>
        <tr>
          <td>55 至 79</td>
          <td>1</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div className={ css.texts }>
      <h4>额外的抽奖机会之二：奖杯奖励！</h4>
      针对竞争特别激烈的热门项目，顶尖玩家可以享有更多的额外抽奖！具体条件如下：<br/><br/>

      一，这个游戏项目的参加人数大于 30 人（至少 31 人）；<br/>
      二，在该项目中，获得前三名的成绩；<br/><br/>

      若获得第一名（金杯）可额外进行 2 次抽奖；<br/>
      若获得第二名（银杯）可额外进行 1 次抽奖；<br/>
      若获得第三名（铜杯）可额外进行 1 次抽奖；<br/><br/>

      奖杯奖励和排名奖励可以叠加喔 😆
    </div>

    <div className={ css.texts }>
      <h4>额外的抽奖机会之三：新人奖励！</h4>

      新人参加本活动的头两个月内，首次提交成绩，可以在提交成绩的月份获得一次额外抽奖；<br/><br/>

      这个和上面的额外抽奖也可以叠加 🙂
    </div>

    <div className={ css.texts }>
      <h4>特殊奖项：连续出勤奖！</h4>

      如果你在活动的一年内，连续八个月都在 speedrun 提交了成绩并向本活动递交了申请，那么在最后，可以参加“连续出勤奖”的特殊奖项抽奖；<br/><br/>

      奖励机会多多，大家努力地参加吧~
    </div>

    <div className={ css.texts }>
      <h4>总结直播与抽奖！</h4>
      在每个自然月结束后，我们会对当月的成绩报名进行审核统计，并定期于月中择日进行专题节目实况，节目内容会与玩家分享活动参加者的成绩，心得，集锦并会进行抽奖。 <br/><br/>

      活动目的旨在：<br/><br/>
      - 介绍丰富多彩的 speedrun 游戏<br/>
      - 追踪活跃选手的近况与进展<br/>
      - speedrun 的心得分享与技巧探讨<br/>
      - 活动相关咨询宣传<br/>
    </div>

    <div className={ css.texts }>
      <h4>问题反馈和支持</h4>
      speedrun 网站等速通成绩排名网站大多是英文网站，<br/>
      一来，考虑到玩家们在使用上有语言不通的问题，<br/>
      二来，虽然 speedrun 在最近的一段时间开始支持以 bilibili 网站视频来提交成绩，但是也存在可能无法被认可的情况。<br/><br/>

      我们会设置 MOD 支持群来帮助各位玩家。<br/>
      加 QQ 群：614316282 来获取支持。<br/><br/>
      
      我们会为玩家在游戏社区规范，speedrun 软硬件使用限制，填写成绩相关资料等问题上提供协助。<br/><br/>

      如果玩家对网站本身有设计瑕疵，逻辑、用语错误等问题报告或其他建议，也可以直接在群内提出，希望我们一起让这个玩家社区环境变得更好 🙂
    </div>

    <div className={ css.texts }>
      <h4>P.S.</h4>
      虽然活动主舞台为 speedrun.com, 但是并不代表我们只接受这里的成绩。<br/>
      其他例如洛克人，光环，塞尔达等游戏也有专门的网站；<br/>
      节奏地牢等游戏有 steam 社区排行；<br/>
      这些同样是我们认可的成绩范围。
    </div>

    <div className={ css.texts }>
      <h4>P.S.</h4>
      我们希望大家为了社区的良好环境而努力，所以任何成绩请确认是靠自己的努力得来，哪怕成绩不是那么好，都是自己努力的成果。<br/><br/>
      如果有任何一个选手被社区认为有作弊行为，本活动以及以后可能进行的所有本社区相关活动，将不再接受关于这个选手在作弊项目上的任何成绩提交。
    </div>
  </div>
  </>
)

const P3 = () => (
  <>
  <SH3>Enjoy it!</SH3>
  <div className={ css.intro }>
    <div className={ css.texts }>
      　　四月是新财年的开始，也是一个新的出发的起点。时间定为一年的用意，就是希望所有参加的选手能够在这一个并不短暂的活动期内，找到自己喜欢且值得去努力钻研的游戏，按照自己节奏去慢慢的研究并熟悉，而不是匆匆忙忙只是为了达成速通而去打一款游戏。<br/><br/>

      　　从完全陌生到熟悉再到尝试速通，这是一个需要累积的过程，也是一条艰难的道路。所以为什么不尝试着从自己熟悉的游戏开始尝试速通。前行的道路上会有挫折有困难，但是我相信你总会找到突破口，突破自己，越过障碍。<br/><br/>

      　　希望在一年的活动完成后，回头望望，能够看到自己一路走过来的历程，能够对自己的成绩与进步感到骄傲。<br/><br/>

      　　当然，永远不要忘记一点：<br/><br/>

      　　<strong style={{ fontSize: '1.5rem', color: 'gold' }}>玩游戏，你快乐吗</strong><br/><br/>

      　　那么，我在此向愿往前路赴行者致敬<br/>
      　　愿各位在这条道路上披荆斩棘<br/>
      　　Run together not alone<br/>
      　　Running in the 19!<br/>
    </div>
  </div>
  </>
)