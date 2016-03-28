import Engine from '../../../../util/_Engine';
import ModelTest from '../../../../model/_Model';
let model = ModelTest.instance;

class Horse{
  constructor(){
    var param = {
        x: window.innerWidth/2,
        y: Math.floor(window.innerHeight*0.5),
        w: window.innerWidth/2,
        h: Math.floor(window.innerHeight*0.3)
    };
    var Bodies = Matter.Bodies,
        Events = Matter.Events;
        
    var _engine = Engine.getInstance();

    Events.on(_engine, 'collisionEnd', function(){
       //console.log('hit');
       model.delCharacter();
    });

    this.bodies = Bodies.rectangle(param.x, param.y, param.w, param.h);
  }
  getInstance(){
    return this.bodies;
  }
}

export default Horse;