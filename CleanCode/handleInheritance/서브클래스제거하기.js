class Person {
    #name;
    #genderCode;
    constructor(name, genderCode) {
      this.#name = name;
      this.#genderCode = genderCode;
    }
  
    get name() {
      return this.#name;
    }
  
    get genderCode() {
      return this.#genderCode;
    }
    static create(record) {
      switch (record) {
        case 'M':
          return new Person(record.name, 'M');
        case 'F':
          return new Person(record.name, 'F');
        default:
          return new Person(record.name, 'X');
      }
    }
  }
  
  // class Male extends Person { //하는일이 적다면 굳이 서브 클래스로 안놓고 통합.
  //   get genderCode() {
  //     return 'M';
  //   }
  // }
  
  // class Female extends Person {
  //   get genderCode() {
  //     return 'F';
  //   }
  // }
  
  function loadFromInput(data) {
    const result = [];
    data.forEach((record) => {
      result.push(Person.create(record));
    });
    return result;
  }
  
  const people = loadFromInput([
    { name: '엘리', gender: 'F' },
    { name: '철수', gender: 'M' },
    { name: '밥', gender: 'M' },
  ]);
  
  