import React, { Component } from 'react';
import Nested from './Nested';

class App extends Component {
  render(){
    return (
      <div className="App">
          <h1>My first React app!</h1>
          <p>Welcome :)</p>
          <Nested />
      </div>
    );
  }
}

export default App;
