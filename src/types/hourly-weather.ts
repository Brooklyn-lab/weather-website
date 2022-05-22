import { Clouds, Coord, Main, Weather, Wind } from './weather'

interface HourlyMain extends Main {
  grnd_level: number
  sea_level: number
  temp_kf: number
}

type Sys = {
  pod: string
}

interface HourlyWind extends Wind {
  gust: number
}

export type List = {
  clouds: Clouds
  dt: number
  dt_txt: string
  main: HourlyMain
  feels_like: number
  grnd_level: number
  humidity: number
  pressure: number
  sea_level: number
  temp: number
  temp_kf: number
  temp_max: number
  temp_min: number
  pop: number
  sys: Sys
  visibility: number
  weather: Weather[]
  wind: HourlyWind
}

export type HourlyWeather = {
  coord: Coord
  lat: number
  lon: number
  country: string
  id: number
  name: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
  cnt: number
  cod: string
  list: List[]
}
