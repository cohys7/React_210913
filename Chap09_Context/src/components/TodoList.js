
import React from 'react'
import './css/todos.css';
import TodoListItem from './TodoListItem'
import { TodoListConsumer } from './../modules/TodoContext'

function Todolist(){

    return (
        <TodoListConsumer>
            {data => (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{width:'10%'}}>ID</th>
                                <th>Todo</th>
                                <th style={{width:'10%'}}>Complete</th>
                                <th style={{width:'10%'}}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            { data.state.todoList.map( todo => <TodoListItem key={todo.id} todo={todo} />)}
                        </tbody>
                    </table>
                </div>
            )}
        </TodoListConsumer>
        
    )
    
}
export default Todolist;
