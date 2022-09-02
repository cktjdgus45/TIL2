//subject : 위임 숨기기

class Person {
    #name;
    #department;
    constructor(name, department) {
      this.#name = name;
      this.#department = department;
    }
  
    get name() {
      return this.#name;
    }
  
    get department() {
      return this.#department;
    }
  
    set department(arg) {
      this.#department = arg;
    }
  
    get manager() {
      return this.#department.manager;
    }
    get chargeCode() {
      return this.#department.chargeCode;
    }
  }
  
  export class Department {
    #manager;
    #chargeCode;
    constructor(manager, chargeCode) {
      this.#manager = manager;
      this.#chargeCode = chargeCode;
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
  
  const person = new Person('Tom', new Department('aManager', '999'));
  console.log(person.name);
  console.log(person.manager);//.department.manager 너무 세부사항이 외부노출. 바로 알도록. (위임숨기기)
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
  