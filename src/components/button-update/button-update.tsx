import { useAppDispatch } from '../../store/store'
import { updateWeatherAction } from '../../store/weather/api-actions'

import UpdateIcon from '@mui/icons-material/Update'
import './button-update.scss'

type ButtonUpdateProps = {
  cityName: string
  textButton?: string
}

function ButtonUpdate({ cityName, textButton }: ButtonUpdateProps): JSX.Element {
  const dispatch = useAppDispatch()

  const updateCardHandler = () => {
    dispatch(updateWeatherAction(cityName))
  }

  return (
    <div className="button-update">
      {textButton ? <p className="button-update__text">{textButton}</p> : ''}
      <UpdateIcon fontSize="small" color="inherit" className="button-update__icon" onClick={updateCardHandler} />
    </div>
  )
}

export default ButtonUpdate
