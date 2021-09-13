

(function(){

    let obj = {
        name: 'NolBu',
        age: 30
    }

    let ary = ['A', 'B', 'C'];
    console.log(obj, ary);
    console.log('');

    // let name = obj.name;

    // 변수명은 객체의 프로퍼티명과 동일해야 한다.
    let { name, age } = obj;
    console.log(name, age);

    // 이미 선언된 동일 이름의 변수가 있는경우 Alias 이용
    let {name: nickname, age: num} = obj;
    console.log(nickname, num);

    // 객체의 기본값도 할당 가능
    let {name: x = 'UnKnown', age: y = 20, address: z = 'Seoul'} = obj;
    console.log(x, y, z);

    // 배열이라 alias를 달 수 없음
    let [a = 1, b, c, d = 100] = ary;
    console.log(a, b, c, d);
    
})();
