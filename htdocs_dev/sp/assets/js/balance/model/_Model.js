let singleton = Symbol();
let singletonEnforcer = Symbol();

class ModelTest{
  constructor(enforcer){
  	this.val = {
  	  NUM: 0
  	};
    this.position = null;
    this.char_flg = false;
  	this.events = {
  	  COUNT_UP: 'COUNT_UP',
      SET_CHARACTER: 'SET_CHARACTER',
      GET_CHARACTER: 'GET_CHARACTER'
  	};
  	if(enforcer != singletonEnforcer) throw 'Cannot construct singleton';
  }
  static get instance(){
  	if(!this[singleton]){
  	  this[singleton] = new ModelTest(singletonEnforcer);
  	}
  	return this[singleton];
  }
  setCount(n){
    var me = this;
    me.val.NUM += 1;
  	var ev = new Event(me.events.COUNT_UP);
  	window.dispatchEvent(ev);
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