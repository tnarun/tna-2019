import React from 'react'
import css from './Logo.scss'
import SItemCount from './SItemCount'

class Logo extends React.Component {
  render () {
    return <div className={ css.Logo }>
      <h2>TNA Special</h2>
      <img src='https://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/tnasplogo.png' alt='logo' />
    </div>
  }
}

class Store {
  constructor () {
    this.list = []
  }

  async load () {
    let url = `https://tna-upload.oss-cn-shanghai.aliyuncs.com/afdian-data/newest.json?r=${Math.random()}`
    let res = await fetch(url)
    let data = await res.json()
    let list = data.list.filter(x => x.create_time > 1580515200)
    this.list = list
  }

  get total () {
    let sum = 0
    for (let x of this.list) {
      let amount = ~~parseFloat(x.total_amount)
      sum += amount
    }
    return sum
  }
}

class AFDLogo extends React.Component {
  // render () {
  //   return <div className={ css.AFDLogo }>
  //     {/* <h2>特别鸣谢：爱发电</h2> */}
  //     {/* <img src='https://tna-upload.oss-cn-shanghai.aliyuncs.com/kksk2/afdlogo.png' alt='logo' /> */}
  //     <img src='//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/logo2019.png' alt='logo' />
  //   </div>
  // }

  constructor (props) {
    super(props)
    this.state = {
      list: [],
      total: 0
    }
  }

  render () {
    let { list } = this.state

    return <div className={ css.SCount }>
      <div className={ css.imgcover }>
        <img src='//tna-web.oss-ap-southeast-1.aliyuncs.com/assets/logo2019.png' alt='logo' />
      </div>
      <SItemCount list={ list } filter='健身环' label='健身环' max={ 1500 } /> 
      <SItemCount list={ list } filter='神秘' label='神秘项目' /> 
      <SItemCount list={ list } filter='雷狼龙' label='雷狼龙' /> 
      <SItemCount list={ list } filter='黑轰龙' label='黑轰龙' plus={ 10 } /> 
      <SItemCount list={ list } filter='马里奥' label='马造2' /> 
    </div>
  }

  async componentDidMount () {
    let store = new Store()
    await store.load()
    this.setState({ list: store.list })

    this.timer = setInterval(async () => {
      await store.load()
      this.setState({ list: store.list })
    }, 120 * 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }
}

export {
  Logo, AFDLogo
}