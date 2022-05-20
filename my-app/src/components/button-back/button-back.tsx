import { useNavigate } from 'react-router'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import './button-back.scss'

function ButtonBack(): JSX.Element {
  const navigate = useNavigate()

  const backHandler = () => {
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
