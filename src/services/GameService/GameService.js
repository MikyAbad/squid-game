import { vibrate } from '../../utils'
import { MAX_DURATION, RED_LIGHT_DURATION, PERCENTAGE_CONST, MIN_DURATION_RANGE, RANDOM_DURATION } from '../../constants'

let light = 'red'
let interval = null
let lastButton = null

const resetLightState = () => {
  light = 'red'
  interval = null
  lastButton = null
}

const getInterval = () => interval

export const getLight = () => light

export const startLightCycle = (callback, score) => switchLight(callback, score)

const switchLight = (callback, score) => {
  light = light === 'red' ? 'green' : 'red'
  callback(light)
  const duration = light === 'red' ? RED_LIGHT_DURATION : calculateGreenLightTiming(score)
  interval = setTimeout(() => switchLight(callback, score), duration)
}

const calculateGreenLightTiming = (score) => {
  const baseDuration = Math.max(MAX_DURATION - score * PERCENTAGE_CONST, MIN_DURATION_RANGE)
  const randomTiming = Math.floor(Math.random() * RED_LIGHT_DURATION) - RANDOM_DURATION
  return baseDuration + randomTiming
}

export const handleUserClick = (currentScore, buttonId) => {
  if (light === 'red') {
    vibrate()
    return {
      scoreChange: -currentScore,
      lastButton: null
    }
  } else {
    let scoreChange = 0
    if (lastButton === buttonId) {
      scoreChange = -1
    } else {
      scoreChange = 1
    }
    lastButton = buttonId
    return {
      scoreChange,
      lastButton
    }
  }
}

export const stopLightCycle = () => clearTimeout(interval)

export const __testableMethods__ = {
  getInterval,
  resetLightState,
  switchLight,
  calculateGreenLightTiming
}
