import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { vibrate } from './vibrate'

describe('GIVEN vibrate util function', () => {
  let originalNavigator

  beforeEach(() => {
    originalNavigator = { ...window.navigator }
  })

  afterEach(() => {
    window.navigator = originalNavigator
  })

  it('SHOULD vibrate if supported', () => {
    const vibrateMock = vi.fn()
    window.navigator = {
      vibrate: vibrateMock
    }

    vibrate()

    expect(vibrateMock).toHaveBeenCalledWith([500, 200, 500])
  })

  it('SHOULD log message if vibration is not supported', () => {
    const consoleInfoSpy = vi.spyOn(console, 'info')
    window.navigator = undefined

    vibrate()

    expect(consoleInfoSpy).toHaveBeenCalledWith('Vibration is not supported in your browser/device')
  })
})
