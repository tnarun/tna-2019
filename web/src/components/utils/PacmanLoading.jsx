import css from './PacmanLoading.scss'

export default () => (
  <div className={ css.loader }>
    <div className={ css.circles }>
      <span className={ css.one }></span>
      <span className={ css.two }></span>
      <span className={ css.three }></span>
    </div>
    <div className={ css.pacman }>
      <span className={ css.top }></span>
      <span className={ css.bottom }></span>
      <span className={ css.left }></span>
      <div className={ css.eye }></div>
    </div>
  </div>
)