var Engine = {
  init: Matter.Engine,
  container: document.getElementById('world'),
  instance: null,
  getInstance: function(){
    var me = this;
    if(me.instance){
    }else{
      me.instance = me.init.create(me.container, {
        render: {
          options: {
            wireframes: false,
            width: window.innerWidth,
            height: window.innerHeight,
            bakcground: 'rgba(255, 255, 255, 1)'
          }
        }
      });
    }
    return me.instance;
  }
}

export default Engine;