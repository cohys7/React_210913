
import React, { useRef, useState } from 'react'

function TodoForm(props) {

    const { addTodo } = props;

    const inputField = useRef();

    const [text, setText] = useState('');
    const changeText = (text) => setText(text);

    const sendData = (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText('');
        inputField.current.focus();
    }

    return (
        <form>
            <div className="input-group">
                <input type="text" className="form-control" ref={inputField}
                                value={text} onChange={ (evt) => changeText(evt.target.value) } />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
                </div>
            </div>  
        </form>
    )

}
export default TodoForm