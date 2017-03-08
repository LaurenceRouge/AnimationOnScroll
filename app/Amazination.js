/* @flow */

/*************************************/
/*                                   */
/*      AMAZING ANIMATION CLASS      */
/*                                   */
/*************************************/

type AnimationType = 'fadeIn' | 'fadeOut' | 'slideToLeft' | 'slideToRight'

type AnimationProperties = {
  x?: number,
  y?: number,
  z?: number,
  opacity?: number,
}

class Amazination {
    run(elements: Array<string>, animationType: AnimationType, animationProperties: AnimationProperties, duration: number) {
      const container = document.querySelector(elements[0])
      const block = document.querySelector(elements[1])
      const { x, y, z, opacity } = animationProperties

      const scrollController = new ScrollMagic.Controller()
      let tweenMaxAnimation

      switch (animationType) {
        case 'slideToLeft':
        case 'slideToRight': {
          tweenMaxAnimation = new TweenMax.to(block, duration, { x, y, z })
          break;
        }
        case 'fadeIn':
        case 'fadeOut': {
          tweenMaxAnimation = new TweenMax.to(block, duration, { opacity })
          break;
        }
        default:
          return false
      }

      const scene = new ScrollMagic.Scene({
        triggerElement: container
      }).setTween(tweenMaxAnimation).addIndicators()

      scrollController.addScene(scene)
    }
}
