import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllUsers } from '../../services'
import { Button, UserScore } from '../../components'
import { ImExit } from 'react-icons/im'
import './Leaderboard.css'

export const Leaderboard = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setUsers(getAllUsers())
  }, [])

  return (
    <div className='leaderboard'>
      <h2>Leaderboard</h2>
      <div className='leaderboard-list'>
        {users.map(user => (
          <UserScore key={user.name} nickname={user.name} highScore={user.maxScore} />
        ))}
        {!users.length && <h4>No high scores found</h4>}
      </div>
      <br />
      <Button className='exit-button' onClick={() => navigate('/')} text='Back Home' Icon={ImExit} />
    </div>
  )
}
