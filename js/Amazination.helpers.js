/* flow */

type AnimationDirections = 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight'

type AnimationOpacity = 'fadeIn' | 'fadeOut'

type AnimationOptions = null | {
  delay?: number,
  duration?: number,
  easing?: string,
  offset?: 'bottom-in-view' | number | string | Function,
  opacity?: number,
  scale?: number,
  translateX?: number,
}

const getFadeOptions = (animation: AnimationOpacity, targets: string, options: AnimationOptions) => {
  const { delay, duration, easing, offset, opacity: opacityValue } = options
  const defaultOpacity = Number(animation === 'fadeIn')
  return {
    targets,
    delay: delay || 0,
    duration: duration || 300,
    easing: easing || 'linear',
    opacity: opacityValue || defaultOpacity,
  }
}

const getSlideOptions = (direction: AnimationDirections, targets: string, options: AnimationOptions) => {
  const { delay, duration, easing, offset, translate } = options
  const translateValue = direction === 'slideLeft' | direction === 'slideUp' ? -translate : translate
  return {
    targets,
    delay: delay || 0,
    duration: duration || 300,
    easing: easing || 'linear',
    translateX: direction === 'slideLeft' || direction === 'slideRight' ? translateValue : 0,
    translateY: direction === 'slideUp' || direction === 'slideDown' ? translateValue : 0,
  }
}

const getScaleOptions = (targets: string, options: AnimationOptions) => {
  const { delay, duration, easing, offset, scale: scaleValue } = options
  return {
    targets,
    delay: delay || 0,
    duration: duration || 300,
    easing: easing || 'linear',
    scale: scaleValue || 1.2,
  }
}
