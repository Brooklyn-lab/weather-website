import { CityWeather } from '../../types/weather'
import { HourlyWeather } from '../../types/hourly-weather'

export type WeatherInitialState = {
  cityNames: string[]
  cities: CityWeather[]
  loading: boolean
  selectCityName: string
  currentCity: CityWeather | null
  hourlyWeather: HourlyWeather | null
}
