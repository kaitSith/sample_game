//import ModelTest from '../../../model/_Model';
//let model = ModelTest.instance;
import Stand from './_Stand';
import Horse from './_Horse';
import Character from './_Character';
import Engine from '../../../../util/_Engine';
import Mouse from '../../../../util/_Mouse';

class Stage{
  constructor(){
    var World = Matter.World,
        Bodies = Matter.Bodies;
    
    var _engine = Engine.getInstance();

    var mouse = new Mouse();
    
    var stand = new Stand().getInstance();
    var horse = new Horse().getInstance();
    var character = new Character();
    //var character = new Character().getInstance();
    
    // World.add(_engine.world, mouse);
    World.add(_engine.world, [stand, horse]);
    
    Engine.init.run(_engine);
  }
}

export default Stage;