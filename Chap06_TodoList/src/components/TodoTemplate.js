
import React, { useCallback, useRef, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const makeTodo = () => {
    const todos = [];
    for(let i = 1; i <= 5000; i++) {
        todos.push( {id: i, text: `${i}번째 할 일`, done: false} );
    }
    return todos;
}

const TodoTemplate = () => {

    const [todoList, setTodoList] = useState(makeTodo());
    // let cnt = 11;

    // 변수의 값이 리 랜더링되어도 유지할 목적으로 사용
    const cnt = useRef(5001);

    // Delete Event
    const deleteTodo = useCallback( (id) => {
        // const todos = todoList.filter( todo => todo.id !== id );
        // setTodoList(todos);
        setTodoList( todoList => todoList.filter( todo => todo.id !== id ))
    }, []);

    // Update Event
    const updateTodo = useCallback( (id) => {
        // const todos = todoList.map( todo => {
        //     if(todo.id === id) return {...todo, done: !todo.done}
        //     else return todo;
        // })
        // setTodoList(todos);
        setTodoList( todoList => todoList.map( todo => todo.id === id ? {...todo, done: !todo.done} : todo) )
    }, []);

    // AddTodo
    const addTodo = useCallback( (text) => {
        const todo = {id: cnt.current++, text: text, done: false};
        // setTodoList(todoList.concat(todo));
        setTodoList( todoList => todoList.concat(todo) );
    }, []);
    

    return (
        <div>
            <h3>Todo List</h3>
            <TodoForm addTodo={addTodo} />
            <br />
            <TodoList todoList={todoList} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        </div>
    )
}
export default TodoTemplate;