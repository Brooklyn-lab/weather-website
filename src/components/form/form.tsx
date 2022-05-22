import { useForm, Controller } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { searchCity } from '../../store/weather/api-actions'
import { toast } from 'react-toastify'

import Button from '@mui/material/Button'
import { CustomTextField } from '../custom-textfield/custom-textfield'

import './form.scss'

type FormData = {
  location: string
}

function Form(): JSX.Element {
  const dispatch = useAppDispatch()
  const { cities } = useAppSelector(({ weather }) => weather)

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      location: '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    if (data.location) {
      const isMatches = cities.find((city) => city.name.toLowerCase() === data.location.toLowerCase())

      if (!isMatches) {
        dispatch(searchCity(data.location))
        reset()
      } else {
        toast('This city has already been shown')
      }
    }
  })

  return (
    <form className="form" onSubmit={onSubmit}>
      <Controller
        name="location"
        control={control}
        render={({ field }) => (
          <CustomTextField size="small" label="Enter location" autoComplete="off" variant="filled" {...field} />
        )}
      />
      <div>{errors?.location && <p>{errors?.location?.message || 'Error!'}</p>}</div>
      <Button
        sx={{ ml: '20px' }}
        variant="outlined"
        size="large"
        type="submit"
        disabled={!isValid}
        className="form__button"
        color={'inherit'}
      >
        Search
      </Button>
    </form>
  )
}

export default Form
