import ButtonBack from '../button-back/button-back'
import ButtonUpdate from '../button-update/button-update'
import { Coord } from '../../types/weather'
import './navigate.scss'

type NavigateProps = {
  cityName: string
  coord?: Coord
}

function Navigate({ cityName, coord }: NavigateProps): JSX.Element {
  return (
    <div className="navigate">
      <ButtonBack />
      <ButtonUpdate cityName={cityName} textButton="Update Weather" coord={coord} />
    </div>
  )
}

export default Navigate
