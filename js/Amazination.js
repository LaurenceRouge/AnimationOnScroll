/* @flow */

type AnimationOptions = null | {
  delay?: number,
  duration?: number,
  easing?: string,
  offset?: 'bottom-in-view' | number | string | Function,
  opacity?: number,
  scale?: number,
  translateX?: number,
}

type AnimationType = 'fadeIn' | 'fadeOut' | 'slideLeft' | 'slideRight' | 'scale'

class Amazination {
  renderAnimation(elements: string, animation: AnimationType, options: AnimationOptions) {
    const parameters = {
      default: {
        delay: options.delay || 0,
        duration: options.duration || 300,
        easing: options.easing || 'linear',
      },
      ...options,
    }
    switch (animation) {
      case 'fadeIn':
      case 'fadeOut':
        return anime(getFadeOptions(animation, elements, parameters))
      case 'scale':
        return anime(getScaleOptions(elements, parameters))
      case 'slideUp':
      case 'slideDown':
      case 'slideLeft':
      case 'slideRight':
        return anime(getSlideOptions(animation, elements, parameters))
      default:
        return false
    }
  }

  run(elements: string, animation: AnimationType, options: AnimationOptions) {
    const container = elements.split(' ')[0]

    return new Waypoint({
      element: document.querySelector(`${container}`),
      handler: () => { this.renderAnimation(elements, animation, options) },
      offset: options && options.offset,
    })
  }
}
