import React from 'react'
import css from './submit.scss'

import { Container, Row, FlexBox } from '../../components/FlexBox'
import PacmanLoading from '../../components/utils/PacmanLoading'
import RunStore from '../../api-speedrun-v2/RunStore'
import classNames from 'classnames/bind'

export default class submit extends React.Component {
  render () {
    return <div className={ css.submit }>
      <Container>
        <Row>
          <FlexBox flex={ 1 }>
            <Form />
          </FlexBox>
        </Row>
      </Container>
    </div>
  }
}

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'https://www.speedrun.com/sekiro/run/y21w397z'
    }
  }

  render () {
    let match = this.urlMatch()
    let disabled = !match

    return <div className={ css.Form }>
      <h2>RIT'20 成绩提交页面 (beta)</h2>
      <p>2020 年，我们简化了成绩提交的方式：在下面的输入框粘贴你的 speedrun 成绩地址，我们会帮你填写好表单里的完整内容 <span role='img' aria-label='laugh'>😆</span></p>
      <div className={ css.ipt }>
        <input 
          className={ css.urlinput } 
          value={ this.state.value } 
          placeholder='例如: https://www.speedrun.com/sekiro/run/y21w397z'
          onChange={ evt => this.setState({ value: evt.target.value })}
        />
        <button
          disabled={ disabled }
          onClick={ evt => this.readURL() }
        >确定</button>
      </div>
      {
        match ? <p className={ css.ok }>成绩网址 OK</p> : <p>请粘贴正确的网址</p>
      }
      {
        this.state.loading ? <div>
          <PacmanLoading />
          <p>正在读取……</p>
        </div> : null
      }
      {
        this.state.store ?
          <Detail url={ this.state.value } store={ this.state.store } /> : null
      }
    </div>
  }

  urlMatch () {
    let r = /(https|http)\:\/\/www\.speedrun\.com\/(.+)\/run\/([a-z0-9]+)/
    let match = this.state.value.match(r)
    return match
  }

  async readURL () {
    let match = this.urlMatch()
    let id = match[3]

    this.setState({ loading: true })

    let rs = new RunStore({ id })
    // await rs.loadSample()
    await rs.load()
    this.setState({ loading: false, store: rs })
  }
}

class Detail extends React.Component {
  render () {
    let { store, url } = this.props

    return <div className={ css.Detail }>
      <div className={ css.di }><label>Runner：</label><span>{ store.runnerName }</span></div>
      <div className={ css.di }><label>时长：</label><span>{ store.playTime }</span></div>
      <hr />

      <div className={ css.di }><label>成绩链接：</label><a href={ url } target='_blank' rel='noopener noreferrer'>{ url }</a></div>
      <div className={ css.di }><label>游戏名称：</label><span>{ store.gameName }</span></div>
      <div className={ css.di }><label>速通规则：</label><span>{ store.categoryName }</span></div>
      <div className={ css.di }><label>视频地址：</label><a href={ store.videoURL } target='_blank' rel='noopener noreferrer'>{ store.videoURL }</a></div>
      <div className={ css.di }><label>SR 提交时间：</label><span>{ store.submitTime }</span></div>
      <div className={ css.di }><label>SR 审核时间：</label><span>{ store.verifyTime }</span></div>
      <hr />

      <div className={ css.di }><label>榜单分类：</label><CurrentRunVars data={ store.currentRunVars } /></div>
      <div className={ css.di }><label>榜单人数：</label><span>{ store.leaderboardLength }</span></div>
      <div className={ css.di }><label>成绩名次：</label><span>{ store.currentRunPlace }</span></div>
    </div>
  }
}

class CurrentRunVars extends React.Component {
  render () {
    let { data } = this.props
    let _vars = data.map(d => {
      let _labels = d.allLabels.map(l => {
        let className = classNames.bind(css)({
          label: true,
          current: l === d.currentLabel
        })
        return <span key={ l } className={ className }>{ l }</span>
      })
      return <div key={ d.key }>
        <div className={ css.varName }>{ d.name }</div>
        <div>{ _labels }</div>
      </div>
    })
    return <div className={ css.CurrentRunVars }>
      { _vars }
    </div>
  }
}