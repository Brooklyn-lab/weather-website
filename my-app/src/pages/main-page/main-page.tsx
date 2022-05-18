import Form from '../../components/form/form'
import CardsList from '../../components/cards-list/cards-list'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { useEffect } from 'react'
import { fetchWeather } from '../../store/weather/api-actions'
import { getFromLocalStorage } from '../../store/weather/wetherSlice'

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch()
  const { cityNames, cities, loading } = useAppSelector(({ weather }) => weather)

  // useEffect(() => {
  //   dispatch(getFromLocalStorage())
  // }, [dispatch])

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
