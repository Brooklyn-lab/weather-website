import { useAppDispatch, useAppSelector } from '../../store/store'
import { useEffect } from 'react'
import { fetchWeather } from '../../store/weather/api-actions'
import { getFromLocalStorage } from '../../store/weather/wetherSlice'
import Form from '../../components/form/form'
import CardsList from '../../components/cards-list/cards-list'

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch()
  const { cityNames, cities, loading } = useAppSelector(({ weather }) => weather)

  // useEffect(() => {
  //   dispatch(getFromLocalStorage())
  // }, [dispatch])

  useEffect(() => {
    if (cityNames) {
      cityNames.map((cityName: string) => {
        dispatch(fetchWeather(cityName))
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
