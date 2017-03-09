const animate = (element, animation)=>{
  let anim = document.querySelector(element);
  if(!anim.classList.contains(animation)){
    anim.classList.add(animation)
  }
}

const waypoint = new Waypoint({
  element: document.querySelector('#container-2'),
  handler: (direction) => {
    animate('#block-2', 'bounceIn');
    animate('#block-3', 'rollIn')
  },
  offset: 700
})
