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
      return (
        <div className={ css.game }>
          <Container>
            <Row>
              <FlexBox flex={ 1 }>
                <div className={ css.loading }>
                  <div className={ css.desc }>正在加载游戏数据</div>
                  <PacmanLoading />
                </div>
              </FlexBox>
            </Row>
          </Container>
        </div>
      )
    }

    let { game } = this.state
    if (game) {
      return (
        <div className={ css.game }>
          <Container>
            <Row>
              <FlexBox flex={ 1 }>
                <GameHeader game={ game } />
                <div className={ css.intro }>
                  声明：tnarun.com 所显示的全部排行榜数据均来自于 <a href='https://www.speedrun.com' target='_blank' rel='noopener noreferrer'>speedrun.com</a>, 使用 <a href='https://github.com/speedruncomorg/api' target='_blank' rel='noopener noreferrer'>speedrun API</a> 采集。
                </div>
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