import React from 'react'
import css from './$id.scss'

import shimoAPI from '../../../api-shimo/shimo'
import formHeaderData from '../../../api-shimo/formHeaderData.json'

import { Container, Row, FlexBox } from '../../../components/FlexBox'
import SH3 from '../../../components/StrawberryH3'

export default class extends React.Component {
  render () {
    let { loading } = this.state
    let { data, headerData } = this.state

    return loading ? <div></div> : <div className={ css.shimoFormdata }>
      <Container>
        <Row>
          <FlexBox flex={ 6 }>
            <SH3>共 { data.total } 条结果</SH3>
            <Responses responses={ data.responses } headerData={ headerData } />
          </FlexBox>
        </Row>
      </Container>

      <h3></h3>
    </div>
  }

  state = {
    loading: true,
    data: null,
    headerData: null
  }

  async componentDidMount () {
    let { id } = this.props.match.params
    let data = await shimoAPI.formdata({ formGuid: id })
    let headerData = formHeaderData[id]
    this.setState({ data: data.data, headerData, loading: false })
  }
}

class Responses extends React.Component {
  render () {
    let { responses, headerData } = this.props

    let showIds = headerData.filter(x => !x.disabled).map(x => x.id)
    console.log({ showIds })

    let trs = responses.map((x, idx) => {
      let tds = x.data
      .filter(y => showIds.includes(y.guid))
      .map((y, idy) => {
        let { content } = y.text

        return <td key={ idy }>{ content }</td>
      })

      return <tr key={ idx }>
        { tds }
      </tr>
    })

    return <div className={ css.Responses }>
      <table className={ css.records }>
        <Fheader headerData={ headerData } /> 
        <tbody>
          { trs }
        </tbody>
      </table>
    </div>
  }
}

class Fheader extends React.Component {
  render () {
    let { headerData } = this.props

    let ths = headerData
    .filter(x => !x.disabled)
    .map((x, idx) => {
      return <th key={ idx }>{ x.alias || x.name }</th>
    })

    return <thead className={ css.Fheader }>
      <tr>
        { ths }
      </tr>
    </thead>
  }
}