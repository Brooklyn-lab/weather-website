import { generatePath, Link } from 'react-router-dom'
import { useAppDispatch } from '../../store/store'
import { deleteCity, getSelectCityName } from '../../store/weather/wetherSlice'

import { CityWeather } from '../../types/weather'

import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'

import './card.scss'
import { ROUTES } from '../../constants'
import ButtonUpdate from '../button-update/button-update'

type CardItemProps = {
  city: CityWeather
}

function CardItem({ city }: CardItemProps): JSX.Element {
  const dispatch = useAppDispatch()

  const deleteCardHandler = () => {
    dispatch(deleteCity(city.id))
  }

  const selectCityNameHandler = () => {
    dispatch(getSelectCityName(city.name))
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
        <Link
          className="card__button-more"
          to={generatePath(ROUTES.City, { id: String(city.id) })}
          onClick={selectCityNameHandler}
        >
          Show More
        </Link>
        <div className="card__buttons">
          <ButtonUpdate cityName={city.name} />
          <DeleteIcon fontSize="small" color="inherit" onClick={deleteCardHandler} className="card__button" />
        </div>
      </div>
    </div>
  )
}

export default CardItem
