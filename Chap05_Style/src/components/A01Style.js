
import React from 'react'

import './css/A01Style.css';
import './css/A01Style.scss';           // npm i node-sass

function A01Style() {
    const color = 'color';

    const innerStyle = {
        //카멜 표기법 
        backgroundColor: 'aqua',
        color: 'orange',
        fontSize: '24pt',
        fontWeight: 'bold',
        padding: '20px'
    }

    return (
        <div>
            <h3 className="color title">A01 Style</h3>
            <h3 className={color}>A01 Style</h3>
            <h3 className="scssTitle">A01 Style</h3>
            <h3 style={innerStyle}>A01 Style</h3>
            <h3 style={{
                    backgroundColor: 'aqua',
                    color: 'orange',
                    fontSize: '24pt',
                    fontWeight: 'bold',
                    padding: '20px'
                }}>A01 Style</h3>
        </div>
    )
}

export default A01Style
