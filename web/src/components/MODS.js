import css from './MODS.scss'
import React from 'react'

import ori from '../assets/images/mods/ori.png'
import celeste from '../assets/images/mods/celeste.png'
import sekiro from '../assets/images/mods/sekiro.png'
import re2 from '../assets/images/mods/re2.png'

export default class extends React.Component {
  render () {
    return (
      <div>
        <h3>四月 MOD 推荐游戏项目</h3>
        <div className={ css.mod }>
          <div className={ css.cover }>
            <img src={ ori } />
          </div>
          <div className={ css.info }>
            <h4>奥日与黑暗森林</h4>
            <h4>Ori and the Blind Forest</h4>
            <h5>Any%</h5>
            <SPlink link='https://www.speedrun.com/ori#Any' />
          </div>
        </div>
        <div className={ css.mod }>
          <div className={ css.cover }>
            <img src={ celeste } />
          </div>
          <div className={ css.info }>
            <h4>蔚蓝山/塞莱斯特</h4>
            <h4>Celeste</h4>
            <h5>Any%</h5>
            <SPlink link='https://www.speedrun.com/Celeste#Any' />
          </div>
        </div>
        <div className={ css.mod }>
        <div className={ css.cover }>
            <img src={ sekiro } />
          </div>
          <div className={ css.info }>
            <h4>只狼：影逝二度</h4>
            <h4>Sekiro: Shadows Die Twice</h4>
            <h5>任意规则</h5>
            <SPlink link='https://www.speedrun.com/sekiro' />
          </div>
        </div>
        <div className={ css.mod }>
          <div className={ css.cover }>
            <img src={ re2 } />
          </div>
          <div className={ css.info }>
            <h4>生化危机 2 2019 重制版</h4>
            <h4>Resident Evil 2 (2019)</h4>
            <h5>任意规则</h5>
            <SPlink link='https://www.speedrun.com/re2remake' />
          </div>
        </div>
      </div>
    )
  }
}

const SPlink = (props) => {
  return (
    <>
      <div className={ css.splink }>speedrun 链接：</div>
      <div><a href={ props.link } target='_blank' rel='noopener noreferrer'>{ props.link }</a></div>
    </>
  )
}