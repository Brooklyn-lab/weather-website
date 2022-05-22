import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { fetchHourlyWeather, getCurrentCityAction } from '../../store/weather/api-actions'
import { format } from 'date-fns'
import { getCityName } from '../../utils/selected-city'
import Navigate from '../navigate/navigate'
import HourlyWeather from '../hourly-weather/hourly-weather'
import Loader from '../loader/loader'
import './city-weather.scss'

function CityWeather(): JSX.Element {
  const dispatch = useAppDispatch()
  const { currentCity } = useAppSelector(({ weather }) => weather)

  useEffect(() => {
    dispatch(getCurrentCityAction(getCityName()))
  }, [])

  useEffect(() => {
    if (currentCity) {
      dispatch(
        fetchHourlyWeather({
          lon: currentCity.coord.lon,
          lat: currentCity.coord.lat,
        })
      )
    }
  }, [currentCity])

  return (
    <>
      {!currentCity ? (
        <Loader />
      ) : (
        <>
          <Navigate cityName={getCityName()} coord={currentCity.coord} />
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
                  <p className="weather__about-col">{format(currentCity.sys.sunrise, 'HH:mm')} a.m.</p>
                </div>
                <div className="weather__about-row">
                  <p className="weather__about-col">Sunset</p>
                  <p className="weather__about-col">{format(currentCity.sys.sunset, 'HH:mm')} p.m.</p>
                </div>
              </div>
            </div>
          </div>
          <HourlyWeather />
        </>
      )}
    </>
  )
}

export default CityWeather
