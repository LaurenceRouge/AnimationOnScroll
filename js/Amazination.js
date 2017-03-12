/* @flow */

type AnimationOptions = null | {
  delay?: number,
  duration?: number,
  offset?: 'bottom-in-view' | number | string | Function,
  opacity?: number,
  scale?: number,
  translate?: number,
}

type AnimationType = 'fadeIn' | 'fadeOut' | 'slideLeft' | 'slideRight' | 'scale'

class Amazination {
  renderAnimation(elements: string, animation: AnimationType, options: AnimationOptions) {
    const { opacity, scale, translateX } = options
    switch (animation) {
      case 'fadeIn':
      case 'fadeOut':
        return anime(getFadeOptions(animation, elements, options))
      case 'scale':
        return anime(getScaleOptions(elements, options))
      case 'slideUp':
      case 'slideDown':
      case 'slideLeft':
      case 'slideRight':
        return anime(getSlideOptions(animation, elements, options))
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
