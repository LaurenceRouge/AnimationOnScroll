/* flow */

type AnimationDirections = 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight'

type AnimationOpacity = 'fadeIn' | 'fadeOut'

type AnimationOptions = null | {
  delay?: number,
  duration?: number,
  opacity?: number,
  offset?: 'bottom-in-view' | number | string | Function,
  scale?: number,
  translateX?: number,
}

const getFadeOptions = (animation: AnimationOpacity, targets: string, options: AnimationOptions) => {
  const { delay, duration, offset, opacity: opacityValue } = options
  const defaultOpacity = Number(animation === 'fadeIn')
  return {
    targets,
    opacity: opacityValue || defaultOpacity,
    easing: 'linear',
    duration: duration || 300,
    delay: delay || 0,
  }
}

const getSlideOptions = (direction: AnimationDirections, targets: string, options: AnimationOptions) => {
  const { delay, duration, offset, translate } = options
  const translateValue = direction === 'slideLeft' | direction === 'slideUp' ? -translate : translate
  return {
    targets,
    translateX: direction === 'slideLeft' || direction === 'slideRight' ? translateValue : 0,
    translateY: direction === 'slideUp' || direction === 'slideDown' ? translateValue : 0,
    easing: 'linear',
    duration: duration || 300,
    delay: delay || 0,
  }
}

const getScaleOptions = (targets: string, options: AnimationOptions) => {
  const { delay, duration, offset, scale: scaleValue } = options
  return {
    targets,
    scale: scaleValue || 1.2,
    easing: 'linear',
    duration: duration || 300,
    delay: delay || 0,
  }
}
