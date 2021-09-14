
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

    "use strict"
    {
        fileName: 'A',
        state: {
            ..
        },
        // this.onAdd => 존재는 한다. 
        function() onAdd {
            this => window or undefied(use strict mode)
            this.fileName => undefined
        },
        changeName: function() {
            this => 현재 {} 객체를 참조
        }
        innerFunc: onAdd.bind(this) => innerFun == onAdd 형태지만 innerFunc 내부의 this는 현재 {}를 참조로 변경된 함수가 된다.
    }
    */

    changeFileName() {
        // this => window
        console.log('changefile: ', this);
        this.fileName = 'New FileName';
        console.log(this.fileName);
    }
    changeName() {
        console.log('changeName');
        this.setState( {name: 'BangJa' } )
    }

    // Arrow 함수는 항상 자신의 객체를 this로 참조한다.
    changeAge = () => {
        this.setState({age: 100})
    }

    addArray = (num) => {
        // this.setState( {ary: this.state.ary.push(num)} );        // Error. 실질적인 주소값이 변경 안됨
        this.setState( {ary: this.state.ary.concat(num)} );
    }
    updateArray = (index, value) => {
        // this.setState( {ary: this.state.ary[index] = value} )    // Error
        const newAry = this.state.ary.map( (item, i) => index === i ? value : item );
        this.setState( {ary: newAry} )
    }
    deleteArray = (index) => {
        // this.state.ary.splice(index, 1);
        const newAry = this.state.ary.filter( (item, i) => index !== i );
        this.setState( {ary: newAry} );
    }

    /*
        const obj = {
            name: 'NolBu',
            'age': 30
        }
        const num = 'age';
        console.log( obj.num ) => obj.'age'
        console.log( obj.num ) => obj['age']
        console.log( obj.num ) => obj[num]
    */
    addObject = (key, value) => {
        // this.state.user[key] = value;
        const newObj = {...this.state.user, [key]: value};
        this.setState( {user: newObj} )
    }

    updateObject = (key, value) => {
        // this.state.user[key] = value;
        const newObj = {...this.state.user, [key]: value};
        this.setState( {user: newObj} )
    }

    deleteObject = (key) => {
        // const newObj = {...this.state.user, [key]: ''};
        // this.setState( {user: newObj} )

        delete this.state.user[key];            // 해당 키 지우고 
        const newObj = {...this.state.user};    // 지워진 원판을 토대로 새로운 객체 생성
        this.setState( {user: newObj} )         // 대입
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
                    Array: {this.state.ary[0]} / {this.state.ary[1]} / {this.state.ary[3]}<br />
                    isChecked: {this.state.isChecked ? 'TRUE' : 'FALSE'}
                </div>

                <div>
                    { this.state.ary.map( (item, index) => {
                        return <span key={index}>{item} </span>
                    })}
                </div>

                <div>
                    <button onClick={this.changeFile}>FileName</button>
                    <button onClick={this.changeNameThis}>Name</button>
                    <button onClick={() => this.changeAge()}>Age</button>

                    <button onClick={ () => this.addArray( Math.ceil(Math.random() * 100) ) }>Add Array</button>
                    <button onClick={ () => this.updateArray(0, 1000) }>Update Array</button>
                    <button onClick={ () => this.deleteArray(2) }>Delete Array</button>

                    <button onClick={ () => this.addObject('address', 'Seoul') }>Add Object</button>
                    <button onClick={ () => this.updateObject('address', 'Busan') }>Update Object</button>
                    <button onClick={ () => this.deleteObject('address') }>Delete Object</button>
                </div>
            </div>
        )
    }
}

export default A02ClassState
