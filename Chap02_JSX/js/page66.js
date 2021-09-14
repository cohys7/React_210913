
// 조건1 || 조건2 =>  조건1이 true면 뒤 조건2를 체크 안함.
// 연산자로 사용하는 경우

// 값1이 존재하면 변수에 대입. 값1이 없으면 || 뒤의 값2가 실행되서 그 값이 변수에 대입됨 
// 변수 = 값 1 || 값 2 

function onAdd(x, y) {
    // x || <div>값이 없습니다</div>
    x = x || 1;
    y = y || 1
    return x + y;
}


let result = onAdd(5);
console.log(result)



function onMin(x, y) {
    // 앞에 값이 존재해야 조건이 실행된다. => react에서 show / hide를 구현 
    // value && <div>Hello World</div>
    x = x && 1;
    y = y && 1
    return x + y;
}

let value = onMin(10);
console.log(value)