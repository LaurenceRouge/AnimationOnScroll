/* flow */

type AnimationOptions = null | {
  delay?: number,
  duration?: number,
  opacity?: number,
  offset?: 'bottom-in-view' | number | string | Function,
  scale?: number,
  translateX?: number,
}

type AnimationType = 'fadeIn' | 'fadeOut' | 'slideLeft' | 'slideRight' | 'scale'

const getAnimationOptions = (targets: string, animation: AnimationType, options: AnimationOptions) => {
  const { delay, duration, opacity, offset, scale, translateX } = options

  switch (animation) {
    case 'scale':
      return {
        targets,
        scale,
        easing: 'linear',
        duration: duration || 300,
        delay: delay || 0,
      }
    case 'fadeIn':
    case 'fadeOut':
      return {
        targets,
        opacity: Number(animation === 'fadeIn'),
        easing: 'linear',
        duration: duration || 300,
        delay: delay || 0,
      }
    case 'slideLeft':
    case 'slideRight':
      return {
        targets,
        translateX: animation === 'slideLeft' ? -translateX : translateX,
        easing: 'linear',
        duration: duration || 300,
        delay: delay || 0,
      }
    default:
      return false
  }
}
