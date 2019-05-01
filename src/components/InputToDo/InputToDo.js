import React, { Component } from 'react'
import axios from 'axios'
import './InputToDo.css'
import Button from '../Button/Button'

class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: '' };
    }

    validate = () => {
        if (!this.state.todo) {
            return false
        }
        return true
    }


    SubmitHandler = async() => {
        const todos = {
            key: this.state.todo
        };

        await axios.post('https://allmax-todo-test.firebaseio.com/todos.json', todos)
            .then(response => { console.log(response) })
            .catch(error => console.log(error))

        document.location.reload(true)

        this.setState({ todo: '' })
    }

    ToDoChangeHandler = (event) => {
        this.setState({ todo: event.target.value });
    }

    render() {
        return (
            <div className="InputToDo">
                <input 
                    type="text" 
                    name="todo" 
                    placeholder = "enter task here"
                    value={this.state.todo}
                    onChange={this.ToDoChangeHandler} 
                />
                <Button 
                    type="submit" 
                    className="Button add" 
                    disabled={!this.validate()} 
                    onClick={this.SubmitHandler}
                >
                Add
                </Button>
            </div>
        );
    }
}
export default ToDoInput