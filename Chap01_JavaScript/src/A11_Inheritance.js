

class Person {
    
    constructor(name, age, add){
        this.name = name;
        this.age = age;
        this.add = add;
    }

    toString() {
        console.log(`[Person] name=${this.name} age=${this.age} add=${this.add}`);
    }

    getName() {
        return this.name;
    }
}

class Employee extends Person {
    constructor(name, age, add) {
        super(name, age, add);
        this.tel = '010-1234-5678';
    }
    toString() {
        console.log(`[Person] name=${this.name} age=${this.age} add=${this.add} tel: ${this.tel}`);
    }

    getAddress() {
        return this.add;
    }
}



let hungBu = new Person('HungBu', 20, 'Busan');
hungBu.toString();
// hungBu.getAddress()

let nolbu = new Employee('NolBu', 30, 'Seoul');
nolbu.toString();
console.log( nolbu.getAddress() );