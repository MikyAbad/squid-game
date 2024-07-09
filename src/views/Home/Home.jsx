import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/UserService'
import './Home.css'

function Home () {
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
        <h1>Squid Game (Statues)</h1>
        <h4>Placeholder for game logo</h4>
      </aside>
      <h3>Create New Player</h3>
      <aside>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
          placeholder='Enter your nickname'
        />
        <button className='start' onClick={handleStart}>Start Game</button>
      </aside>
    </section>
  )
}

export default Home
