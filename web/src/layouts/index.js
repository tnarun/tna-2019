import css from './index.scss';

const Layout = (props) => {
  if (props.location.pathname === '/kksk2') {
    return <KKSK2Layout>{ props.children }</KKSK2Layout>
  }

  return (
    <div className={ css.BasicLayout }>
      <div className={ css.bg }></div>
      { props.children }
    </div>
  )
}

const KKSK2Layout = (props) => {
  return (
    <div className={ css.KKSK2Layout }>
      <div className={ css.bg }></div>
      { props.children }
    </div>
  )
}

export default Layout