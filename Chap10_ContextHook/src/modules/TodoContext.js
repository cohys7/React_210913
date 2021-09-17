
import {createContext, useCallback, useRef, useState} from 'react'

const TodoContext = createContext({
    state: {
        todoList: [],
        text: '',
    },
    action: {
        addTodo: (text) => {},
        updateTodo: (id) => {},
        deleteTodo: (id) => {},
        changeText: (text) => {}
    }
});

function makeTodo() {
    const todos = [];
    for(let i = 1; i <= 5; i++) {
        todos.push({id: i, text: `${i}번째 할 일`, done: false})
    }
    return todos;
}

function TodoListProvider(props) {
    const [todoList, setTodoList] = useState(makeTodo());
    const [text, setText] = useState('');

    const cnt = useRef(6);

    const addTodo = useCallback( (text) => {
        const todo = {id: cnt.current++, text, done: false};
        setTodoList( todoList => todoList.concat(todo) );
    }, []);
    const updateTodo = useCallback( (id) => {
        setTodoList( todoList => todoList.map( todo => todo.id === id ? {...todo, done: !todo.done} : todo) );
    }, []);
    const deleteTodo = useCallback( (id) => {
        setTodoList( todoList => todoList.filter( todo => todo.id !== id) )
    }, [])
    const changeText = useCallback( (value) => {
        setText( text => text = value);
    }, []);

    const value = {
        state: {todoList, text},
        action: {addTodo, updateTodo, deleteTodo, changeText}
    }

    return (
       <TodoContext.Provider value={value}>
           {props.children}
       </TodoContext.Provider>
    )
}
const TodoListConsumer = TodoContext;

export { TodoListProvider, TodoListConsumer }
