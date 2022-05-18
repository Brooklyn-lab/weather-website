import { CityWeather } from '../../types/weather'

export type WeatherInitialState = {
  cityNames: string[]
  cities: CityWeather[]
  loading: boolean
}
