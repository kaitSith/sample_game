import Engine from '../../../../util/_Engine';
import ModelTest from '../../../../model/_Model';
let model = ModelTest.instance;

class Character{
  constructor(){
    var me = this;
   
    window.addEventListener('ADD_CHARACTER', function(){
        me.addCharacter();
    }, false);
  }
  getInstance(){
    var Bodies = Matter.Bodies;
    this.bodies = Bodies.rectangle(450, 50, 80, 80);
    return this.bodies;
  }
  addCharacter(){
    var World = Matter.World,
        Bodies = Matter.Bodies;
    
    var _engine = Engine.getInstance();
    var _position = model.getMousePosition();
    var _character = Bodies.rectangle(_position.mouse.position.x, _position.mouse.position.y, 80, 80);
    
    World.add(_engine.world, [_character]);
  }
}

export default Character;