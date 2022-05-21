import { CityWeather } from '../../types/weather'

export type WeatherInitialState = {
  cityNames: string[]
  cities: CityWeather[]
  loading: boolean
  selectCityName: string
  currentCity: CityWeather | null
}
