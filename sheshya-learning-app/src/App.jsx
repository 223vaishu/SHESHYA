import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Auth/Login'
import GamePage from './pages/Game/GamePage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/game" /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
      />
      <Route 
        path="/game" 
        element={isAuthenticated ? <GamePage /> : <Navigate to="/login" />} 
      />
    </Routes>
  )
}

export default App