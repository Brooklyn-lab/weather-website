import './city-weather.scss'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { getCurrentCityAction } from '../../store/weather/api-actions'
import { useEffect, useState } from 'react'
import { getCityName } from '../../utils/selected-city'
import Navigate from '../navigate/navigate'

function CityWeather(): JSX.Element {
  const dispatch = useAppDispatch()
  const { selectCityName, currentCity } = useAppSelector(({ weather }) => weather)
  const [cityName, setCityName] = useState<string>('')

  useEffect(() => {
    setCityName(getCityName())
    if (selectCityName) {
      dispatch(getCurrentCityAction(selectCityName))
      setCityName(selectCityName)
    } else if (cityName) {
      dispatch(getCurrentCityAction(cityName))
    }
  }, [dispatch, selectCityName, cityName])

  return (
    <>
      {!currentCity ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Navigate cityName={cityName} />
          <div className="weather">
            <div className="weather__wrapper">
              <div className="weather__image-wrapper">
                <img
                  alt={currentCity.weather ? currentCity.weather[0].description : ''}
                  src={`https://openweathermap.org/img/wn/${
                    currentCity.weather ? currentCity.weather[0].icon : ''
                  }@4x.png`}
                />
                <div className="weather__temp-wrapper">
                  <p className="weather__temp">{Math.round(currentCity.main.temp)}&deg;C</p>
                  <p className="weather__rainfall">{currentCity.weather ? currentCity.weather[0].description : ''}</p>
                </div>
              </div>
              <div className="weather__title">
                <h1 className="weather__name">{currentCity.name}</h1>
              </div>
              <div className="weather__about-wrapper">
                <div className="weather__about-row">
                  <p className="weather__about-col">Country</p>
                  <p className="weather__about-col">{currentCity.sys.country}</p>
                </div>
              </div>
              <div className="weather__about-wrapper">
                <div className="weather__about-row">
                  <p className="weather__about-col">Min t°</p>
                  <p className="weather__about-col">{Math.round(currentCity.main.temp_min)}&deg;C</p>
                </div>
                <div className="weather__about-row">
                  <p className="weather__about-col">Max t°</p>
                  <p className="weather__about-col">{Math.round(currentCity.main.temp_max)}&deg;C</p>
                </div>
              </div>
              <div className="weather__about-wrapper">
                <div className="weather__about-row">
                  <p className="weather__about-col">Feels like</p>
                  <p className="weather__about-col">{Math.round(currentCity.main.feels_like)}&deg;C</p>
                </div>
                <div className="weather__about-row">
                  <p className="weather__about-col">Wind speed</p>
                  <p className="weather__about-col">{currentCity.wind.speed} m/h</p>
                </div>
                <div className="weather__about-row">
                  <p className="weather__about-col">Humidity</p>
                  <p className="weather__about-col">{currentCity.main.humidity}%</p>
                </div>
              </div>
              <div className="weather__about-wrapper">
                <div className="weather__about-row">
                  <p className="weather__about-col">Sunrise</p>
                  <p className="weather__about-col">{currentCity.sys.sunrise}</p>
                </div>
                <div className="weather__about-row">
                  <p className="weather__about-col">Sunset</p>
                  <p className="weather__about-col">{currentCity.sys.sunset}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default CityWeather
