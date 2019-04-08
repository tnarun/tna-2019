import css from './GoldLink.scss'

const GoldLink = (props) => {
  return (
    <div className={ css.goldlink }>
      <a href={ props.href }>{ props.children }</a>
    </div>
  )
}

const ArrowLink = (props) => {
  return (
    <div className={ css.arrowlink }>
      <a { ...props }>
        <div className={ css.arrow }></div>
        { props.children }
      </a>
    </div>
  )
}

const GrayLink = (props) => {
  return (
    <div className={ css.graylink }>
      <a href={ props.href }>{ props.children }</a>
    </div>
  )
}

const BackLink = (props) => {
  return (
    <div className={ css.backlink }>
      <a href={ props.href }>{ props.children }</a>
    </div>
  )
}

export { GoldLink, GrayLink, BackLink, ArrowLink }