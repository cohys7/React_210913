
// 변수.
var username = 'NolBu';
console.log(username, typeof username);

var username = 10;
console.log(username, typeof username);

username = true;
console.log(username, typeof username);

if(true) {
    var username = 'Hello World';
    console.log(username, typeof username);     // Hello World
}
console.log(username, typeof username);         // Hello World

function onAdd() {
    var funcName = 'Function';          // 지역 변수 
}
// console.log(funcName)

// ES6 => ES2015
let age = 20;
console.log(age, typeof age);

age = 'NolBu';
console.log(age, typeof age);

// let age = 30;

// {} 내부에서만 유호한 변수로 선언된다 -> 지역 변수
if(true) {
    let age = 100;
    let address = 'Seoul'
    console.log(age, typeof age, address);       // 100
}
console.log(age, typeof age);           // NolBu
// console.log(address);         

// 상수. 한번 값이 대입된 후 변경 불가(참조만 가능하다)
const MY_PI = 3.14;
console.log(MY_PI, typeof MY_PI);

// MY_PI = 100;

// 선언과 함께 초기화를 해야 한다.
// const MY;
// MY = 100;