
import React, { Component } from 'react'
import A08WithComponent from './A08WithComponent'

export class A09HigherOrderComp extends Component {
    render() {
        console.log('2. Higher Order render')
        
        return (
            <div>
                <h3>A08 Higher Order Component</h3>
                props.name: {this.props.name}<br />
                props.obj: {this.props.obj.name}
            </div>
        )
    }
}

export default A08WithComponent(A09HigherOrderComp, 'ABC')
