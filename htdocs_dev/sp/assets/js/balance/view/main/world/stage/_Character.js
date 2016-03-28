import Engine from '../../../../util/_Engine';
import ModelTest from '../../../../model/_Model';
let model = ModelTest.instance;

class Character{
  constructor(){
    var me = this;

    window.addEventListener('SET_CHARACTER', function(){
        me.setCharacter();
    }, false);
   
    window.addEventListener('GET_CHARACTER', function(){
        me.getCharacter();
    }, false);
  }
  setCharacter(){
    var _engine = Engine.getInstance();
    var _position = model.getMousePosition();
    var _context = Engine.getCxt();
    _context.rect(_position.mouse.position.x, _position.mouse.position.y, 80, 80);
    _context.stroke();
  }
  getCharacter(){
    var World = Matter.World,
        Bodies = Matter.Bodies;
    
    var _engine = Engine.getInstance();
    var _position = model.getMousePosition();
    var _character = Bodies.rectangle(_position.mouse.position.x, _position.mouse.position.y, 80, 80);
    model.addCharacter(_character);
    
    World.add(_engine.world, [_character]);
  }
}

export default Character;