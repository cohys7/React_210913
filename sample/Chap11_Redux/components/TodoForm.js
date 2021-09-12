
import React, { useRef } from 'react'

function TodoForm(props) {

    const inputRef = useRef();

    const sendData = (evt) => {
        evt.preventDefault();
        inputRef.current.focus();
    }

    return (
        <form>
            <div className="input-group">
                <input type="text" className="form-control" ref={inputRef} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary mr-1" onClick={sendData} >Submit</button>
                </div>
            </div>  
        </form>
    )

}
export default TodoForm