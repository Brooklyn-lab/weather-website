import ButtonBack from '../button-back/button-back'
import ButtonUpdate from '../button-update/button-update'

import './navigate.scss'

type NavigateProps = {
  cityName: string
}

function Navigate({ cityName }: NavigateProps): JSX.Element {
  return (
    <div className="navigate">
      <ButtonBack />
      <ButtonUpdate cityName={cityName} textButton="Update Weather" />
    </div>
  )
}

export default Navigate
