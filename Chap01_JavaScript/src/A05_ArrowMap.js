
(function(){

    // 일반 함수. 
    function fn(){
        console.log('funcion');
    }
    fn();

    /* 이런 식으로는 사용불가
    fn() => {

    }
    */

    let ary = [10, 11, 100, 101, 1000];


    // 익명함수(이름이 없는 함수)
    let onAdd = ary.map( function(item, index) {
        return item * 10;
    })
    console.log(ary, onAdd);
    console.log(ary === onAdd);     // 이 값이 true면 리엑트는 같는 값으로 인식하고 화면 갱신 안함.

    let onMulti = ary.map( (item, index) => item * 2 );
    console.log(onMulti);

    let onMulti2 = ary.map( item => item * 2 );
    console.log(onMulti2);

    // ()가 없으면 {를 함수의 시작과 종료로 인식한다.(에러)
    let onMulti3 = ary.map( (item, index) => ({i: index, value: item * 2}) );
    console.log(onMulti3);

    // 함수의 조건이 true면 item값을 변수에 대입하고 false면 스킵한다.
    let holsu = ary.filter( (item, index) => item % 2 === 1 );
    console.log(holsu);

    // map => 순환. 리턴된 값의 수와 원본 값의 수가 같다.
    // filter => 말 그대로 필터링 (걸러냄) 
})();