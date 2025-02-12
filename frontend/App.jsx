import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import QuotePage from './pages/QuotePage'
import ProductPage from './pages/ProductPage'

export default function App() {
  return (
    <BrowserRouter>
      <main className="max-w-[80rem] mx-auto px-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/products/:modelName" element={<ProductPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}