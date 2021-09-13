
(function(){

    // 함수 리터럴. 함수 표현식
    let onAdd = function(x, y) {
        console.log(`${x} + ${y} = ${x + y}`);
    }

    let onMin = function(x, y) {
        return `${x} - ${y} = ${x - y}`;
    }

    onAdd(10, 20);
    console.log( onMin(10, 20) );
    console.log('')


    // ES6. 
    // 함수 리터럴 방식만 변경 가능
    // function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
    let onMulti = (x, y) => {
        console.log(`${x} * ${y} = ${x * y}`);
    }
    onMulti(10, 20);

    let onDiv = (x, y) => {
        return `${x} * ${y} = ${x * y}`;
    }
    console.log(onDiv(10, 2));

    // => 뒤에 값이 있으면 무조건 리턴 값으로 취급한다. return 붙이면 에러
    let onDiv1 = (x, y) => `${x} * ${y} = ${x * y}`;
    console.log(onDiv1(10, 2));

    // => 뒤가 실행 구문이면 리턴하지 않고 바로 실행만 한다.
    let onDiv2 = (x, y) => console.log( `${x} * ${y} = ${x * y}` );
    onDiv2(10, 2)

})();