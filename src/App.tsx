import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './constants'
import MainPage from './pages/main-page/main-page'
import ErrorPage from './pages/error-page/error-page'
import Layout from './components/layout/layout'
import CityPage from './pages/city-page/city-page'
import './App.scss'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path={ROUTES.Main} element={<Layout />}>
        <Route path={ROUTES.Main} element={<MainPage />} />
        <Route path={ROUTES.City} element={<CityPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
