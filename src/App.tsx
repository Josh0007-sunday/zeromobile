import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Business from './pages/Business'

import './App.css'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <Layout isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route
          path="/about"
          element={
            <div className="flex items-center justify-center min-h-[60vh] text-gray-500 text-xl">
              About us — coming soon.
            </div>
          }
        />
      </Routes>
    </Layout>
  )
}

export default App
