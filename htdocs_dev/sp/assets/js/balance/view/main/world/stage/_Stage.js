//import ModelTest from '../../../model/_Model';
//let model = ModelTest.instance;
import Stand from './_Stand';
import Horse from './_Horse';
import Character from './_Character';
import Engine from '../../../../util/_Engine';
import Mouse from '../../../../util/_Mouse';

class Stage{
  constructor(){
    //var Engine = Matter.Engine,
    var World = Matter.World,
        Bodies = Matter.Bodies;
    
    var _engine = Engine.getInstance();

    // var container = document.getElementById('world');
    // var _engine = Engine.create(container, {
    //     render: {
    //         options: {
    //             wireframes: false,
    //             width: window.innerWidth,
    //             height: window.innerHeight,
    //             bakcground: 'rgba(255, 255, 255, 1)'
    //         }
    //     }
    // });
    
    // var mouse = new Mouse(_engine).getInstance();
    var mouse = new Mouse();
    
    var stand = new Stand().getInstance();
    var horse = new Horse().getInstance();
    var character = new Character().getInstance();
    
    // World.add(_engine.world, mouse);
    World.add(_engine.world, [stand, horse, character]);
    
    Engine.init.run(_engine);
  }
}

export default Stage;