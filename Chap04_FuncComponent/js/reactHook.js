
// closure
function outer(x) {
    let value = x;

    const getValue = function() {
        return value;
    }

    const setValue = function(data) {
        value = data;
    }

    return [getValue, setValue];
}

const [name, setName] = outer('NulBu');
console.log(name());

setName('HungBu');
console.log(name())