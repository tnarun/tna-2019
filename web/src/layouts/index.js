import css from './index.scss';

const Layout = (props) => {
  if (props.location.pathname.startsWith('/kksk2')) {
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
      <div className={ css.bg }>
        <video autoPlay={ true } muted={ true } loop={ true } playsInline={ true }>
          <source src='//alioss.gcores.com/page_resources/fusion2019_lite/videos/hangzhou.mp4' type='video/mp4' />
        </video>
      </div>
      { props.children }
    </div>
  )
}

export default Layout