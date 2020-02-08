import React from 'react'

import css from './index.scss'
import PageHeader from '../components/layouts/PageHeaderV2'
import TNALogo from '../components/grids/TNALogo'
import KKSKLogo from '../components/grids/KKSKLogo'
import TNASPLogo from '../components/grids/TNASPLogo'
import WidthContainer from '../components/layouts/WidthContainer'
import PageTopBlue from '../components/layouts/PageTopBlue'

export default () => {
  return (
    <div className={ css.index }>
      <PageTopBlue height={ '24rem' }/>
      
      <PageHeader>
        <h1 className={ css.siteENTitle } >Together Not Alone</h1>
        <h2 className={ css.siteCNTitle }>中文速通圈活动站</h2>
      </PageHeader>

      <WidthContainer>
        <div className={ css.showGrids }>
          <div className={ css.logo }>
            <TNASPLogo />
          </div>

          <div className={ css.show }>
            <a className={ css.xgames } href='/ncovhelp'>
              <div className={ css.s1 }>TNA SP</div>
              <div className={ css.s2 }>特别直播援助活动</div>
              <div className={ css.s3 }>加油！</div>
            </a>
          </div>

          <div className={ css.show }>
            <a className={ css.xgames } href='https://afdian.net/@TNAmarathon'>
              <div className={ css.s1 }>TNA SP</div>
              <div className={ css.s2 }>捐助地址</div>
              <div className={ css.s3 }>afdian.net/@TNAmarathon</div>
            </a>
          </div>
        </div>
      </WidthContainer>

      <WidthContainer>
        <div className={ css.showGrids }>
          <div className={ css.logo }>
            <TNALogo />
          </div>

          <div className={ css.show }>
            <div className={ css.tnaTitle }>
              <div className={ css.actType }>线上活动</div>
              <div className={ css.actName }>TNA Marathon</div>
            </div>
            <div className={ css.tna1tna2 }>
              <div className={ css.tna1 }>
                <div className={ css.season }>Season 1</div>
              </div>
              <div className={ css.tna2 }>
                <div className={ css.season }>Season 2</div>
              </div>
            </div>
            <a className={ css.tna3 } href='/tna3'>
              <div className={ css.s1 }>Season 3</div>
              <div className={ css.s2 }>2019-10-04</div>
            </a>
          </div>

          <div className={ css.show }>
            <a className={ css.ritTitle } href='/rit19'>
              <div className={ css.actType }>长期活动</div>
              <div className={ css.actName }>RIT '2019</div>
            </a>
            <a className={ css.shotTitle } href='/shot19'>
              <div className={ css.actType }>长期活动</div>
              <div className={ css.actName }>SHOT '2019</div>
            </a>
          </div>
        </div>
      </WidthContainer>

      <WidthContainer>
        <div className={ css.showGrids }>
          <div className={ css.logo }>
            <KKSKLogo />
          </div>

          <div className={ css.show }>
            <div className={ css.kkskTitle }>
              <div className={ css.actType }>线下活动</div>
              <div className={ css.actName }>KKSK Live</div>
            </div>
            <a className={ css.kksk1 } href='/kksk'>
              <div className={ css.season }>
                <div>Station 1</div>
                <div className={ css.s }>北京站</div>
              </div>
            </a>
            <a className={ css.kksknext } href='/kksk2'>
              <div className={ css.s1 }>Station 2</div>
              <div className={ css.s2 }>杭州站</div>
            </a>
          </div>
        </div>
      </WidthContainer>

      <WidthContainer>
        <Footer />
      </WidthContainer>
    </div>
  )
}

const Footer = () => {
  return <div className={ css.gamefooter }>
    <div className={ css.fg1 }>TNA 组委会 &copy; 2019</div>
    <div className={ css.fg }>
      <label>新浪微博</label>
      <a href='https://weibo.com/u/5288344073' target='_blank' rel='noopener noreferrer'>@TNA速通会</a>
    </div>
    <div className={ css.fg }>
      <label>组织策划</label>
      <a href='https://weibo.com/u/1663513370' target='_blank' rel='noopener noreferrer'>@感受不到的风</a>
    </div>
    <div className={ css.fg }>
      <label>技术开发</label>
      <a href='https://weibo.com/ben7th' target='_blank' rel='noopener noreferrer'>@洋气书生</a>
    </div>
  </div>
}