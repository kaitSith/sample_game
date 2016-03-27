import Engine from './_Engine';
import ModelTest from '../model/_Model';
let model = ModelTest.instance;

class Mouse{
  constructor(){
    var Events = Matter.Events;
    var MouseConstraint = Matter.MouseConstraint;
    this.mouseConstraint = MouseConstraint.create(Engine.getInstance());
    
    Events.on(this.mouseConstraint, 'mousemove', function(e){
      model.addCharacter(e);
    });
    Events.on(this.mouseConstraint, 'mouseup', function(e){
      //model.addCharacter(e);
    });
  }
  getInstance(){
    return this.mouseConstraint;
  }
}

export default Mouse;