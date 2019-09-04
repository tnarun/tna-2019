import React from 'react'
import css from './HangZhouMap.scss'

export default class HangZhouMap extends React.Component {
  render () {
    return <div className={ css.HangZhouMap }>
    </div>
  }

  async componentDidMount () {
    let res = await fetch('//tna-upload.oss-cn-shanghai.aliyuncs.com/assets/geo/china.geo.json')
    let chinaGeoJSON = await res.json()

    let HZPoint = [ 120.244815, 30.23606 ]

    console.log(chinaGeoJSON)

    let d3 = window.d3

    let w = 500
    let h = 250

    // プロジェクション設定	
    let projection = d3
      .geoMercator() // 投影法の指定
      .center(HZPoint) // 定位中心坐标
      .scale(w * 2)	// スケール（ズーム）の指定
      .translate([ w / 2, h / 2 ])
    
    // パスジェネレーター生成
    let path = d3.geoPath().projection(projection)
    
    // 地図用のステージ(SVGタグ)を作成
    let map = d3.select(`.${ css.HangZhouMap }`)
      .append("svg")
      .attr("width", '100%')
      .attr("height", '100%')
      // .attr("preserveAspectRatio", "xMaxYMax meet")
      .attr("viewBox", `0 0 ${w} ${h}`)

    map.selectAll("path")
			.data(chinaGeoJSON.features)
			.enter()
			.append("path")
			.attr("d", path)  //パスジェネレーターを使ってd属性の値を生成している
      // .attr("fill", "#f24827")
      .attr('fill', '#fdb762')
			.attr("fill-opacity", 0.1)
      // .attr("stroke", "#f24827")
      .attr('stroke', '#fdb762')
      .attr("stroke-width", '1px')

    let pHZ = projection(HZPoint)  

    map.append("circle")  
      .attr("class", css.point)  
      .attr("cx", pHZ[0])  
      .attr("cy", pHZ[1])  
      .attr("r", '6px')

    map.append("circle")  
      .attr("class", css.point1)  
      .attr("cx", pHZ[0])  
      .attr("cy", pHZ[1])  
      .attr("r", '6px')
    
    map.append("rect")  
      .attr("class", css.welcome)  
      .attr("x", pHZ[0])  
      .attr("y", pHZ[1])  
      .attr("width", 14 * 9)
      .attr('height', 14 * 2 + 22)

    map.append('text')
      .attr("class", css.welcomeT)  
      .attr("x", pHZ[0] + 7)  
      .attr("y", pHZ[1] + 14 + 6)  
      .text('杭州国际博览中心')

    map.append('text')
      .attr("class", css.welcomeT)  
      .attr("x", pHZ[0] + 7)  
      .attr("y", pHZ[1] + 14 + 6 + 14 + 6)  
      .text('欢迎你来玩')
  }
}