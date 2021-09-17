
import React, { memo } from 'react'
import './css/todos.css'
import { connect } from 'react-redux'
import { updateTodoAction, deleteTodoAction } from './../modules/todoListR'

function TodoListItem(props) {

    const { todo } = props;
    const { updateTodo, deleteTodo } = props;
    
    return (
        <tr>
            <td>{todo.id}</td>
            <td><span className={todo.done ? 'done': ''}>{todo.text}</span></td> 
            <td>
                <button className="btn btn-primary" onClick={ () => updateTodo(todo.id) } >Complete</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={ () => deleteTodo(todo.id) } >Delete</button>
            </td>
        </tr>
    )
}

export default connect(
    state => ({}),
    dispatch => ({
        updateTodo: (id) => dispatch(updateTodoAction(id)),
        deleteTodo: (id) => dispatch(deleteTodoAction(id))
    })
)(memo(TodoListItem))
