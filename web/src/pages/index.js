import css from './index.scss'
import PageHeader from '../components/PageHeader'

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

          <a className={ css.ok } href='/rit19/'>Running In The '19</a>
          <a className={ css.ok } href='/shot19/'>SHoot Out The '19</a>

          <a className={ css.no } href='/'>TNA 2 - 整理中</a>
          <a className={ css.no } href='/'>TNA 1 - 整理中</a>
        </div>
      </div>
    </div>
  )
}
