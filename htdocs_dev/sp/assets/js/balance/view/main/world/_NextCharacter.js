import ModelTest from '../../../model/_Model';
let model = ModelTest.instance;

class NextCharacter{
  constructor(o){
    var me = this;
    this.elm = document.getElementById(o);
    
    me.elm.addEventListener('mousedown', function(){
      model.getNextCharacter();
    }, false);
  }
}

export default NextCharacter;