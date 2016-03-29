import Stage from './stage/_Stage';
import NextCharacter from './_NextCharacter';
import Count from './_Count';

class World{
  constructor(){
    var stage = new Stage();
  }
}

var nextCharacter = new NextCharacter('nc');
var count = new Count('count');

export default World;