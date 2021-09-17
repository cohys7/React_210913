
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction, changeTextAction } from './../modules/todoListR'

function TodoForm(props) {

    const inputRef = useRef();
    const text = useSelector( state => state.todoListR.text);
    const dispatch = useDispatch();

    const sendData = (evt) => {
        evt.preventDefault();
        inputRef.current.focus();
        dispatch(addTodoAction(text));
        dispatch(changeTextAction(''));
    }

    return (
        <form>
            <div className="input-group">
                <input type="text" className="form-control" ref={inputRef} 
                    value={text} onChange={ (evt) => dispatch(changeTextAction(evt.target.value)) } />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary mr-1" onClick={sendData} >Submit</button>
                </div>
            </div>  
        </form>
    )
}
export default TodoForm