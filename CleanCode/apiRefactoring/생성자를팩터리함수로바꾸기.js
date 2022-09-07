export class Employee {
    constructor(name, typeCode) {
      this._name = name;
      this._typeCode = typeCode;
    }
    get name() {
      return this._name;
    }
  
    get type() {
      return Employee.legalTypeCodes[this._typeCode];
    }
  
    static get legalTypeCodes() {
      return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
    }
    static createEnginner(name) { //팩토리함수는 생성자함수를 캡슐화하고 외부에서 좀더간결하게 생성할수있도록.
      return new Employee(name, 'E');
    }
    static createSeniarEnginner(name) {
      return new Employee(name, 'S');
    }
    static createMarketer(name) {
      return new Employee(name, 'M');
    }
  }
  
  const cha = new Employee.createEnginner('cha');
  
  // export class Employee {
  //   constructor(name, typeCode) {
  //     this._name = name;
  //     this._typeCode = typeCode;
  //   }
  //   get name() {
  //     return this._name;
  //   }
  
  //   get type() {
  //     return Employee.legalTypeCodes[this._typeCode];
  //   }
  
  //   static get legalTypeCodes() {
  //     return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  //   }
  // }
  