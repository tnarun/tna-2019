import React from 'react'

import css from './index.scss'

import WidthContainer from '../../components/layouts/WidthContainer'
import BorderGrid from '../../components/tna-design/grids/BorderGrid'
import GridName from '../../components/tna-design/grids/GridName'

export default class DesignIndex extends React.Component {
  render () {
    return <div className={ css.DesignIndex }>
      <WidthContainer>
        <div className={ css.grids }>
          <BorderGrid>
            <GridName>TNA</GridName>
          </BorderGrid>
          <BorderGrid>
            <GridName>KKSK 看看谁快</GridName>
          </BorderGrid>
          <BorderGrid />
          <BorderGrid />
          <BorderGrid />
          <BorderGrid />
          <BorderGrid />
          <BorderGrid />
        </div>
      </WidthContainer>
    </div>
  }
}