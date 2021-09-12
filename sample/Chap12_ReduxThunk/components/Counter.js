import React from 'react'

import { increaseAction, decreaseAction } from './../modules/counterR'
import { useSelector, useDispatch } from 'react-redux'

function Counter(props) {

    const num = useSelector(state => state.counterR.num);
    const moduleName = useSelector(state => state.counterR.moduleName);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>{moduleName} - Counter: {num}</h3>
            <button onClick={ () => dispatch(increaseAction(1))}>+</button>        
            <button onClick={ () => dispatch(decreaseAction())}>-</button> 
        </div>
    )
}
export default Counter;

