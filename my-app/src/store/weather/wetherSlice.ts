import { WeatherInitialState } from "./types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, AppState } from "../store";

const initialState: WeatherInitialState = {};

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as AppState;
  const cityName = "Boston";
  // const {data} = await api.get(`lat=${33.44}&lon=${-94.04}&exclude=hourly,daily&appid=${process.env.API_KEY}`);
  const { data } = await api.get(`q=${cityName}&exclude=hourly,daily&appid=${process.env.API_KEY}`);
  return data;
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
});

export const {} = weatherSlice.actions;
