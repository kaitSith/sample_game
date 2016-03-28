let singleton = Symbol();
let singletonEnforcer = Symbol();

class ModelTest{
  constructor(enforcer){
  	this.count = 0;
    this.position = null;
    this.char_flg = false;
  	this.events = {
  	  COUNT_UP: 'COUNT_UP',
      SET_CHARACTER: 'SET_CHARACTER',
      GET_CHARACTER: 'GET_CHARACTER'
  	};
    this.character = [];
  	if(enforcer != singletonEnforcer) throw 'Cannot construct singleton';
  }
  static get instance(){
  	if(!this[singleton]){
  	  this[singleton] = new ModelTest(singletonEnforcer);
  	}
  	return this[singleton];
  }
  countUp(){
    var me = this;
    me.count++;
    console.log(me.count);
    me.dispatch(me.events.COUNT_UP);
  }
  setCharacter(e){
    var me = this;
    me.setMousePosition(e);
    if(me.char_flg){
      me.dispatch(me.events.SET_CHARACTER);
    }
  }
  getCharacter(e){
    var me = this;
    me.setMousePosition(e);
    if(me.char_flg){
      me.dispatch(me.events.GET_CHARACTER);
      me.char_flg = false;  
    }
  }
  addCharacter(obj){
    var me = this;
    me.character.push(obj);
  }
  delCharacter(){
    var me = this;
    var Body = Matter.Body;
    
    if(me.character.length > 0){
      Body.setStatic(me.character[0], true); 
      me.character.splice(0, 1);
      me.countUp();
    }
  }
  setMousePosition(e){
    this.position = e;
  }
  getMousePosition(){
    return this.position;
  }
  getNextCharacter(){
    this.char_flg = true;
  }
  dispatch(event){
    var ev = new Event(event);
    window.dispatchEvent(ev);
  }
}

export default ModelTest;