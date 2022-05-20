import { createAsyncThunk } from '@reduxjs/toolkit'
import { api, AppDispatch, AppState } from '../store'
import { AxiosInstance } from 'axios'
import { getWeather, updateWeather } from './wetherSlice'
import { CityWeather } from '../../types/weather'

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
    console.error(error)
  }
})

// export const updateWeatherAction = createAsyncThunk<
//   void,
//   string,
//   {
//     dispatch: AppDispatch
//     state: AppState
//     extra: AxiosInstance
//   }
// >('data/fetchWeather', async (city, { dispatch, extra: api }) => {
//   try {
//     const { data } = await api.get<CityWeather>('/weather', {
//       params: {
//         q: city,
//       },
//     })
//     dispatch(updateWeather(data))
//   } catch (error) {
//     console.error(error)
//   }
// })
