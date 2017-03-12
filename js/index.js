/* @flow */

const elements = [
  {
    targets: '#container-1 #block-1',
    animation: 'slideDown',
    options: {
      translate: 50,
    },
  },
  {
    targets: '#container-2 #block-2',
    animation: 'fadeIn',
    options: {
      delay: 450,
      offset: 700,
      opacity: 0.2,
    },
  },
  {
    targets: '#container-2 #block-3',
    animation: 'fadeIn',
    options: {
      delay: 450,
      offset: 700,
      opacity: 0.3,
    },
  },
]

const animation = new Amazination

elements.map((element) => {
  animation.run(element.targets, element.animation, element.options)
})
