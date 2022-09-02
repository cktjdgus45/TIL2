//클래스도 -추출할지,인라인할지 정해진건 없기떄문에 자기판단.
//subject : 중개자 제거하기. (Class Department)

class Person {
    #name;
    #manager;
    #chargeCode;
    constructor(name, manager, chargeCode) {
        this.#name = name;
        this.#manager = manager;
        this.#chargeCode = chargeCode;
    }

    get name() {
        return this.#name;
    }
    get chargeCode() {
        return this.#chargeCode;
    }

    set chargeCode(arg) {
        this.#chargeCode = arg;
    }

    get manager() {
        return this.#manager;
    }

    set manager(arg) {
        this.#manager = arg;
    }

}

export class Department { //Department 클래스는 단순히 get,set 만 하는 데이터 클래스이기떄문에 굳이 나눌필요가 없다.

}

const person = new Person('Tom', 'aManager', '999');
console.log(person.name);
console.log(person.manager); //중개자 , 위임자 , 컴포지션 같은 말 , A클래스안에 B클래스가 있으면 ,B클래스는 중개자이고 A클래스가 B클래스를 컴포지션하다.
console.log(person.chargeCode);

// class Person {
//   #name;
//   #department;
//   constructor(name, department) {
//     this.#name = name;
//     this.#department = department;
//   }

//   get name() {
//     return this.#name;
//   }

//   get department() {
//     return this.#department;
//   }

//   set department(arg) {
//     this.#department = arg;
//   }
// }

// export class Department {
//   #manager;
//   #chargeCode;
//   constructor(manager, chargeCode) {
//     this.#manager = manager;
//     this.#chargeCode = chargeCode;
//   }

//   get chargeCode() {
//     return this.#chargeCode;
//   }

//   set chargeCode(arg) {
//     this.#chargeCode = arg;
//   }

//   get manager() {
//     return this.#manager;
//   }

//   set manager(arg) {
//     this.#manager = arg;
//   }
// }

// const person = new Person('Tom', new Department('aManager', '999'));
// console.log(person.name);
// console.log(person.department.manager);
// console.log(person.department.chargeCode);