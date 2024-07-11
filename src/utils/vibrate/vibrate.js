export const vibrate = () => {
  if (window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate([500, 200, 500])
  } else {
    console.info('Vibration is not supported in your browser/device')
  }
}
