import css from './PageHeader.scss'

export default (props) => {
  return (
    <div className={ css.pgheader }>
      <div className={ css.hc }>
        { props.children }
      </div>
    </div>
  )
}