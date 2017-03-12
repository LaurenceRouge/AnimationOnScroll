/* @flow */

type AnimationOptions = null | {
  delay?: number,
  duration?: number,
  offset?: 'bottom-in-view' | number | string | Function,
  opacity?: number,
  scale?: number,
  translateX?: number,
}

type AnimationType = 'fadeIn' | 'fadeOut' | 'slideLeft' | 'slideRight' | 'scale'

class Amazination {
  renderAnimation(elements: string, animation: AnimationType, options: AnimationOptions) {
    const { opacity, scale, translateX } = options
    switch (animation) {
      case 'fadeIn':
        return anime(getFadeOptions(opacity || 1, elements, options))
      case 'fadeOut':
        return anime(getFadeOptions(opacity || 0, elements, options))
      case 'scale':
        return anime(getScaleOptions(scale || 1.2, elements, options))
      case 'slideLeft':
        return anime(getSlideOptions(-translateX, elements, options))
      case 'slideRight':
        return anime(getSlideOptions(translateX, elements, options))
      default:
        return false
    }
  }

  run(elements: string, animation: AnimationType, options: AnimationOptions) {
    const container = elements.split(' ')[0]
    const waypoint = new Waypoint({
      element: document.querySelector(`${container}`),
      handler: () => { this.renderAnimation(elements, animation, options) },
      offset: options && options.offset,
    })
  }
}
