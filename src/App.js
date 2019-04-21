import React, { Component } from 'react';
import './App.css';
import InputToDo from './components/InputToDo/InputToDo'
import ToDoList from './components/ToDoList/ToDoList'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <InputToDo />
        <ToDoList />
      </div>
    );
  }
}

export default App;
