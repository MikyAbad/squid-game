import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'
import { FaPlay } from 'react-icons/fa'

describe('GIVEN Button Component', () => {
  it('SHOULD render the Button component with default props', () => {
    render(<Button />)
    expect(screen.getByText('Click')).toBeInTheDocument()
    expect(document.querySelector('.button-text')).toBeInTheDocument()
  })

  it('SHOULD render the Button component with custom text', () => {
    render(<Button text='Custom Text' />)
    expect(screen.getByText('Custom Text')).toBeInTheDocument()
  })

  it('SHOULD render the Button component with a custom icon', () => {
    render(<Button text='Play' Icon={FaPlay} />)
    expect(screen.getByText('Play')).toBeInTheDocument()
    expect(document.querySelector('.button-icon')).toBeInTheDocument()
  })

  it('SHOULD call the onClick handler when clicked', () => {
    const onClickMock = vi.fn()
    render(<Button text='Click Me' onClick={onClickMock} />)
    fireEvent.click(screen.getByText('Click Me'))
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('SHOULD applies custom className to the button', () => {
    render(<Button className='custom-class' />)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })
})
