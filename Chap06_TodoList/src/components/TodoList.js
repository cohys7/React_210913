
import React from 'react'
import './css/todos.css';
import TodoListItem from './TodoListItem'

function Todolist(props){

    const { todoList, deleteTodo, updateTodo } = props;

    return (
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
                    { todoList.map( todo => <TodoListItem key={todo.id} todo={todo} 
                                deleteTodo={deleteTodo} updateTodo={updateTodo} /> ) }
                    {/* todoList.map( todo => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.text}</td>
                            <td><button>C</button></td>
                            <td><button>D</button></td>
                        </tr>
                    )) */}
                </tbody>
            </table>
        </div>
    )
}
export default Todolist;
