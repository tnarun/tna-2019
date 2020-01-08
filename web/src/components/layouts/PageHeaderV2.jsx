import css from './PageHeaderV2.scss'

export default (props) => {
  let _himg = props.himg ? (
    <div className={ css.himg } style={{
      backgroundImage: `url(${ props.himg })`
    }}></div>
  ) : null

  return (
    <div className={ css.pgheader }>
      { _himg }
      <div className={ css.hc }>
        { props.children }
      </div>
    </div>
  )
}