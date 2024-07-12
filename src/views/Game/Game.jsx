import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, saveScore, startLightCycle, handleUserClick, stopLightCycle } from '../../services'
import { FaPlayCircle, FaStopCircle } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { RiFootprintFill } from 'react-icons/ri'
import { PiFootprintsFill } from 'react-icons/pi'
import { MdLeaderboard } from 'react-icons/md'
import { Button, GameLogo } from '../../components'
import { AUDIO_URL, INCREMENT_RATE } from '../../constants'
import './Game.css'

export function Game () {
  const navigate = useNavigate()
  const user = getCurrentUser()
  const [light, setLight] = useState('red')
  const [currentUser, setCurrentUser] = useState(user)
  const scoreRef = useRef(user ? user.score : 0)
  const audioRef = useRef(new Audio(AUDIO_URL))

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  }, [currentUser, navigate])

  useEffect(() => {
    startLightCycle(setLight, scoreRef.current)
    return () => stopLightCycle()
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    audio.loop = true
    if (light === 'green') {
      audio.play()
      audio.playbackRate = 1 + scoreRef.current * INCREMENT_RATE
    } else {
      audio.pause()
    }
  }, [light])

  const handleButtonPress = (buttonId) => {
    const { scoreChange } = handleUserClick(currentUser.score, buttonId)
    let newScore = currentUser.score + scoreChange
    if (newScore < 0) newScore = 0
    const newMaxScore = Math.max(currentUser.maxScore, newScore)
    const updatedUser = { ...currentUser, score: newScore, maxScore: newMaxScore }
    setCurrentUser(updatedUser)
    scoreRef.current = newScore
    saveScore(updatedUser)
  }

  const handleExitButtons = (path) => {
    audioRef.current.pause()
    navigate(path)
  }

  if (!currentUser) return null

  return (
    <main>
      <GameLogo />
      <section className='game-container'>
        <header className='game-header'>
          <h2>Player: {user.name}</h2>
          <p>Max Score: {user.maxScore}</p>
        </header>
        <main className='game-main'>
          <div className='light'>
            {light === 'red' ? <FaStopCircle size={75} color='red' /> : <FaPlayCircle size={75} color='green' />}
          </div>
          <p className='current-score'>Score: {user.score}</p>
          <div className='buttons-container'>
            <Button className='game-button' onClick={() => handleButtonPress('left')} text='Left' Icon={PiFootprintsFill} />
            <Button className='game-button' onClick={() => handleButtonPress('right')} text='Right' Icon={RiFootprintFill} />
          </div>
          <Button className='exit-button' onClick={() => handleExitButtons('/')} text='Exit' Icon={ImExit} />
        </main>
      </section>
      <Button className='leaderboard-button' onClick={() => handleExitButtons('/leaderboard')} text='Leaderboard' Icon={MdLeaderboard} />
    </main>
  )
}
