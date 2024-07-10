import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ className, onClick, text }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string
}

export default Button
