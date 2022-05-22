import { WeatherInitialState } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CityWeather } from '../../types/weather'
import { saveCityName } from '../../utils/selected-city'
import { CITIES } from '../../constants'
import { HourlyWeather } from '../../types/hourly-weather'

const initialState: WeatherInitialState = {
  cityNames: ['Kyiv', 'Lviv', 'Kharkiv', 'Zaporizhzhya'],
  cities: [],
  loading: false,
  selectCityName: '',
  currentCity: null,
  hourlyWeather: null,
}
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addToLocalStorage: (state, action: PayloadAction<string>) => {
      const cities = localStorage.getItem(CITIES)
      const parsedCities = cities ? JSON.parse(cities) : []

      const addToArrayCities = () => {
        parsedCities.push(action.payload)
        localStorage.setItem(CITIES, JSON.stringify(parsedCities))
      }

      parsedCities ? addToArrayCities() : localStorage.setItem(CITIES, JSON.stringify(action.payload))
    },
    getWeather: (state, action: PayloadAction<CityWeather>) => {
      state.cities.push(action.payload)
      state.loading = true
    },
    deleteCity: (state, action: PayloadAction<CityWeather>) => {
      const cities = localStorage.getItem(CITIES)
      const parsedCities = cities ? JSON.parse(cities) : []
      const newCities = parsedCities.filter((name: string) => name !== action.payload.name)
      localStorage.setItem(CITIES, JSON.stringify(newCities))

      state.cities = state.cities.filter((city) => city.id !== action.payload.id)
    },
    updateWeather: (state, action: PayloadAction<CityWeather>) => {
      state.cities = state.cities.map((city) => (city.id === action.payload.id ? action.payload : city))
    },
    getSelectCityName: (state, action: PayloadAction<string>) => {
      state.selectCityName = action.payload
      saveCityName(action.payload)
    },
    getCurrentCity: (state, action: PayloadAction<CityWeather>) => {
      state.currentCity = action.payload
    },
    resetCities: (state) => {
      state.cities = []
      state.currentCity = null
    },
    hourlyWeather: (state, action: PayloadAction<HourlyWeather>) => {
      state.hourlyWeather = action.payload
    },
  },
})

export const {
  addToLocalStorage,
  getWeather,
  deleteCity,
  updateWeather,
  getSelectCityName,
  getCurrentCity,
  resetCities,
  hourlyWeather,
} = weatherSlice.actions
