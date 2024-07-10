import React from 'react'
import * as router from 'react-router'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Game } from './Game'
import { getCurrentUser, saveScore, startLightCycle, handleUserClick, stopLightCycle } from '../../services'

describe('GIVEN Game.js view component', () => {
  const mockNavigate = vi.fn()
  vi.mock('../../services', () => ({
    getCurrentUser: vi.fn(),
    saveScore: vi.fn(),
    startLightCycle: vi.fn(),
    handleUserClick: vi.fn(),
    stopLightCycle: vi.fn()
  }))

  beforeEach(() => {
    vi.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate)
  })

  it('SHOULD render correctly with current user', () => {
    getCurrentUser.mockReturnValue({ name: 'test', score: 10, maxScore: 20 })
    render(
      <Router>
        <Game />
      </Router>
    )

    expect(screen.getByText('Player: test')).toBeInTheDocument()
    expect(screen.getByText('Max Score: 20')).toBeInTheDocument()
    expect(screen.getByText('Score: 10')).toBeInTheDocument()
  })

  it('SHOULD redirect to Home page if no current user is found in localStorage', () => {
    getCurrentUser.mockReturnValue(null)
    render(
      <Router>
        <Game />
      </Router>
    )
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })

  it('SHOULD handle button clicks and update score', () => {
    const user = { name: 'test', score: 10, maxScore: 20 }
    getCurrentUser.mockReturnValue(user)
    handleUserClick.mockReturnValue({ scoreChange: 5 })

    render(
      <Router>
        <Game />
      </Router>
    )

    const leftButton = screen.getByText('Left')
    fireEvent.click(leftButton)

    expect(handleUserClick).toHaveBeenCalledWith(user.score, 'left')
    expect(saveScore).toHaveBeenCalledWith({ ...user, score: 15, maxScore: 20 })
  })

  it('SHOULD render light cycle correctly', () => {
    getCurrentUser.mockReturnValue({ name: 'test', score: 10, maxScore: 20 })
    render(
      <Router>
        <Game />
      </Router>
    )

    expect(startLightCycle).toHaveBeenCalled()
    expect(stopLightCycle).toHaveBeenCalled()
  })

  it('SHOULD handle exit button click', () => {
    getCurrentUser.mockReturnValue({ name: 'test', score: 10, maxScore: 20 })

    render(
      <Router>
        <Game />
      </Router>
    )

    const exitButton = screen.getByText('Exit')
    fireEvent.click(exitButton)

    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})
