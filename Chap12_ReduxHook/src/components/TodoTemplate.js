
import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoTemplate = () => {

    return (
        <div>
            <h3>Todo List</h3>

            <TodoForm/>
            <TodoList />
        </div>
    )
}
export default TodoTemplate;