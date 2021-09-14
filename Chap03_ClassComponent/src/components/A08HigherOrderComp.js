
import React, { Component } from 'react'

export class A09HigherOrderComp extends Component {
    render() {
        console.log('2. Higher Order render')
        
        return (
            <div>
                <h3>A08 Higher Order Component</h3>
                props.name: {this.props.name}
            </div>
        )
    }
}

export default A09HigherOrderComp
