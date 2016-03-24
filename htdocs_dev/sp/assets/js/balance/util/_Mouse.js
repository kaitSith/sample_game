import ModelTest from '../model/_Model';
let model = ModelTest.instance;

class Mouse{
  constructor(engine){
    var Events = Matter.Events;
    var MouseConstraint = Matter.MouseConstraint;
    this.mouseConstraint = MouseConstraint.create(engine);
    
    Events.on(engine, 'mousedown', function(e){
      model.addCharacter();
    });
  }
  getInstance(){
    return this.mouseConstraint;
  }
}

export default Mouse;