import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { UserScore } from './UserScore'

describe('GIVEN UserScore component', () => {
  it('SHOULD render nickname and high score correctly', () => {
    render(<UserScore nickname='testUser' highScore={100} />)

    expect(screen.getByText('testUser')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
  })
})
