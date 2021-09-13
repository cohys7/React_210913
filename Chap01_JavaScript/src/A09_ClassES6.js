
class User {
    constructor(name, age) {
        // 프로퍼티 정의
        this.name = name;
        this.age = age;
    }

    // 메서드
    getName() {
        console.log(`${this.name} 나이: ${this.age}`)
    }
}

let nolbu = new User('Nolbu', 30);
let hungbu = new User('HungBu', 20);

nolbu.getName();
hungbu.getName();

