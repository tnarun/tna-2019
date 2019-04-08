import css from './index.scss';

const BasicLayout = (props) => {
  return (
    <div className={ css.BasicLayout }>
      <div className={ css.bg }></div>
      { props.children }
    </div>
  )
}

export default BasicLayout