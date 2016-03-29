import ModelTest from '../../../model/_Model';
let model = ModelTest.instance;

class Count{
  constructor(elm){
    var me = this;
  	this.elm = document.getElementById(elm);

    window.addEventListener('COUNT_UP', function(){
      me.elm.innerHTML = model.getCount();
    }, false);
  }
}

export default Count;