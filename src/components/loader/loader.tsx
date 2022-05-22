import './loader.scss'

function Loader(): JSX.Element {
  return (
    <div className="preloader">
      <div className="preloader__row">
        <div className="preloader__item" />
        <div className="preloader__item" />
      </div>
    </div>
  )
}

export default Loader
