import React, { Component } from 'react'
import './ToDoList.css'
import axios from 'axios'
import Button from '../Button/Button'

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = { ToDoArr: [] };
    }


    DeleteHandler = (id, index) => {
        const ToDoArr = this.state.ToDoArr

        axios.delete(`https://allmax-todo-test.firebaseio.com/todos/${id}.json`)
        delete ToDoArr[index]

        this.setState({
            ToDoArr
        })
    }



    CompleteHandler = (index) => {
        const ToDoArr = this.state.ToDoArr
        ToDoArr[index].styleName = 'CompletedToDo'
        ToDoArr[index].disabled = true

        this.setState({
            ToDoArr
        })
    }


    componentDidMount = async() => {
        try {
            const response = await axios.get(`https://allmax-todo-test.firebaseio.com/todos.json`)

            const ToDoArr = []
            Object.keys(response.data).forEach((key, index) => {
                ToDoArr.push({
                    index: index,
                    id: key,
                    name: Object.values(response.data[key]).toString(),
                    styleName: '',
                    disabled: false
                })
            })


            this.setState({
                ToDoArr
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                {this.state.ToDoArr.map(item =>
                    <div key={item.id} className="ToDoList">
                        <Button
                            className="Button completed"
                            onClick={() => this.CompleteHandler(item.index)}
                            disabled={item.disabled}>Completed
                        </Button>
                        <p className={item.styleName}>{item.name}</p>
                        <Button
                            url={item.id}
                            className="Button deleted"
                            onClick={() => this.DeleteHandler(item.id, item.index)}>
                            Delete
                        </Button>
                    </div>)}
            </div>
        )
    }
}

export default ToDoList