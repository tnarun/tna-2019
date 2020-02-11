import React from 'react'
import css from './afdian.scss'

import WidthContainer from '../../components/layouts/WidthContainer'
import moment from 'moment'

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

export default class Afdian extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      total: 0
    }
  }

  render () {
    let { list } = this.state

    return <div className={ css.Afdian }>
      <WidthContainer>
        <h1>爱发电筹款情况公示</h1>
        <h2>目前总金额： <span>¥ { this.state.total }.00</span></h2>
        {
          // list.length ? <Chart list={ list } /> : null
        }
        {
          list.length ? <ChartLine list={ list } /> : null
        }
      </WidthContainer>
    </div>
  }

  async componentDidMount () {
    let store = new Store()
    await store.load()
    this.setState({ list: store.list, total: store.total })

    // this.timer = setInterval(async () => {
    //   await store.load()
    //   this.setState({ list: store.list, total: store.total })
    // }, 120 * 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }
}

class Chart extends React.Component {
  render () {
    let { arr, max } = this.state

    let _arr = arr.map((x, idx) => {
      let amount = x[0]
      let time = moment(x[1]).format('MM-DD HH:mm:ss')
      let p = amount / max * 100
      return <div key={ idx } className={ css.item }>
        <div className={ css.bar } style={{ width: `${ p }%` }}></div>
        <div className={ css.time }>{ time }</div>
      </div>
    })

    return <div className={ css.Chart }>
      { _arr }
    </div>
  }

  state = {
    arr: [],
    max: 0
  }

  componentDidMount () {
    let list = this.props.list
    let timeList = list.map(x => {
      return { amount: ~~parseInt(x.total_amount), time: x.create_time * 1000 }
    })

    let startTime = new Date('2020-02-03 18:00').getTime()
    let endTime = new Date('2020-02-09 24:00').getTime()
    let part = 30 * 60 * 1000

    let arr = []
    let s = startTime
    while (true) {
      let e = s + part
      let sum = 0
      for (let d of timeList) {
        if (s <= d.time && d.time < e) {
          sum += d.amount
        }
      }
      arr.push([sum, s])
      if (e > endTime) { break }
      s = e
    }

    let max = 0
    for (let a of arr) {
      max = Math.max(a[0], max)
    }

    this.setState({ arr, max })
  }
}

class ChartLine extends React.Component {
  render () {
    return <div className={ css.ChartLine } ref={ node => this.$node = node }>

    </div>
  }

  componentDidMount () {
    let startTime = new Date('2020-02-08 12:00').getTime()
    let endTime = new Date('2020-02-09 24:00').getTime()

    let timeList = this.props.list.map(x => {
      return { amount: ~~parseInt(x.total_amount), time: x.create_time * 1000 }
    }).reverse().filter(x => {
      return x.time > startTime && x.time < endTime
    })
    
    let sum = 0
    let data = []
    for (let d of timeList) {
      sum = sum + d.amount
      data.push({ sum, time: d.time })
    }
    console.log(timeList, data, window.d3)

    // d3
    let d3 = window.d3

    let width = 1600
    let height = 900
    let margin = { top: 50, right: 50, bottom: 50, left: 50 }

    // d3.extent 返回最大和最小值
    let xDomain = d3.extent(data, d => d.time)
    let xRange = [ margin.left, width - margin.right ]
    let xScale = d3.scaleTime()
      .domain(xDomain)
      .range(xRange)

    let yMax = d3.max(data, d => d.sum)
    let yRange = [ height - margin.bottom, margin.top ]
    let yScale = d3.scaleLinear()
      .domain([0, yMax]).nice()
      .range(yRange)

    let line = d3.line()
      .x(d => xScale(d.time))
      .y(d => yScale(d.sum))

    console.log(line)

    let xAxis = g => g
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(
        d3.axisBottom(xScale)
          .ticks(width / 40)
          .tickSizeOuter(0)
          .tickFormat(time => moment(time).format('HH:mm'))
      )

    let yAxis = g => g
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale))
      .call(g => g.select(".domain").remove())
      .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))

    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height]);
  
    svg.append("g")
        .call(xAxis);
  
    svg.append("g")
        .call(yAxis);
  
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "gold")
      .attr("stroke-width", 1)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);

    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.time))
      .attr('cy', d => yScale(d.sum))
      .attr('r', 3)
      .attr('fill', (d, idx) => 'red');
  
    let node = svg.node();
    console.log(node)

    this.$node.appendChild(node)
  }
}