import React from 'react'
import data from '../../assets/submit-data/0612.json'

import SH3 from '../../components/StrawberryH3'
import { Container, Row, FlexBox, IBox } from '../../components/FlexBox'

import css from './publicity.scss'
import moment from 'moment'

export default class extends React.Component {
  state = {
    records: []
  }

  async componentDidMount () {
    // console.log({ data })
    this.setState({ records: data })
  }

  render () {
    let { records } = this.state

    let _records = records.map((x, idx) => {
      return (
        <tr className={ css.record }>
          <td>{ 
            moment(x['时间']).format('MM-DD')
          }</td>
          <td>{ x['Speedrunid'] }</td>
          {/* <td>{ x['Bilibiliid'] }</td> */}
          {/* <td>{ x['Liveroom'] }</td> */}
          <td>
            { x['Type'].includes('更新') ? '更新' : '提交' }
          </td>
          <td>{ x['Game'] }</td>
          <td>{ x['total'] } / { x['ranking'] }</td>
          <td>
            <a href={ x['Link'] } target='_blank'>访问</a>
          </td>
        </tr>
      )
    })

    return <div>
      <Container>
        <Row>
          <FlexBox flex={ 6 }>
            <SH3>4 - 6 月已提交成绩公示</SH3>
            <table className={ css.records }>
              <thead>
                <tr>
                  <th>提交时间</th>
                  <th>speedrun id</th>
                  {/* <th>bilibili id</th> */}
                  {/* <th>直播间</th> */}
                  <th>提交类型</th>
                  <th>游戏</th>
                  <th>总人数/排名</th>
                  <th>成绩链接</th>
                </tr>
              </thead>
              <tbody>
                { _records }
              </tbody>
            </table>
          </FlexBox>
        </Row>
      </Container>
    </div>
  }
}