import { CityWeather } from '../types/weather'

export const makeFakeWeather = (): CityWeather => ({
  base: 'stations',
  clouds: {
    all: 100,
  },
  cod: 200,
  coord: {
    lat: 47.8167,
    lon: 35.1833,
  },
  dt: 1653145197,
  id: 687700,
  main: {
    temp: 21.45,
    feels_like: 21.11,
    temp_min: 21.45,
    temp_max: 21.45,
    pressure: 1007,
    humidity: 1007,
  },
  name: 'Zaporizhia',
  sys: {
    type: 123423,
    id: 123423,
    country: 'UA',
    sunrise: 1653098077,
    sunset: 1653153441,
  },
  timezone: 10800,
  visibility: 10000,
  weather: [
    {
      id: 123423,
      main: 'asdsas',
      description: 'asdsas',
      icon: '10ad',
    },
  ],
  wind: {
    speed: 8.3,
    deg: 239,
  },
})
