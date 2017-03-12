/* @flow */

const elements = [
  {
    targets: '#container-1 #block-1',
    animation: 'scale',
    options: {
      scale: 1.5,
    },
  },
  {
    targets: '#container-2 #block-2',
    animation: 'fadeIn',
    options: {
      offset: 700,
      delay: 450,
    },
  },
  {
    targets: '#container-2 #block-3',
    animation: 'fadeIn',
    options: {
      offset: 700,
      delay: 450,
    },
  },
]

const animation = new Amazination

elements.map((element) => {
  animation.run(element.targets, element.animation, element.options)
})
