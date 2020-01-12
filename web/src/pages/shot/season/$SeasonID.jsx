// title: SHOT 成绩公示

import React from 'react'
import css from './season.scss'
import SHOTSeasonStore from '../../../ap-rit-records/SHOTSeasonStore'
import { Container, Row, FlexBox, HR } from '../../../components/FlexBox'
import SeasonNav from '../../../components/rit19/SeasonNav'
import SHOTSeason from '../../../components/rit19/SHOTSeason'
import SHOTStore from '../../../ap-rit-records/SHOTStore'
import Prizes from '../../../components/rit19/Prizes'
import SH3 from '../../../components/StrawberryH3'

export default class  extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      SeasonID: this.props.match.params.SeasonID,
      seasonStore: null,
      shotStore: null
    }
  }

  render () {
    let { SeasonID } = this.state
    let { seasonStore, shotStore } = this.state

    return <SeasonNav SeasonID={ SeasonID } prefix='/shot' activityName='SHOT'>
      {
        seasonStore ? <Container>
          <h2>RIT { shotStore.getSeasonById(SeasonID).name } 成绩公示</h2>
          <div className={ css.seasonHead }>
            <div className={ css.board }>
              <SH3>本期奖品</SH3>
              <HR height='.5rem' />
              <Prizes SeasonID={ SeasonID } />
            </div>
          </div>
          <HR height='1.5rem' />
          <Row>
            <FlexBox flex={ 6 }>
              <SH3>各选手有效成绩与抽奖次数计算</SH3>
              {
                seasonStore ? <SHOTSeason store={ seasonStore } /> : null
              }
            </FlexBox>
          </Row>
        </Container> : null
      }
      
    </SeasonNav>
  }

  async componentDidMount () {
    let shotStore = new SHOTStore()
    await shotStore.loadSeasons()
    let shotSeason = shotStore.getSeasonById(this.state.SeasonID)

    let seasonStore = new SHOTSeasonStore({ shotSeason })
    await seasonStore.load()
    this.setState({ seasonStore, shotStore })
  }
}