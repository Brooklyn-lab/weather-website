import { WeatherInitialState } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CityWeather } from '../../types/weather'

const initialState: WeatherInitialState = {
  cityNames: ['Kyiv', 'Budapest', 'Berlin', 'Prague', 'Warsaw', 'Amsterdam'],
  cities: [],
  loading: false,
}
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addToLocalStorage: (state, action: PayloadAction<string>) => {
      const cities = JSON.parse(localStorage.getItem('CITIES') || '[]')

      const addToArrayCities = () => {
        cities.push(action.payload)
        localStorage.setItem('CITIES', JSON.stringify(cities))
      }

      cities ? addToArrayCities() : localStorage.setItem('CITIES', JSON.stringify(action.payload))
    },
    getFromLocalStorage: (state) => {
      const cities = JSON.parse(localStorage.getItem('CITIES') || '[]')
      state.cityNames = state.cityNames.concat(cities)
    },
    getWeather: (state, action: PayloadAction<CityWeather>) => {
      state.cities.push(action.payload)
      state.loading = true
    },
    deleteCity: (state, action: PayloadAction<number>) => {
      state.cities = state.cities.filter((city) => city.id !== action.payload)
    },
    updateWeather: (state, action: PayloadAction<CityWeather>) => {
      state.cities = state.cities.map((city) => (city.id === action.payload.id ? action.payload : city))
    },
  },
})

export const { addToLocalStorage, getFromLocalStorage, getWeather, deleteCity, updateWeather } = weatherSlice.actions
