import css from './_layout.scss'

export default (props) => {
  return (
    <div className={ css.gameLayout }>
      { props.children }
    </div>
  )
}