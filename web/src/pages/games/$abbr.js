import React from 'react'
import css from './$abbr.scss'
import gameAPI from '../../api-client/gameAPI'
import { Container, Row, FlexBox } from '../../components/FlexBox'
import CategoriesTab from '../../components/games/CategoriesTab'
import GameHeader from '../../components/games/GameHeader'
import PacmanLoading from '../../components/utils/PacmanLoading'

export default class extends React.Component {
  state = {
    game: null,
    isLoading: true
  }

  async componentWillMount () {
    let { abbr } = this.props.match.params
    let { game } = await gameAPI.getOne({ abbr })
    this.setState({ game, isLoading: false })
    document.title = `${game.speedrunData.names.international} - 排行榜 - tnarun.com`
  }

  render () {
    if (this.state.isLoading) {
      return <Container>
        <Row>
          <FlexBox flex={ 1 }>
            <div className={ css.loading }>
              <div className={ css.desc }>正在加载游戏数据</div>
              <PacmanLoading />
            </div>
          </FlexBox>
        </Row>
      </Container>
    }

    let { game } = this.state
    if (game) {
      return (
        <div className={ css.game }>
          <Container>
            <Row>
              <FlexBox flex={ 1 }>
                <GameHeader game={ game } />
              </FlexBox>
            </Row>
            <Row>
              <FlexBox flex={ 3 }>
                <CategoriesTab game={ game } />
              </FlexBox>
            </Row>
          </Container>
        </div>
      )
    }

    return <div>没有这个游戏</div>
  }
}