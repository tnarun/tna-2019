// title: KKSK 2

import React from 'react'
import css from './index.scss'

import PageHeader from '../../components/layouts/PageHeaderV2'
import WidthContainer from '../../components/layouts/WidthContainer'
import Logo from '../../components/grids/Logo'

import HangZhouMap from '../../components/kksk2/HangZhouMap'
import Days from '../../components/kksk2/Days'

// import classNames from 'classnames/bind'

import net from 'net'

// const BAOMING_URL = 'https://shimo.im/forms/JGQ8DhRqYHT3dWhJ/fill'
const HUYA_ROOM = 'https://www.huya.com/114514'


export default class extends React.Component {
  render () {
    return <div className={ css.kksk2 }>
      <WidthContainer>
        <PageHeader>
          <div className={ css.hd }>
            <div className={ css.kksklogo }></div>
            <div>
              <h1>KKSK 2</h1>
              <h2>核聚变 · 速通现场秀 · 杭州站</h2>
            </div>
          </div>
        </PageHeader>
      </WidthContainer>

      <WidthContainer>
        <BaseInfo />
        <Days />
        {/* <Games /> */}
      </WidthContainer>

      <WidthContainer>
        <div className={ css.faqtimeline }>
          <HangZhou />
          <div className={ css.timeline }>
            <h2>Timeline 时间线</h2>
            <Timeline />
          </div>
        </div>
      </WidthContainer>
    </div>
  }

  componentDidMount () {
    console.log(net)
  }
}

const BaseInfo = () => {
  return <div className={ css.timeandreg }>
    <a className={ css.huya } href={ HUYA_ROOM } target='_blank' rel='noopener noreferrer'>
      <div className={ css.gridName }>直播</div>
      <div className={ css.logoi }>
        <Logo src='//tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-09-29/huya.png' />
      </div>
    </a>

    <div className={ css.time }>
      <div className={ css.gridName }>日期</div>
      <h2>2019. OCT. 19 - 20</h2>
    </div>

    <a className={ css.gcores } href='https://www.gcores.com/articles/113979' target='_blank' rel='noopener noreferrer'>
      <div className={ css.gridName }>主办方</div>
      <div className={ css.logoi }>
        <Logo src='//tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-09-29/gcore.png' />
      </div>
    </a>
  </div>
}

const Timeline = () => {
  return <div className={ css.Timeline }>
    <div className={ css.duetimepoint }>
      <div className={ css.date }>2019-08-21</div>
      <div className={ css.event }>
        <span>活动公布，开始筹备</span>
      </div>
    </div>
    <div className={ css.duetimepoint }>
      <div className={ css.date }>2019-10-01</div>
      <div className={ css.event }>
        <span>公布节目单</span>
      </div>
    </div>
    <div className={ css.duetimepoint }>
      <div className={ css.date }>2019-10-19</div>
      <div className={ css.event }>
        <span>核聚变杭州站现场活动</span>
      </div>
    </div>
  </div>
}

const HangZhou = () => {
  return <div className={ css.HangZhou }>
    <HangZhouMap />
  </div>
}