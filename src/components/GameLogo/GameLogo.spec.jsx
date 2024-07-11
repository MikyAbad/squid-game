import React from 'react'
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { GameLogo } from './GameLogo'

describe('GIVEN GameLogo component', () => {
  it('SHOULD render the game logo correctly', () => {
    render(<GameLogo />)

    console.log(document.querySelector('.logo'))

    expect(document.querySelector('.logo')).toBeInTheDocument()
  })
})
