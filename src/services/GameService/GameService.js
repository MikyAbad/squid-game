import { vibrate } from '../../utils'

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
  const duration = light === 'red' ? 3000 : calculateGreenLightTiming(score)
  interval = setTimeout(() => switchLight(callback, score), duration)
}

const calculateGreenLightTiming = (score) => {
  const baseDuration = Math.max(10000 - score * 100, 2000)
  const randomTiming = Math.floor(Math.random() * 3000) - 1500
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
