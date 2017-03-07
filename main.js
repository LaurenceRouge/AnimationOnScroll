const animate = () => {
  /* --- ANIMATION 1 ---*/
    const block = document.querySelector("#block-1");
    const container = document.querySelector("#container-1");

    const controller = new ScrollMagic.Controller();
    const blockTween = new TweenMax.to(block, .6, {
        marginLeft: '200px'
    });
    const scene1 = new ScrollMagic.Scene({
        triggerElement: container
    })
    .setTween(blockTween)
    .addIndicators();

    /* --- ANIMATION 2 --- */
    const block2 = document.querySelector("#block-2");
    const container2 = document.querySelector("#container-2");


    const blockTween2 = new TweenMax.to(block2, .6, {
        marginRight: '200px'
    });

    const scene2 = new ScrollMagic.Scene({
        triggerElement: container2
    })
    .setTween(blockTween2)
    .addIndicators();

    /* --- CONTROLLER --- */
    controller.addScene([
      scene1,
      scene2
    ]);
    console.log('hellloooooo');
}
animate();
