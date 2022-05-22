import { createAPI } from '../../utils/api'
import thunk, { ThunkDispatch } from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import { configureMockStore } from '@jedmao/redux-mock-store'
import { AppState } from '../store'
import { Action } from '@reduxjs/toolkit'

describe('Async actions', () => {
  const api = createAPI()
  const mockAPI = new MockAdapter(api)
  const middlewares = [thunk.withExtraArgument(api)]
  const city = 'Lviv'
  const mockStore = configureMockStore<AppState, Action, ThunkDispatch<AppState, typeof api, Action>>(middlewares)
})
