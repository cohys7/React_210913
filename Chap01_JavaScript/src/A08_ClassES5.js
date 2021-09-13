
(function(){
    
    function User(name, age) {
        this.name = name;
        this.age = age;
    }

    User.prototype.getName = function() {
        return this.name;
    }
    
    let nolbu = new User('놀부', 30);
    let hungbu = new User('흥부', 20);

    console.log(nolbu)
    console.log(hungbu)

    console.log(nolbu.getName());
    console.log(hungbu.getName());

})();
