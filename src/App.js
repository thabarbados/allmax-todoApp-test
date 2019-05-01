import React, { Component } from 'react';
import './App.css';
import InputToDo from './components/InputToDo/InputToDo'
import ToDoList from './components/ToDoList/ToDoList'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>ToDo app</h1>
        <InputToDo />
        <ToDoList />
      </div>
    );
  }
}

export default App;
