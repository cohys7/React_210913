import { createAction, handleActions } from 'redux-actions'

const TODOLIST_ADDTODO = 'TODOLIST/ADDTODO';
const TODOLIST_UPDATETODO = 'TODOLIST/UPDATETODO';
const TODOLIST_DELETETODO = 'TODOLIST/DELETETODO';
const TODOLIST_CHANGETEXT = 'TODOLIST/CHANGETEXT';

const makeTodo = () => {
    const todos = [];
    for(var i = 1; i <= 5; i++) {
        todos.push({id: i, text: `${i}번째 할 일 `, done: false})
    }
    return todos;
};

let cnt = 6;

export const addTodoAction = createAction(TODOLIST_ADDTODO, (text) => {
    const todo = {id: cnt++, text, done: false};
    return todo;
})
export const updateTodoAction = createAction(TODOLIST_UPDATETODO, id => id);
export const deleteTodoAction = createAction(TODOLIST_DELETETODO, id => id);
export const changeTextAction = createAction(TODOLIST_CHANGETEXT, text => text);

const init = {
    todoList: makeTodo(),
    text: ''
}
const todoListR = handleActions({
    [TODOLIST_ADDTODO]: (state, action) => ( { ...state, todoList: state.todoList.concat(action.payload) }),
    [TODOLIST_UPDATETODO]: (state, action) => {
        const updateTodos = state.todoList.map( todo => todo.id === action.payload ? {...todo, done: !todo.done}: todo )
        return {...state, todoList: updateTodos}
    },
    [TODOLIST_DELETETODO]: (state, action) => ( {...state, todoList: state.todoList.filter( todo => todo.id !== action.payload) } ),
    [TODOLIST_CHANGETEXT]: (state, action) => ( {...state, text: action.payload} ),
}, init)

export default todoListR;