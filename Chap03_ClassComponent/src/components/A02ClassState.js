
import React, { Component } from 'react'

class A02ClassState extends Component {
    
    constructor() {
        super();

        // 변경되지 않을 것을 예상하고 정의한 변수 (참조만 할 목적) => 변경되도 화면 갱신은 이루어지지 않음.
        this.fileName = 'A02 Class Comp';

        // 변경될 것을 예상하고 정의된 변수. => 값이 변경되면 컴퍼넌트가 리 렌더링되서 바뀐 값이 화면에 출력됨.
        this.state= {
            name: 'NolBu',
            age: 30,
            user: {name: 'HungBu', age: 20},
            ary: [10, 20, 30],
            isChecked: true, 
        }

        // bind => changeFileName 함수를 this를 지정한 객체로 바꾸서서 새로운 함수를 리턴 해 준다.
        this.changeFile = this.changeFileName.bind(A02ClassState);
        this.changeNameThis = this.changeName.bind(this);
    };
    /*
    (function() {
        changeName = function() {
            this => window
            strict mode => undefined
        }
    })();
    */

    changeFileName = function() {
        // this => window
        console.log('changefile: ', this);
        this.fileName = 'New FileName';
    }
    changeName = function() {
        console.log('changeName');
        
    }

    render() {
        return (
            <div>
                <h3>A02 Class Component State - mutable</h3>

                <div>
                    FileName: {this.fileName}<br />
                    Name: {this.state.name} <br />
                    Age: {this.state.age}<br />
                    User: {this.state.user.name} / {this.state.user.age} / {this.state.user.address}<br />
                    Array: {this.state.ary[0]} / {this.state.ary[1]} / {this.state.ary[5]}<br />
                    isChecked: {this.state.isChecked ? 'TRUE' : 'FALSE'}
                </div>

                <div>
                    <button onClick={this.changeFile}>FileName</button>
                    <button onClick={this.changeNameThis}>Name</button>
                </div>
            </div>
        )
    }
}

export default A02ClassState
