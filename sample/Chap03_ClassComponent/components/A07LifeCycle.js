
import React, { Component } from 'react'

export class A08LifeCycle extends Component {

    constructor() {
        super();

        this.state = {
            color: 'green'
        };
        console.log('1. Constructor');
    }

    changeColor = () => {
        this.setState({color: 'orange'})
    }

    render() {
        console.log('3. render()')
        return (
            <div>
                <h3>A07 Life Cycle</h3>

                color: {this.props.color} / {this.state.color}
                <br />
                
                <button onClick={this.changeColor}>Click</button>
            </div>
        )
    }
}

export default A08LifeCycle
