import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { fetchWeather } from '../../store/weather/api-actions'

import Button from '@mui/material/Button'
import Input from '@mui/material/Input'

import './form.scss'

type FormData = {
  location: string
}

function Form(): JSX.Element {
  const dispatch = useAppDispatch()
  const { cityNames } = useAppSelector(({ weather }) => weather)

  const {
    register,
    setValue,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: 'onChange',
  })

  const onSubmit = handleSubmit((data) => {
    const isMatches = cityNames.find((cityName) => cityName.toLowerCase() === data.location.toLowerCase())

    if (!isMatches) {
      dispatch(fetchWeather(data.location))
      reset()
    } else {
      // error massage function
    }
  })

  const ariaLabel = { 'aria-label': 'description' }

  return (
    <form className="form" onSubmit={onSubmit}>
      <Input
        className="form__input"
        placeholder="Enter location"
        inputProps={ariaLabel}
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
