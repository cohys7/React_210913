

function onAdd(x, y) {
    return x * y;
}

let name = 'NolBu';

// 이 파일에서 단 1개의 요소만 지정이 가능하다.
export default onAdd

// export는 여러개 지정이 가능.
export {name}