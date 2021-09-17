import React from 'react'
import {increaseAction, decreaseAction} from './../modules/counterR';
import { connect } from 'react-redux'       // HoC

function Counter(props) {

    const {counter, moduleName, increase, decrease} = props;
    return (
        <div>
            <h3>{moduleName} / Counter: {counter}</h3>
            <button onClick={ () => increase(2) }>+</button>        
            <button onClick={decrease}>-</button> 
        </div>
    )
}

export default connect(
    state => {
        return {
            counter: state.counterR.cnt,
            moduleName: state.counterR.reduxName
        }
    },
    dispach => ({
        increase: (num) => dispach(increaseAction(num)),
        decrease: () => dispach(decreaseAction())
    })
)(Counter)
