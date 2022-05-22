import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, AppState } from '../store'
import { AxiosInstance } from 'axios'
import { addToLocalStorage, getCurrentCity, getWeather, hourlyWeather, updateWeather } from './wetherSlice'
import { CityWeather, Coord } from '../../types/weather'
import { errorHandle } from '../../utils/error-handle'
import { HourlyWeather } from '../../types/hourly-weather'

export const fetchHourlyWeather = createAsyncThunk<
  void,
  Coord,
  {
    dispatch: AppDispatch
    state: AppState
    extra: AxiosInstance
  }
>('weather/fetchWeather', async ({ lat, lon }, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<HourlyWeather>('/forecast/', {
      params: {
        hourly: 'hourly',
        lat,
        lon,
      },
    })
    dispatch(hourlyWeather(data))
  } catch (error) {
    errorHandle(error)
  }
})

export const fetchWeather = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch
    state: AppState
    extra: AxiosInstance
  }
>('data/fetchWeather', async (city, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<CityWeather>('/weather', {
      params: {
        q: city,
      },
    })
    dispatch(getWeather(data))
  } catch (error) {
    errorHandle(error)
  }
})

export const searchCity = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch
    state: AppState
    extra: AxiosInstance
  }
>('data/searchCity', async (city, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<CityWeather>('/weather', {
      params: {
        q: city,
      },
    })
    dispatch(getWeather(data))
    dispatch(addToLocalStorage(data.name))
  } catch (error) {
    errorHandle(error)
  }
})

export const updateWeatherAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch
    state: AppState
    extra: AxiosInstance
  }
>('data/updateWeather', async (city, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<CityWeather>('/weather', {
      params: {
        q: city,
      },
    })
    dispatch(updateWeather(data))
  } catch (error) {
    errorHandle(error)
  }
})

export const getCurrentCityAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch
    state: AppState
    extra: AxiosInstance
  }
>('data/getCurrentCity', async (city, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<CityWeather>('/weather', {
      params: {
        q: city,
      },
    })

    dispatch(getCurrentCity(data))
  } catch (error) {
    errorHandle(error)
  }
})
