import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, AppState } from '../store'
import { AxiosInstance } from 'axios'
import { addToLocalStorage, getWeather, updateWeather } from './wetherSlice'
import { CityWeather } from '../../types/weather'
import { errorHandle } from '../../utils/error-handle'

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
>('data/fetchWeather', async (city, { dispatch, extra: api }) => {
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
>('data/fetchWeather', async (city, { dispatch, extra: api }) => {
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
