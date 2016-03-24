import ModelTest from '../../../../model/_Model';
let model = ModelTest.instance;

class Character{
  constructor(){
    // var Bodies = Matter.Bodies;
    // this.bodies = Bodies.rectangle(450, 50, 80, 80);
    
    window.addEventListener('ADD_CHARACTER', function(){
        this.getInstance();
    }, false);
  }
  getInstance(){
    var Bodies = Matter.Bodies;
    this.bodies = Bodies.rectangle(450, 50, 80, 80);
    return this.bodies;
  }
}

export default Character;