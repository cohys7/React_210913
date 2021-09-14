
function calc(x, y) {
    return x + y;
}

function onDiv(value) {
    return value / 2;
}
function onMulti(value) {
    return value * 2;
}

let result = calc(10, 20);
let x = onDiv(result)
let y = onMulti(result)
console.log(x, y);


function calcCall(x, y, callback) {
    const result = x + y;
    return callback(result);
}

var x1 = calcCall(10, 20, (value) => value / 2);
var y1 = calcCall(10, 20, (value) => value * 2);

console.log(x1, y1)