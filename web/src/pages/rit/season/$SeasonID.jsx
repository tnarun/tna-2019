import React from 'react'
import css from './season.scss'
import SeasonStore from '../../../ap-rit-records/SeasonStore'
import { Container, Row, FlexBox, HR } from '../../../components/FlexBox'
import SeasonNav from '../../../components/rit19/SeasonNav'
import Season from '../../../components/rit19/Season'
import RITStore from '../../../ap-rit-records/RITStore'
import ModGames from '../../../components/rit19/ModGames'
import Prizes from '../../../components/rit19/Prizes'
import SH3 from '../../../components/StrawberryH3'

export default class  extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      SeasonID: this.props.match.params.SeasonID,
      seasonStore: null,
      ritStore: null
    }
  }

  render () {
    let { SeasonID } = this.state
    let { seasonStore } = this.state

    return <SeasonNav SeasonID={ SeasonID }>
      <Container>
        <div className={ css.seasonHead }>
          <div>
            <SH3>本期主办方推荐游戏</SH3>
            <HR height='.5rem' />
            <ModGames SeasonID={ SeasonID } />
          </div>
          <HR height='1.5rem' />
          <div className={ css.board }>
            <SH3>本期奖品</SH3>
            <HR height='.5rem' />
            <Prizes SeasonID={ SeasonID } />
          </div>
        </div>
        <HR height='1.5rem' />
        <Row>
          <FlexBox flex={ 6 }>
            <SH3>各 Runner 有效成绩与抽奖次数计算</SH3>
            {
              seasonStore ? <Season store={ seasonStore } /> : null
            }
          </FlexBox>
        </Row>
      </Container>
    </SeasonNav>
  }

  async componentDidMount () {
    let ritStore = new RITStore()
    await ritStore.loadSeasons()
    let ritSeason = ritStore.getSeasonById(this.state.SeasonID)

    let seasonStore = new SeasonStore({ ritSeason })
    await seasonStore.load()
    this.setState({ seasonStore, ritStore })
  }
}