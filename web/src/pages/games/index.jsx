import React from 'react'

import css from './index.scss'
import PageHeader from '../../components/PageHeader'
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
  return <PageHeader>
    <h1>TNA Games</h1>
    <h2>Game Info & Speedrun</h2>
  </PageHeader>
}