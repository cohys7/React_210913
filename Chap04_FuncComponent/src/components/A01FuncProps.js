
import React from 'react'

// 함수의 매개변수로 속성을 전달받을 속성 props를 정의해야 사용 가능.
function A01FuncProps(props) {
    return (
        <div>
            <h3>A01 Function Component Props</h3>
            
            <div>
                Name: {props.name}<br />
                Age: {props.age + 100}<br />
                
            </div>
        </div>
    )
}

export default A01FuncProps
