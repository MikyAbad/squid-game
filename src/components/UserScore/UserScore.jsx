import React from 'react'
import PropTypes from 'prop-types'
import './UserScore.css'

export const UserScore = ({ nickname, highScore }) => (
  <div className='user-score'>
    <span className='nickname'>{nickname}</span>
    <span className='high-score'>{highScore}</span>
  </div>
)

UserScore.propTypes = {
  nickname: PropTypes.string.isRequired,
  highScore: PropTypes.number.isRequired
}
