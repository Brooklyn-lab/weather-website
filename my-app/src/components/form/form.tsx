import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { searchCity } from '../../store/weather/api-actions'
import { toast } from 'react-toastify'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import './form.scss'

type FormData = {
  location: string
}

function Form(): JSX.Element {
  const dispatch = useAppDispatch()
  const { cities } = useAppSelector(({ weather }) => weather)

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: 'onChange',
  })

  const onSubmit = handleSubmit((data) => {
    const isMatches = cities.find((city) => city.name.toLowerCase() === data.location.toLowerCase())

    if (!isMatches) {
      dispatch(searchCity(data.location))
      reset()
    } else {
      toast('This city has already been shown')
    }
  })

  return (
    <form className="form" onSubmit={onSubmit}>
      <TextField
        className="form__input"
        id="standard-basic"
        label="Enter location"
        autoComplete="off"
        variant="standard"
        {...register('location', {
          required: 'Required field',
          minLength: {
            value: 1,
            message: 'Please enter at least one character',
          },
        })}
      />
      <div>{errors?.location && <p>{errors?.location?.message || 'Error!'}</p>}</div>
      <Button
        sx={{
          ml: '20px',
        }}
        variant="outlined"
        type="submit"
        disabled={!isValid}
        className="form__button"
      >
        Search
      </Button>
    </form>
  )
}

export default Form
