import React from 'react'
import css from './TextRoll.scss'

export default class TextRoll extends React.Component {
  render () {
    return <div className={ css.TextRoll }>
      <span className={ css.web }>
        <span className={ css.s }>捐助方式见：</span>
        <span className={ css.url }>tnarun.com/ncovhelp</span>
      </span>
      <span className={ css.biaoyu }>
        万众一<span>心</span>，<span>战胜</span>困难，拥抱<span>希望！</span>
      </span>
    </div>
  }
}