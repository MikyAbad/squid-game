import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { getLight, startLightCycle, handleUserClick, stopLightCycle, __testableMethods__ } from './GameService'

describe('GIVEN GameService.js service', () => {
  beforeEach(() => {
    stopLightCycle()
    __testableMethods__.resetLightState()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllTimers()
    vi.useRealTimers()
  })

  it('SHOULD start game with "red" light', () => {
    expect(getLight()).toBe('red')
  })

  it('SHOULD reset light state with resetLightState', () => {
    __testableMethods__.resetLightState()
    expect(__testableMethods__.getInterval()).toBeNull()
  })

  it('SHOULD switch light from "red" to "green" with startLightCycle', () => {
    let lightState
    startLightCycle((light) => {
      lightState = light
    }, 0)
    // Simulate time passage
    vi.advanceTimersByTime(3000)

    expect(lightState).toBe('green')
  })

  it('SHOULD calculate green light duration correctly with calculateGreenLightTiming', () => {
    const score = 5
    const duration = __testableMethods__.calculateGreenLightTiming(score)

    expect(duration).toBeGreaterThanOrEqual(3500)
    expect(duration).toBeLessThanOrEqual(11500)
  })

  it('SHOULD handle user click correctly when light is green and buttons are alternated', () => {
    __testableMethods__.switchLight(() => {}, 0)

    const { scoreChange, lastButton } = handleUserClick(0, 'left')
    expect(scoreChange).toBe(1)
    expect(lastButton).toBe('left')
  })

  it('SHOULD handle user click correctly when light is green and same button is pressed consecutively', () => {
    __testableMethods__.switchLight(() => {}, 0)

    handleUserClick(0, 'left')
    const { scoreChange, lastButton } = handleUserClick(1, 'left')
    expect(scoreChange).toBe(-1)
    expect(lastButton).toBe('left')
  })

  it('SHOULD handle user click correctly when light is red', () => {
    const { scoreChange, lastButton } = handleUserClick(10, 'left')
    expect(scoreChange).toBe(-10)
    expect(lastButton).toBeNull()
  })

  it('SHOULD stop light cycle correctly', () => {
    let lightState
    const callback = (light) => {
      lightState = light
    }

    startLightCycle(callback, 0)
    vi.advanceTimersByTime(3000)

    expect(lightState).toBe('green')

    stopLightCycle()
    vi.advanceTimersByTime(3000)
    expect(lightState).toBe('green')
  })
})
