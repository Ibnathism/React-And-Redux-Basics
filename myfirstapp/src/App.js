import React, { Component } from 'react';
//import Nested from './Props';
import Conditional from './ConditionalOutput';

class App extends Component {
  //Outputting List
  state = {
    donkeys : [
      {name: 'James', age: 12, hair: 'black', id: 1},
      {name: 'Peter', age: 15, hair: 'red', id: 2},
      {name: 'Swiny', age: 16, hair: 'white', id: 3}
    ]
  }
  render(){
    return (

      //Outputting single or multiple element having props
      /*<div className="App">
          <h1>My first React app!</h1>
          <p>Welcome :)</p>
          <Nested name="Muntaka" course="React and Redux" session="12"/>
          <Nested name="Ashiq" course="Django" session="10"/>
          <Nested donkeys={this.state.donkeys}/>
      </div>*/

      //Outputting a List having props
      /*<div className="App">
          <h1>My first React app!</h1>
          <p>Welcome :)</p>
          <Nested donkeys={this.state.donkeys}/>
      </div>*/
      
      
      //Conditional Output
      <div className="App">
          <h1>My first React app!</h1>
          <p>Welcome :)</p>
          <Conditional donkeys={this.state.donkeys}/>
      </div>


    );
  }
}

export default App;
