import React, { Component } from 'react';
//import Nested from './props';
//import Conditional from './conditional';
import AddDonkey from './addData';
import DeleteDonkey from './deleteData';

class App extends Component {
  //Outputting List
  state = {
    donkeys : [
      {name: 'James', age: 12, hair: 'black', id: 1},
      {name: 'Peter', age: 15, hair: 'red', id: 2},
      {name: 'Swiny', age: 16, hair: 'white', id: 3}
    ]
  }

  //The new donkey input from onSubmitHandler of form.js  
  //to add the newdonkey to the donkeys array we will have to make a temporary
  //array and copy the previous donkeys and the new donkey and then set state 
  //this is good practice , but the other way around is using push which is bad practice
  addDonkey = (newDonkey) => {  
    //console.log(donkey);
    newDonkey.id = Math.random();
    let temp = [...this.state.donkeys, newDonkey]
    this.setState({
      donkeys: temp
    })
  }


  removeDonkey = (id) => {
    //console.log(id);
    let temp = this.state.donkeys.filter(i => {
      return i.id !== id
    });
    this.setState({
      donkeys: temp
    })
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
      // <div className="App">
      //     <h1>My first React app!</h1>
      //     <p>Welcome :)</p>
      //     <Conditional donkeys={this.state.donkeys}/>
      // </div>

      //add new donkey using form
      //pass the 'addDonkey' function as a prop to the AddDonkey class
      <div className="App">
          <h1>My first React app!</h1>
          <p>Welcome :)</p>
          <DeleteDonkey removeDonkey={this.removeDonkey} donkeys={this.state.donkeys}/>
          <AddDonkey addDonkey={this.addDonkey}/>
      </div>


    );
  }
}

export default App;
