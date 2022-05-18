import { WeatherInitialState } from './types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
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
    getWeather: (state, action: PayloadAction<CityWeather>) => {
      state.cities.push(action.payload)
      state.loading = true
    },
    deleteCity: (state, action: PayloadAction<number>) => {
      state.cities = state.cities.filter((city) => city.id !== action.payload)
    },
    updateWeather: (state, action: PayloadAction<CityWeather>) => {
      // const city = state.cities.find((city) => city.id === action.payload.id)
      // state.cities = city ? city : null
    },
  },
})

export const { getWeather, deleteCity, updateWeather } = weatherSlice.actions
