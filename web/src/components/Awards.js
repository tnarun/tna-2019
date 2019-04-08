import css from './Awards.scss'

import btaxl from '../assets/images/award/4-btaxl.png'
import btbf from '../assets/images/award/4-btbf.png'
import benq27 from '../assets/images/award/benq27.png'

const axllink = 'https://j.youzan.com/x9Xtw9'
const bflink = 'https://j.youzan.com/Mlqtw9'
const benqlink = 'https://detail.tmall.com/item.htm?spm=a230r.1.14.15.5082ddd2Nmorhq&id=558428136903&ns=1&abbucket=14&skuId=3638575135779'

export default () => {
  return (
    <>
    <div className={ css.awarddesc }>
      <h4>四月活动奖品</h4>
      <div className={ css.awd }>
        <a href={ axllink } target='_blank' rel='noopener noreferrer'>北通阿修罗2游戏手柄</a> × <span>3</span></div>
      <div className={ css.awd }>
      <a href={ bflink } target='_blank' rel='noopener noreferrer'>北通蝙蝠2游戏手柄</a> × <span>7</span></div>
    </div>
    <div className={ css.awards }>
      <div className={ css.award }>
        <a href={ axllink } target='_blank' rel='noopener noreferrer'><img src={ btaxl } alt='北通阿修罗2游戏手柄' /></a>
      </div>
      <div className={ css.award }>
      <a href={ bflink } target='_blank' rel='noopener noreferrer'><img src={ btbf } alt='北通蝙蝠2游戏手柄' /></a>
      </div>
    </div>
    <br/>

    <div className={ css.awarddesc }>
      <h4>连续出勤大奖</h4>
      <div className={ css.awd }>
        <a href={ benqlink } target='_blank' rel='noopener noreferrer'>明基27寸爱眼显示器EW277HDR</a> × <span>2</span></div>
    </div>
    <div className={ css.awards }>
      <div className={ css.award }>
        <a href={ benqlink } target='_blank' rel='noopener noreferrer'><img src={ benq27 } alt='明基27寸爱眼显示器EW277HDR' /></a>
      </div>
    </div>
    </>
  )
}