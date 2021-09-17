
import React, { useContext } from 'react'
import ColorBoxContext from './../modules/ColorBoxContext'
import { SelectColorConsumer } from './../modules/SelectColorContext'

function ColorBox() {

    // Context 객체로부터 직접 꺼내써야 한다.
    // modules에 const SelectColorConsumer = SelectColorContext.Consumer;를
    // const SelectColorConsumer = SelectColorContext; 로 변경
    const { color, moduleName } = useContext(ColorBoxContext);
    const { state } = useContext(SelectColorConsumer);

    return (
        <div>
            <h5>{moduleName}</h5>
            <div style={ {width: '50px', height: '50px', background: color} }>{color}</div>

            <div style={ {width: '50px', height: '50px', background: state.color} }>{state.color}</div>
        </div>
    )
}

export default ColorBox
