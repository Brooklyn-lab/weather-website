import Form from '../../components/form/form'
import CardsList from '../../components/cards-list/cards-list'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { useEffect } from 'react'
import { fetchWeather } from '../../store/weather/api-actions'

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch()
  const { cityNames, cities, loading } = useAppSelector(({ weather }) => weather)

  useEffect(() => {
    if (cityNames) {
      cityNames.map((city: string) => {
        dispatch(fetchWeather(city))
      })
    }
  }, [dispatch, cityNames])

  return (
    <>
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Form />
          <CardsList cities={cities} />
        </>
      )}
    </>
  )
}

export default MainPage
