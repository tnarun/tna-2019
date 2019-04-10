import css from './MODS.scss'
import React from 'react'

import ori from '../assets/images/mods/ori.png'
import celeste from '../assets/images/mods/celeste.png'
import sekiro from '../assets/images/mods/sekiro.png'
import re2 from '../assets/images/mods/re2.png'
import Card from './Card'

const MODItem = ({ img, cn, eng, rule, link }) => (
  <Card img={ img }>
    <div className={ css.moditeminfo }>
      <h4>{ cn }</h4>
      <h5>{ eng }</h5>
      <h6>{ rule }</h6>
      <SPlink link={ link } />
    </div>
  </Card>
)

export default class extends React.Component {
  render () {
    return (
      <div className={ css.moditems }>
        <MODItem 
          img={ ori } 
          cn='奥日与黑暗森林'
          eng='Ori and the Blind Forest'
          rule='Any%'
          link='https://www.speedrun.com/ori#Any' />

        <MODItem 
          img={ celeste } 
          cn='蔚蓝山/塞莱斯特'
          eng='Celeste'
          rule='Any%'
          link='https://www.speedrun.com/Celeste#Any' />

        <MODItem 
          img={ sekiro } 
          cn='只狼：影逝二度'
          eng='Sekiro: Shadows Die Twice'
          rule='任意规则'
          link='https://www.speedrun.com/sekiro' />

        <MODItem 
          img={ re2 } 
          cn='生化危机 2 2019 重制版'
          eng='Resident Evil 2 (2019)'
          rule='任意规则'
          link='https://www.speedrun.com/re2remake' />
      </div>
    )
  }
}

const SPlink = (props) => {
  let text = props.link.split('https://www.')[1]

  return (
    <>
      <div className={ css.splink }>speedrun 链接：</div>
      <div className={ css.splinka }><a href={ props.link } target='_blank' rel='noopener noreferrer'>{ text }</a></div>
    </>
  )
}