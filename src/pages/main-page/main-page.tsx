import { useAppDispatch, useAppSelector } from '../../store/store'
import { useEffect } from 'react'
import { fetchWeather } from '../../store/weather/api-actions'
import { CITIES } from '../../constants'
import Form from '../../components/form/form'
import CardsList from '../../components/cards-list/cards-list'
import Loader from '../../components/loader/loader'

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch()
  const { cityNames, cities, loading } = useAppSelector(({ weather }) => weather)

  useEffect(() => {
    const cities = localStorage.getItem(CITIES)
    const parsedCities = cities ? JSON.parse(cities) : []

    cityNames.concat(parsedCities).forEach((cityName: string) => {
      dispatch(fetchWeather(cityName))
    })
  }, [dispatch, cityNames])

  return (
    <>
      {!loading ? (
        <Loader />
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
