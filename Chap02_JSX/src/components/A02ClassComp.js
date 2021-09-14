import React, { Component } from 'react'

class A02ClassComponent extends Component {     // React.Component
    constructor() {
        super();
        this.name = 'A02 Component';

        // state에 선언된 변수 => 변경 가능한 변수. 이 하위의 속성이 변경되면 화면 갱신 작업이 이루어 진다.
        // setState 함수를 이용해서만 값 변경이 가능.
        this.state = {
            userName: 'NolBu'
        }
    }

    changeUser = () => {
        this.setState( {userName: 'HungBu'} );
        // this.name = 100;
        // this.forceUpdate();
    }

    // render() 라는 메서드를 반드시 정의
    render() {
        return (
            <div>
                <h3>A02 Class Component</h3>
                Name: {this.name}<br />
                UserName: {this.state.userName}<br />
                <button onClick={this.changeUser}>Click</button>
            </div>
        )
    }
}
export default A02ClassComponent