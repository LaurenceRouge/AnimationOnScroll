/* @flow */

type AnimationOptions = null | {
  delay?: number,
  duration?: number,
  easing?: string,
  frequency?: number,
  offset?: 'bottom-in-view' | number | string | Function,
  opacity?: number,
  scale?: number,
  translateX?: number,
}

type AnimationType = 'fadeIn' | 'fadeOut' | 'slideLeft' | 'slideRight' | 'scale'

type TimelineElements = {
  container: string,
  elements: Array<string>,
}

type TimelineParameters = {
  animation: AnimationType,
  options: AnimationOptions,
}

class Amazination {
  renderAnimation(elements: string, animation: AnimationType, options: AnimationOptions) {
    const parameters = {
      timing: {
        delay: options && options.delay || 0,
        duration: options && options.duration || 300,
        easing: options && options.easing || 'linear',
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

  renderTimeline(blocks: TimelineElements, parameters: TimelineParameters) {
    const { container, elements } = blocks
    const { animation, options: { delay, frequency } } = parameters

    elements.map((element, index) => {
      const options = { ...parameters.options, delay: delay + (frequency * index)}
      setTimeout(() => {
        this.renderAnimation(`${container} ${element}`, animation, options)
      }, options.delay)
    })
  }

  run(elements: string, animation: AnimationType, options: AnimationOptions) {
    const container = elements.split(' ')[0]

    return new Waypoint({
      element: document.querySelector(`${container}`),
      handler: () => { this.renderAnimation(elements, animation, options) },
      offset: options && options.offset,
    })
  }

  timeline(blocks: TimelineElements, parameters: TimelineParameters) {
    const { container } = blocks

    return new Waypoint({
      element: document.querySelector(`${container}`),
      handler: () => { this.renderTimeline(blocks, parameters) },
      offset: (parameters && parameters.options) && parameters.options.offset,
    })
  }
}
