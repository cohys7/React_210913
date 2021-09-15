
import React from 'react'
import PropTypes from 'prop-types'

// 함수의 매개변수로 속성을 전달받을 속성 props를 정의해야 사용 가능.
function A01FuncProps(props) {

    const { name: nickname, age, user, arr, onPlus, isChecked, num, obj } = props;
    const { children } = props;
    
    return (
        <div>
            <h3>A01 Function Component Props</h3>
            
            <div>
                Name: {props.name}<br />
                Age: {props.age + 100}<br />
                User: {props.user.name} / {props.user.age} / {props.user.address}<br />
                Array: {props.arr[0]} / {props.arr[1]} / {props.arr[2]}<br />
                onPlus: {props.onPlus(10, 20)}<br />
                isChecked: {props.isChecked ? 'TRUE' : 'FALSE'}<br />
                Num: {props.num}<br />
                Object: {props.obj.name} / {props.obj.age}<br />
                <hr />
                {props.children}
            </div>
            <br />

            <div>
                Name: {nickname}<br />
                Age: {age + 100}<br />
                User: {user.name} / {user.age} / {user.address}<br />
                Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
                onPlus: {onPlus(10, 20)}<br />
                isChecked: {isChecked ? 'TRUE' : 'FALSE'}<br />
                Num: {num}<br />
                Object: {obj.name} / {obj.age}<br />
                <hr />
                {children}
            </div>
        </div>
    )
}

export default A01FuncProps

// props에 기본 값을 설정할 수 있다.
A01FuncProps.defaultProps = {
    num: 1000,
    obj: {name: 'unknown', age: 0},
};

// 넘어오는 props의 타입을 체크 할 수 있다. 101 page
A01FuncProps.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    user: PropTypes.object,
    arr: PropTypes.array,
    onPlus: PropTypes.func,
    isChecked: PropTypes.bool,
    num: PropTypes.number,
    obj: PropTypes.object
}