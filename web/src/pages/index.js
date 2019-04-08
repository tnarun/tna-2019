import css from './index.scss'
import PageHeader from '../components/PageHeader'
import { GoldLink, GrayLink } from '../components/GoldLink'

import tna from '../assets/images/tna.png'

export default () => {
  return (
    <div className={ css.index }>
      <PageHeader>
        <h1>TNA Speedrun</h1>
        <h2>Together Not Alone</h2>
      </PageHeader>

      <div className={ css.ct }>
        <img className={ css.tnalogo } src={ tna } alt='TNA LOGO'></img>

        <div className={ css.intro }>
          这里是中文圈游戏速通马拉松活动网站；<br/>
          我们正在筹备全新的活动；<br/>
          网站也在改版当中，敬请关注！<br/><br/>

          <GoldLink href='/rit19/'>2019 年特别线上速通活动</GoldLink>
          <GrayLink href='#'>TNA2 活动档案 - 整理中</GrayLink>
          <GrayLink href='#'>TNA1 活动档案 - 整理中</GrayLink>
        </div>
      </div>
    </div>
  )
}
