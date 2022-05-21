import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../store/store'
import { resetCities } from '../../store/weather/wetherSlice'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import './button-back.scss'

function ButtonBack(): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const backHandler = () => {
    dispatch(resetCities())
    navigate(-1)
  }

  return (
    <div className="button-back">
      <ArrowBackIcon className="button-back__icon" color="inherit" />
      <p className="button-back__text" onClick={backHandler}>
        Go Back
      </p>
    </div>
  )
}

export default ButtonBack
