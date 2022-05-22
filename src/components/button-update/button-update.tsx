import { useAppDispatch } from '../../store/store'
import { fetchHourlyWeather, updateWeatherAction } from '../../store/weather/api-actions'
import UpdateIcon from '@mui/icons-material/Update'
import { Coord } from '../../types/weather'
import './button-update.scss'

type ButtonUpdateProps = {
  cityName: string
  textButton?: string
  coord?: Coord
}

function ButtonUpdate({ cityName, textButton, coord }: ButtonUpdateProps): JSX.Element {
  const dispatch = useAppDispatch()

  const updateCardHandler = () => {
    dispatch(updateWeatherAction(cityName))

    if (coord) {
      dispatch(fetchHourlyWeather(coord))
    }
  }

  return (
    <div className="button-update" onClick={updateCardHandler} role="button">
      {textButton ? <p className="button-update__text">{textButton}</p> : ''}
      <UpdateIcon fontSize="small" color="inherit" className="button-update__icon" htmlColor={'#fff'} />
    </div>
  )
}

export default ButtonUpdate
