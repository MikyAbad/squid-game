import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services'
import { Button, GameLogo } from '../../components'
import { MdLeaderboard } from 'react-icons/md'
import { REGEX_VALIDATION } from '../../constants'
import './Home.css'

export function Home () {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleStart = () => {
    const trimmedName = name.trim()
    const isValidName = REGEX_VALIDATION.test(trimmedName)

    if (trimmedName && isValidName) {
      login(trimmedName)
      navigate('/game')
    } else {
      alert('Please enter a valid name (only letters and numbers are allowed)')
    }
  }

  return (
    <section className='home'>
      <aside className='title'>
        <h1>Squid Game #1 (Statues)</h1>
        <GameLogo />
      </aside>
      <h3>Create New Player</h3>
      <aside>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
          placeholder='Enter your nickname'
        />
        <Button className='start-button' onClick={handleStart} text='Start Game' />
        <Button className='leaderboard-button' onClick={() => navigate('/leaderboard')} text='Leaderboard' Icon={MdLeaderboard} />
      </aside>
    </section>
  )
}
