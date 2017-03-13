/* flow */

type AnimationDirections = 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight'

type AnimationOpacity = 'fadeIn' | 'fadeOut'

type AnimationOptions = null | {
  offset?: 'bottom-in-view' | number | string | Function,
  opacity?: number,
  scale?: number,
  timing?: {
    delay?: number,
    duration?: number,
    easing?: string,
  },
  translateX?: number,
}

const getFadeOptions = (animation: AnimationOpacity, targets: string, options: AnimationOptions) => {
  const { offset, opacity: opacityValue, timing } = options
  const defaultOpacity = Number(animation === 'fadeIn')
  return {
    ...timing,
    targets,
    opacity: opacityValue || defaultOpacity,
  }
}

const getSlideOptions = (direction: AnimationDirections, targets: string, options: AnimationOptions) => {
  const { offset, translate, timing } = options
  const translateValue = direction === 'slideLeft' | direction === 'slideUp' ? -translate : translate
  return {
    ...timing,
    targets,
    translateX: direction === 'slideLeft' || direction === 'slideRight' ? translateValue : 0,
    translateY: direction === 'slideUp' || direction === 'slideDown' ? translateValue : 0,
  }
}

const getScaleOptions = (targets: string, options: AnimationOptions) => {
  const { offset, scale: scaleValue, timing } = options
  return {
    ...timing,
    targets,
    scale: scaleValue || 1.2,
  }
}
