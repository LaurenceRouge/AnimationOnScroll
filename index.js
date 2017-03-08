

/*************************************/
/*                                   */
/*             USE CASE              */
/*                                   */
/*************************************/

const amazination = new Amazination();

const animatedElements = {
  header: [['#container-1', '#block-1'], 'slideToRight', { x: 200 }, 0.3],
  footer: [['#container-2', '#block-2'], 'fadeOut', { opacity: 0 }, 0.8]
};

Object.keys(animatedElements).map(elementAnimationOptions => {
  amazination.run(...animatedElements[elementAnimationOptions]);
});