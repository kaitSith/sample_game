class Stand{
  constructor(){
    var param = {
        x: window.innerWidth/2,
        y: Math.floor(window.innerHeight*0.8),
        w: window.innerWidth/2,
        h: 60
    };
    var Bodies = Matter.Bodies;
    
    this.bodies = Bodies.rectangle(param.x, param.y, param.w, param.h, {isStatic: true});
  }
  getInstance(){
    return this.bodies;
  }
}

export default Stand;