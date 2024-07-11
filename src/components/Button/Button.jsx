import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export const Button = ({ className = '', onClick = () => {}, text = 'Click', Icon = null }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {Icon && <Icon className='button-icon' />}
    <span className='button-text'>{text}</span>
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  Icon: PropTypes.elementType
}
