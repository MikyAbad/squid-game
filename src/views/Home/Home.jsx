import React, { useState } from 'react'
import { GiOctopus } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services'
import { Button } from '../../components'
import { MdLeaderboard } from 'react-icons/md'
import './Home.css'

export function Home () {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleStart = () => {
    if (name.trim()) {
      login(name.trim())
      navigate('/game')
    } else {
      alert('Please enter a valid name')
    }
  }

  return (
    <section className='home'>
      <aside className='title'>
        <h1>Squid Game #1 (Statues)</h1>
        <GiOctopus className='logo' size={75} color='#14549c' />
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
