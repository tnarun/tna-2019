import css from './Prizes.scss'

import btaxl from '../assets/images/award/4-btaxl.png'
import btbf from '../assets/images/award/4-btbf.png'
import benq27 from '../assets/images/award/benq27.png'
import gtx1660 from '../assets/images/award/gtx1660.png'
// import rtx2060 from '../assets/images/award/rtx2060.png'

import Card from './Card'

const axllink = 'https://j.youzan.com/x9Xtw9'
const bflink = 'https://j.youzan.com/Mlqtw9'
const benqlink = 'https://detail.tmall.com/item.htm?spm=a230r.1.14.15.5082ddd2Nmorhq&id=558428136903&ns=1&abbucket=14&skuId=3638575135779'

const Prize = ({ img, link, text, count, price }) => (
  <Card img={ img } className={ css.awdcard }>
    <div className={ css.prize }>
      <h5><a href={ link } target='_blank' rel='noopener noreferrer'>{ text }</a></h5>
      <div className={ css.count }>× { count }</div>
    </div>
  </Card>
)

export default () => {
  return (
    <>
    <div className={ css.prizes }>
      <h4>4-6 月活动奖品</h4>

      <Prize
        img={ btaxl }
        link={ axllink }
        text='北通阿修罗2游戏手柄'
        count='3'
        price='149.00' />

      <Prize
        img={ btbf }
        link={ bflink }
        text='北通蝙蝠2游戏手柄'
        count='7'
        price='69.00' />
    </div>

    <div className={ css.prizes }>
      <h4>连续出勤大奖</h4>

      <Prize
        img={ benq27 }
        link={ benqlink }
        text='明基27英寸爱眼显示器EW277HDR'
        count='2'
        price='1899.00' />

      <Prize
        img={ gtx1660 }
        text='七彩虹 igame GTX 1660ti'
        count='1'
        price='--' />
    </div>
    </>
  )
}