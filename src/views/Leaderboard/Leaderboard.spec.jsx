import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { getAllUsers } from '../../services'
import { Leaderboard } from './Leaderboard'

vi.mock('../../services', () => ({
  getAllUsers: vi.fn()
}))

describe('GIVEN Leaderboard view', () => {
  it('SHOULD render the leaderboard correctly', () => {
    getAllUsers.mockReturnValue([
      { name: 'testuser2', maxScore: 200 },
      { name: 'testuser1', maxScore: 100 }
    ])

    render(
      <BrowserRouter>
        <Leaderboard />
      </BrowserRouter>
    )

    expect(screen.getByText('Leaderboard')).toBeInTheDocument()
    expect(screen.getByText('testuser1')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('testuser2')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
  })
})
