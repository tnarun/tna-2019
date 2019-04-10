import css from './Card.scss'

const Card = (props) => {
  let className = [ css.card, props.className ].join(' ')

  return (
    <div className={ className }>
      <div className={ css.cover }>
        <img src={ props.img } alt={ props.img } />
      </div>
      <div className={ css.info }>
        { props.children }
      </div>
    </div>
  )
}

export default Card