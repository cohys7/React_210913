import React from 'react'
import {increaseAction, decreaseAction} from './../modules/counterR';
import { useDispatch, useSelector } from 'react-redux'

function Counter(props) {

    // const {counter, moduleName, increase, decrease} = props;
    const moduleName = useSelector(state => state.counterR.reduxName);
    const counter = useSelector(state => state.counterR.cnt);

    const dispatch = useDispatch();

    return (
        <div>
            <h3>{moduleName} / Counter: {counter}</h3>
            <button onClick={ () => dispatch(increaseAction(2)) }>+</button>        
            <button onClick={ () => dispatch(decreaseAction()) }>-</button> 
        </div>
    )
}

export default Counter;