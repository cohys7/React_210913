
import React, { useState } from 'react'

function A02FuncState() {

    // useState라는 Hook을 사용한다.
    // const [변수명, 변수를 변경하는 함수명] = useState(기본값)
    const [name, setName] = useState('NolBu');
    const [age, setAge] = useState(10);
    const [ary, setAry] = useState([10, 20]);
    const [user, setUser] = useState({
        name: 'HungBu',
        age: 20,
    });

    const changeName = () => setName('HunbBu');
    const changeAge = (num) => setAge(num);

    const addArray = () => {
        const value = Math.ceil( Math.random() * 100 );
        const newAry = ary.concat(value);
        setAry(newAry);
    }
    const updateArray = (index, value) => {
        const newAry = ary.map( (item, i) => {
            if(index === i) return value;
            else return item;
        });
        setAry(newAry);
    };
    const deleteArray = (index) => {
        const newAry = ary.filter( (item, i) => {
            if(index === i) return false;
            else return true;
        });
        setAry(newAry);
    };

    const addObject = (key, value) => {
        const newObj = {...user, [key]: value};
        setUser(newObj);
    }
    const updateObject = (key, value) => setUser( {...user, [key]: value} );

    const deleteObject = (key) => {
        delete user[key];
        const newObj = {...user};
        setUser(newObj);
    }


    return (
        <div>
            <h3>A02 Function Component State</h3>

            <div>
                Name: {name}<br />
                Age: {age + 100}<br />
                Array: {ary[0]} / {ary[1]} / {ary[2]} <br />
                User: {user.name} / {user.age} / {user.address} <br />
            </div>
            <br />

            <div>
                { ary.map((item, index) => <span key={index}>{item} </span>) }
            </div>

            <div>
                <button onClick={changeName}>Name</button>
                <button onClick={ () => changeAge(100) }>Age</button>

                <button onClick={addArray}>Add Array</button>
                <button onClick={ () => updateArray(0, 1000) }>Update Array</button>
                <button onClick={ () => deleteArray(1) }>Delete Array</button>

                <button onClick={ () => addObject('address', 'Seoul') }>Add Object</button>
                <button onClick={ () => updateObject('address', 'Busan') }>Update Object</button>
                <button onClick={ () => deleteObject('address') }>Delete Object</button>
            </div>
        </div>
    )
}

export default A02FuncState
