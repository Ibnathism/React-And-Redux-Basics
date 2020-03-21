import React, { Component } from 'react';
import Nested from './Props';

class App extends Component {
  render(){
    return (
      <div className="App">
          <h1>My first React app!</h1>
          <p>Welcome :)</p>
          <Nested name="Muntaka" course="React and Redux" session="12"/>
          <Nested name="Ashiq" course="Django" session="10"/>
      </div>
    );
  }
}

export default App;
