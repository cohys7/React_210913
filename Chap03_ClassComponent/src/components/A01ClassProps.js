
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class A01ClassProps extends Component {
    render() {
        return (
            <div>
                <h3>A01 Class Component Props</h3>

                <div>
                    변경 불가 속성 - immutable<br />
                    Name: {this.props.name}<br />
                    Age: {this.props.age + 100}<br />
                    User: {this.props.user.name} / {this.props.user.age} / {this.props.user.address}<br />
                    넘어오는 변수명이 arr로 넘어온다.<br />
                    Array: {this.props.arr[0]} /{this.props.arr[1]} / {this.props.arr[2]}<br />
                    onPlus: {this.props.onPlus(10, 20)}<br />
                    넘어오는 속성에 값이 없으면 true가 넘어온다. true, false는 화면에 출력되지 앟음. <br />
                    isChecked: {this.props.isChecked ? 'TRUE' : 'FALSE'}<br />
                    <br />
                    일반 변수는 출력만 안됨. 에러 아님 <br />
                    Num: {this.props.num}<br />
                    리퍼런스 변수는 없는 값을 참조하면 에러 발생<br />
                    Object: {this.props.obj.name} / {this.props.obj.age}<br />
                </div>

                <hr />

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default A01ClassProps

// props에 기본 값을 설정할 수 있다.
A01ClassProps.defaultProps = {
    num: 1000,
    obj: {name: 'unknown', age: 0},
};

// 넘어오는 props의 타입을 체크 할 수 있다. 101 page
A01ClassProps.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    user: PropTypes.object,
    arr: PropTypes.array,
    onPlus: PropTypes.func,
    isChecked: PropTypes.bool,
    num: PropTypes.number,
    obj: PropTypes.object
}