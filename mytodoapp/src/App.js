import React, { Component } from 'react';
import TodoList from './todoList';
import AddItem from './AddItem';


class App extends Component {
  state = {
    todos : [
      {id: 1, todo: 'Finish Offline'},
      {id: 2, todo: 'Read Research Paper'}
    ]
  }

  addItem = (newItem) => {
    newItem.id = Math.random();
    let temp = [...this.state.todos, newItem]
    this.setState({
      todos: temp
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
