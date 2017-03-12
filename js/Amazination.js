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
    return anime(getAnimationOptions(elements, animation, options))
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

// @TODO:
// - Split getAnimationOptions() into smaller helpers (getScaleOptions, getSlideOptions, getFadeOptions, etc)
// - Handle every options
// - Add 'easing' as an option
// - Migrate from translateX to translate(x,y) (for 'slideTop' and 'slideDown')
// - Handle animations composition
// - Implement Amazination.timeline()
