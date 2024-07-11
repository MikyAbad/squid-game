import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home, Game, Leaderboard } from './views'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
