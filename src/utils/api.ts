import axios, { AxiosInstance } from 'axios'

export const createAPI = (): AxiosInstance => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    params: {
      units: 'metric',
      exclude: 'hourly,daily',
      appid: process.env.REACT_APP_API_KEY,
    },
  })
}
