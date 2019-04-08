import css from './StrawberryH3.scss'

export default (props) => {
  return (
    <h3 className={ css.sh3 }>{ props.children }</h3>
  )
}