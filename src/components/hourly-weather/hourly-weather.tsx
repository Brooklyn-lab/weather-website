import { useAppSelector } from '../../store/store'
import { useEffect, useState } from 'react'
import { List } from '../../types/hourly-weather'
import './hourly-weather.scss'

function HourlyWeather(): JSX.Element {
  const { hourlyWeather } = useAppSelector(({ weather }) => weather)
  const [weather, setWeather] = useState<List[]>([])

  useEffect(() => {
    if (hourlyWeather) {
      setWeather(hourlyWeather.list.slice(0, 9))
    }
  }, [hourlyWeather])

  return (
    <div className="hourly-weather">
      {hourlyWeather
        ? weather.map((item) => {
            const temp = Math.round(item.main.temp)
            const showTemp = () => (temp > 0 ? `-${temp}px` : `${temp}px`)

            return (
              <div key={item.dt} className="hourly-weather__item" style={{ transform: `translateY(${showTemp()})` }}>
                <div className="hourly-weather__wrapper">
                  <div>
                    <p className="hourly-weather__text">{item.dt_txt.slice(-8, -3)}</p>
                    <div className="hourly-weather__image-wrapper">
                      <img
                        alt={item.weather ? item.weather[0].main : ''}
                        src={`https://openweathermap.org/img/wn/${item.weather ? item.weather[0].icon : ''}.png`}
                      />
                    </div>
                  </div>
                </div>
                <div className="hourly-weather__temp">
                  <p>
                    {Math.round(item.main.temp)}
                    <span className="hourly-weather__celsius">&deg;C</span>
                  </p>
                </div>
              </div>
            )
          })
        : ''}
    </div>
  )
}

export default HourlyWeather
