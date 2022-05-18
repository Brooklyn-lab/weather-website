import { useAppDispatch } from '../../store/store'
import { deleteCity } from '../../store/weather/wetherSlice'

import { CityWeather } from '../../types/weather'

import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'

import { updateWeatherAction } from '../../store/weather/api-actions'

import './card.scss'

type CardItemProps = {
  city: CityWeather
}

function CardItem({ city }: CardItemProps): JSX.Element {
  const dispatch = useAppDispatch()

  const deleteCardHandler = () => {
    dispatch(deleteCity(city.id))
  }

  const updateCardHandler = () => {
    dispatch(updateWeatherAction(city.name))
  }

  return (
    <div className="card">
      <div className="card__image-wrapper">
        <img
          alt={city.weather ? city.weather[0].description : ''}
          src={`https://openweathermap.org/img/wn/${city.weather ? city.weather[0].icon : ''}@4x.png`}
        />
      </div>
      <div className="card__content">
        <h2 className="card__city">{city.name}</h2>
        <div className="card__temp-wrapper">
          <p className="card__temp">{Math.round(city.main.temp)}&deg;C</p>
          <p className="card__rainfall">{city.weather ? city.weather[0].description : ''}</p>
        </div>
      </div>
      <div className="card__about">
        <div className="card__about-row">
          <p className="card__about-col">Feels like</p>
          <p className="card__about-col">{Math.round(city.main.feels_like)}&deg;C</p>
        </div>
        <div className="card__about-row">
          <p className="card__about-col">Wind speed</p>
          <p className="card__about-col">{city.wind.speed} m/h</p>
        </div>
        <div className="card__about-row">
          <p className="card__about-col">Humidity</p>
          <p className="card__about-col">{city.main.humidity}%</p>
        </div>
      </div>
      <div className="card__buttons-wrapper">
        <p className="card__button-more" onClick={() => console.log('Show More')}>
          Show More
        </p>
        <div>
          <UpdateIcon fontSize="small" color="inherit" onClick={updateCardHandler} className="card__button" />
          <DeleteIcon fontSize="small" color="inherit" onClick={deleteCardHandler} className="card__button" />
        </div>
      </div>
    </div>
  )
}

export default CardItem
