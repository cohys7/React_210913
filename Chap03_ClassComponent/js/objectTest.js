
const obj = {
    name: 'NolBu',
    age: 20,
}

console.log(obj.name);
console.log(obj.age);

console.log( obj['name'] )

const value = 'name';

// 이건 에러
// console.log(obj.value);     // => obj.'name'
console.log( obj[value] );