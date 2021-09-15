
import React from 'react'
import A07WithComp from './A07WithComp'

function A07HigherOrder(props) {
    return (
        <div>
            <h3>A07 Higher Order Component</h3>
            props: {props.color} <br />
            Obj: {props.obj.name} / {props.obj.age}<br />
            Address: {props.address}<br />
            <button onClick={() => props.changeAddress() }>Click</button>
        </div>
    )
}

export default A07WithComp(A07HigherOrder, 'ABC');
