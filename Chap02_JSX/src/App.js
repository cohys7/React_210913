// JSX => JavaScript Xml

/*
// 1. 문자열이 아닌 HTML Tag 형식이다.
const elem01 = <h1>Hello World 01</h1>
function Root() {
    return elem01;
}

function Root() {
    return <h1>Hello World 02</h1>;
}


// 2. 반환되는 값은 1개의 요소만 가능하다
const elem02 = <div>
    <h1>Hello World 03</h1>
    <div>This is Hello World 03</div>
</div>
function Root() {
    return elem02;
}


// return 구문에서 개행을 하려면 () 묶어서 리턴한다.
function Root() {
    return (
        <div>
            <h1>Hello World 04</h1>
            <div>This is Hello World 04</div>
        </div>
    )
}
*/

import './App.css';

import A01Comp from './components/A01Component'
import A02ClassComp from './components/A02ClassComp'
import A03Fragment from './components/A03Fragment'

function MakeDOM() {
    return (
        <div>
            <h3>Make DOM</h3>
            <div>This is Function</div>
        </div>
    )
};

// function Root() {
//     return MakeDOM();
// }

// 3. 반드시 종료 태그가 존재해야 한다.
// function Root() {
//     return <MakeDOM />
// }

function Root() {
    const name = 'NolBu';
    const user = { name: 'HungBu', age: 20 };
    const ary = [10, 20];
    const onPlus = function(x, y) {
        return `${x} + ${y} = ${x + y}`;
    };

    return (
        // 자사스크립트에서 사용하는 DOM 속성명을 사용한다. class => className
        <div className="space">
            <h3>함수의 리턴값을 사용자정의 태그로 만들어 반환해 준다</h3>
            Name: {name} <br />
            User: {user.name} / {user.age + 100} / {user.address} <br />
            Array: {ary[0]} / {ary[1]} / {ary[2]}<br />
            Func: {onPlus(10, 20)}<br />

            <A03Fragment /><br />
            <A02ClassComp /><br />
            <MakeDOM />
            <A01Comp />
        </div>
    )
}
export default Root;

/*
function App() {
  return (
    <div className="App">
      <h1>Chap02 JSX</h1>
    </div>
  );
}

export default App;
*/