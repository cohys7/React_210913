
// function onAdd() {
//     console.log(this);      // => window
// }

// onAdd();


function onMin() {

    function inner() {
        console.log(this);      // window
    }
    inner();
}
onMin()