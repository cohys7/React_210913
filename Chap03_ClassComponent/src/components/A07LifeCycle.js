
import React, { Component } from 'react'

export class A08LifeCycle extends Component {

    constructor() {
        super();

        this.state = {
            color: 'green'
        };
        console.log('1. Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        // props에 넘어온 값과 state의 변수 값이 충돌이 되는 경우 어떠한 값을 사용할 지를 결정해서 반환
        console.log('2. getDrivedStateFromProps');

        if(props.isChecked) {
            state ={
                ...state,
                color: props.color,
                name: 'NolBu'
            }
        }

        return state;
    }

    // DOM이 완성되면 발생
    componentDidMount() {
        console.log('4. componentDidMount');
        // Ajax 요청해서 값 가지고 온 후에 DOM에 반영 
    }

    shouldComponentUpdate(props, state) {
        console.log('5. shouldComponentUpdate');
        return true;    // => 화면 갱신. false => 화면 갱신작업을 하지 않음.
    }

    changeColor = () => {
        this.setState({color: 'orange'})
    }

    render() {
        console.log('3. render()')
        return (
            <div>
                <h3>A07 Life Cycle</h3>

                color: {this.props.color} / {this.state.color}<br />
                Name: {this.state.name}
                <br />
                
                <button onClick={this.changeColor}>Click</button>
            </div>
        )
    }
}

export default A08LifeCycle
