import React from 'react'

import css from './index.scss'
import PageHeader from '../../components/layouts/PageHeaderV2'
import TNALogo from '../../components/grids/TNALogo'
import WidthContainer from '../../components/layouts/WidthContainer'

export default () => {
  return (
    <div className={ css.games }>
      <PH />
      <WidthContainer>
        <div className={ css.gamesgrids }>
          <div className={ css.logo }>
            <TNALogo />
          </div>
          <div className={ css.game }></div>
          <div className={ css.game }></div>
          <div className={ css.game }></div>
          <div className={ css.game }></div>
          <div className={ css.game }></div>
          <div className={ css.game }></div>
          <div className={ css.game }></div>
          <div className={ css.game }></div>
          <div className={ css.game }></div>
          <div className={ css.game }></div>
          <div className={ css.game }></div>
          <div className={ css.game }></div>
          <div className={ css.game }></div>
        </div>
      </WidthContainer>
    </div>
  )
}

const PH = () => {
  return <div className={ css.hd }><PageHeader>
    <h1>TNA Game Reactor</h1>
    <h2>速通反应堆</h2>
  </PageHeader></div>
}