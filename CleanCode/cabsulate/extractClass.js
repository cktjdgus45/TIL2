
class Person { //문제점 : 클래스 하나당 하나의 역할 ,하나의 책임 ,하나의 도메인을 가지고 있는것이 좋다. (모듈도 마찬가지.) ->클래스 추출하기.
    #name;
    #telephoneNumber;
    constructor(name, areaCode, number) {
      this.#name = name;
      this.#telephoneNumber = new TelephoneNumber(areaCode, number);
    }
  
    get name() {
      return this.#name;
    }
  
    get telephoneNumber() {
      return this.#telephoneNumber.toString;
    }
  
    get officeAreaCode() {
      return this.#officeAreaCode;
    }
  
    get officeNumber() {
      return this.#officeNumber;
    }
  
  
  }
  
  class TelephoneNumber {
    #areaCode;
    #number;
    constructor(area, number) {
      this.#areaCode = area;
      this.#number = number;
    }
    get areaCode() {
      return this.#areaCode;
    }
    set areaCode(arg) {
      this.#areaCode = arg;
    }
    get number() {
      return this.#number;
    }
    set number(arg) {
      this.#number = arg;
    }
    get toString() {
      return `(${this.#areaCode} ${this.#number})`;
    }
  }
  
  const person = new Person('엘리', '010', '12345678');
  console.log(person.name);
  console.log(person.officeAreaCode);
  console.log(person.officeNumber);
  console.log(person.telephoneNumber);
  
  // class Person {
  //   #name;
  //   #officeAreaCode;
  //   #officeNumber;
  //   constructor(name, areaCode, number) {
  //     this.#name = name;
  //     this.#officeAreaCode = areaCode;
  //     this.#officeNumber = number;
  //   }
  
  //   get name() {
  //     return this.#name;
  //   }
  
  //   set name(arg) {
  //     this.#name = arg;
  //   }
  
  //   get telephoneNumber() {
  //     return `(${this.officeAreaCode}) ${this.officeNumber}`;
  //   }
  
  //   get officeAreaCode() {
  //     return this.#officeAreaCode;
  //   }
  
  //   set officeAreaCode(arg) {
  //     this.#officeAreaCode = arg;
  //   }
  
  //   get officeNumber() {
  //     return this.#officeNumber;
  //   }
  
  //   set officeNumber(arg) {
  //     this.#officeNumber = arg;
  //   }
  // }
  
  // const person = new Person('엘리', '010', '12345678');
  // console.log(person.name);
  // console.log(person.officeAreaCode);
  // console.log(person.officeNumber);
  // console.log(person.telephoneNumber);
  