
import React from 'react'
import './css/todos.css'

function TodoListItem( props ) {
    
    const { todo, deleteTodo, updateTodo } = props;

    return (
        <tr>
            <td>{todo.id}</td>
            {/* className={ cs(done: todo.done) } */}
            <td><span className={ todo.done ? 'done' : '' }>{todo.text}</span></td>
            <td>
                <button className="btn btn-primary" onClick={ () => updateTodo(todo.id) }>Complete</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={ () => deleteTodo(todo.id) }>Delete</button>
            </td>
        </tr>
    )
}

export default React.memo(TodoListItem)
