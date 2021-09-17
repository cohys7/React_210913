
import React from 'react'
import ColorBoxContext from './../modules/ColorBoxContext'
import { SelectColorConsumer } from './../modules/SelectColorContext'

function ColorBox() {
    return (
        <ColorBoxContext.Consumer>
            { value => (
                <SelectColorConsumer>
                    { data => (
                        <div>
                            <h5>{value.moduleName}</h5>
                            <div style={ {width: '50px', height: '50px', background: value.color} }>{value.color}</div>

                            <div style={ {width: '50px', height: '50px', background: data.state.color} }>{data.state.color}</div>
                        </div>
                    )}
                </SelectColorConsumer>
                
            )}
        </ColorBoxContext.Consumer>
    )
}

export default ColorBox
