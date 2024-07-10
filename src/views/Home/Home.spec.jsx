import React from 'react'
import * as router from 'react-router'
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './Home'
import { login } from '../../services'

describe('GIVEN Home.js view component', () => {
  const mockNavigate = vi.fn()
  vi.mock('../../services', () => ({
    login: vi.fn()
  }))

  beforeEach(() => {
    vi.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate)
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('SHOULD render the Home component correctly', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    expect(screen.getByPlaceholderText('Enter your nickname')).toBeInTheDocument()
    expect(screen.getByText('Start Game')).toBeInTheDocument()
  })

  it('SHOULD display an alert if the input is empty', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    fireEvent.click(screen.getByText('Start Game'))

    expect(alertMock).toHaveBeenCalledWith('Please enter a valid name')
    alertMock.mockRestore()
  })

  it('SHOULD call UserService login and navigate to /game on valid input', () => {
    render(
      <BrowserRouter>
        <Home navigate={mockNavigate} />
      </BrowserRouter>
    )

    fireEvent.change(screen.getByPlaceholderText('Enter your nickname'), {
      target: { value: 'Test User' }
    })
    fireEvent.click(screen.getByText('Start Game'))

    expect(login).toHaveBeenCalledWith('Test User')
    expect(mockNavigate).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalledWith('/game')
  })
})
