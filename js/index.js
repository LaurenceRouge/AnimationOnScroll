/* @flow */

const amazination = new Amazination

const homeText = {
  targets: '#container-1 #block-1',
  animation: 'slideDown',
  options: {
    delay: 300,
    duration: 1000,
    easing: 'easeOutSine',
    translate: 25,
  },
}

amazination.run(homeText.targets, homeText.animation, homeText.options)

/************************************************************************************/

const cardsAnimationBlocks = {
  container: '#container-2',
  elements: ['#block-2', '#block-3', '#block-4'],
}

const cardsAnimationParameters = {
  animation: 'fadeIn',
  options: {
    delay: 250,
    duration: 1000,
    easing: 'easeInQuad',
    frequency: 150,
    offset: 700,
  },
}

amazination.timeline(cardsAnimationBlocks, cardsAnimationParameters)
