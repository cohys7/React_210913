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

import A01Comp from './components/A01Component'

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
    return (
        <div>
            <h3>함수의 리턴값을 사용자정의 태그로 만들어 반환해 준다</h3>
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