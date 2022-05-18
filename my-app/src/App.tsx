import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './App.scss'
import { ROUTES } from './constants'
import MainPage from './pages/main-page/main-page'
import ErrorPage from './pages/error-page/error-page'
import Layout from './components/layout/layout'

function App() {
  return (
    <Routes>
      <Route path={ROUTES.Main} element={<Layout />}>
        <Route path={ROUTES.Main} element={<MainPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
