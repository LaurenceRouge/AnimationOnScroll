/* @flow */

const elements = [
  {
    targets: '#container-1 #block-1',
    animation: 'slideDown',
    options: {
      duration: 1000,
      easing: 'easeOutSine',
      translate: 25,
    },
  },
  {
    targets: '#container-2 #block-2',
    animation: 'fadeIn',
    options: {
      delay: 450,
      duration: 1000,
      easing: 'easeInQuad',
      offset: 700,
    },
  },
  {
    targets: '#container-2 #block-3',
    animation: 'fadeIn',
    options: {
      delay: 450,
      duration: 1500,
      easing: 'easeInQuart',
      offset: 700,
    },
  },
  {
    targets: '#container-2 #block-4',
    animation: 'fadeIn',
    options: {
      delay: 450,
      duration: 1750,
      easing: 'easeInQuart',
      offset: 700,
      opacity: 0.5,
    },
  },
]

const animation = new Amazination

elements.map((element) => {
  animation.run(element.targets, element.animation, element.options)
})
