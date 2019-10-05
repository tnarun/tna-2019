import React from 'react'

import css from './layouts.scss'

const urls = [
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-10-02/ads/awd-ns.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-10-02/ads/awd-bt.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-10-02/ads/awd-bq.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-10-02/ads/awd-d2.png',
  'http://tna-upload.oss-cn-shanghai.aliyuncs.com/assets/2019-10-02/ads/awd-ds.png',
]

export default class LayoutAD extends React.Component {
  render () {
    let { currentIdx } = this.state

    let _imgs = urls.map((imgurl, idx) => {
      let className = currentIdx === idx ? `${ css.ad } ${ css.show }` : `${ css.ad }`

      return <div 
        key={ idx }
        className={ className } style={{ backgroundImage: `url(${imgurl})`}}
      ></div>
    })

    return <div className={ `${css.LayoutAD}` }>
      { _imgs }
    </div>
  }

  state = {
    currentIdx: 0
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      let { currentIdx } = this.state
      currentIdx = currentIdx + 1
      if (currentIdx >= urls.length) { currentIdx = 0 }
      this.setState({ currentIdx })
    }, 7000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }
}