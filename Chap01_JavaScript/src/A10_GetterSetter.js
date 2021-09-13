
class Jumsu {

    constructor(name, kor, eng) {
        this._name = name;
        this._kor = kor;
        this._eng = eng;
    }

    // 일반 메서드
    onTotal() {
        return this._kor + this._eng;
    }

    display() {
        console.log(`${this._name}의 총점은 ${this.onTotal()}이고 평균은 ${this.onTotal() / 2}입니다`);
    }

    getName() {
        return this._name;
    }

    // getter method
    get kor() {
        return this._kor;
    };

    // setter method
    set kor(kor) {
        this._kor = kor;
    }

};


let nolbu = new Jumsu('Nolbu', 100, 90);
console.log(nolbu._name);                       // Nolbu
console.log(nolbu.onTotal());
console.log(nolbu.getName());

// getter, setter 메서드는 정의는 함수지만 사용은 프로퍼티처럼 사용한다
console.log(nolbu.kor);
nolbu.kor = 50;
// nolbu.kor(50);
console.log(nolbu.kor);



