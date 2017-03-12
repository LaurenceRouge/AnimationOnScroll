/* flow */

type AnimationOptions = null | {
  delay?: number,
  duration?: number,
  opacity?: number,
  offset?: 'bottom-in-view' | number | string | Function,
  scale?: number,
  translateX?: number,
}

const getFadeOptions = (opacity: number, targets: string, options: AnimationOptions) => {
  const { delay, duration, offset } = options
  return {
    targets,
    opacity,
    easing: 'linear',
    duration: duration || 300,
    delay: delay || 0,
  }
}

const getSlideOptions = (translateX: number, targets: string, options: AnimationOptions) => {
  const { delay, duration, offset } = options
  return {
    targets,
    translateX,
    easing: 'linear',
    duration: duration || 300,
    delay: delay || 0,
  }
}

const getScaleOptions = (scale: number, targets: string, options: AnimationOptions) => {
  const { delay, duration, offset } = options
  return {
    targets,
    scale,
    easing: 'linear',
    duration: duration || 300,
    delay: delay || 0,
  }
}
