
import React, { useCallback, useRef, useState } from 'react'
import { TodoListConsumer } from './../modules/TodoContext'

export const TodoForm = () => {

    const inputFiled = useRef();

    // Consumer의 값을 직접 참조할 수 없어서 매개변수로 받아 처리한다.
    const sendData = (evt, state, action) => {
        evt.preventDefault();
        action.addTodo(state.text);
        action.changeText('');
        inputFiled.current.focus();
    }
    
    return (
        <TodoListConsumer>
            { data => (
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" ref={inputFiled} 
                            value={data.state.text} onChange={ (evt) => data.action.changeText(evt.target.value) } />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary mr-1" 
                                onClick={ (evt) => sendData(evt, data.state, data.action)}>Submit</button>
                        </div>
                    </div>  
                </form>
            )}
        </TodoListConsumer>
        
    )
}
