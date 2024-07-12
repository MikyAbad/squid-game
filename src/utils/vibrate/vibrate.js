import { VIBRATION_PATTERN } from '../../constants'

export const vibrate = () => {
  if (window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(VIBRATION_PATTERN)
  } else {
    console.info('Vibration is not supported in your browser/device')
  }
}
