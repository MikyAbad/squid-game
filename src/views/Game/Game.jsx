import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, saveScore, startLightCycle, handleUserClick, stopLightCycle } from '../../services'
import { FaPlayCircle, FaStopCircle } from 'react-icons/fa'
import './Game.css'

export function Game () {
  const [user, setUser] = useState(getCurrentUser())
  const [light, setLight] = useState('red')
  const navigate = useNavigate()
  const scoreRef = useRef(user.score)

  useEffect(() => {
    startLightCycle(setLight, scoreRef.current)
    return () => stopLightCycle()
  }, [])

  const handleButtonPress = (buttonId) => {
    const { scoreChange } = handleUserClick(user.score, buttonId)
    let newScore = user.score + scoreChange
    if (newScore < 0) newScore = 0
    const newMaxScore = Math.max(user.maxScore, newScore)
    const updatedUser = { ...user, score: newScore, maxScore: newMaxScore }
    setUser(updatedUser)
    scoreRef.current = newScore
    saveScore(updatedUser)
  }

  const handleExit = () => { navigate('/') }

  return (
    <section className='game-container'>
      <header className='game-header'>
        <h2>Player: {user.name}</h2>
        <p>Max Score: {user.maxScore}</p>
      </header>
      <main className='game-main'>
        <div className='light'>
          {light === 'red' ? <FaStopCircle size={50} color='red' /> : <FaPlayCircle size={50} color='green' />}
        </div>
        <p className='current-score'>Score: {user.score}</p>
        <div className='buttons-container'>
          <button className='game-button' onClick={() => handleButtonPress('left')}>Left</button>
          <button className='game-button' onClick={() => handleButtonPress('right')}>Right</button>
        </div>
        <button className='exit-button' onClick={handleExit}>Exit</button>
      </main>
    </section>
  )
}
