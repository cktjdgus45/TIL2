class Employee {
    #name;
    // #type;
    constructor(name) {
      // this.validateType(type);
      this.#name = name;
      // this.#type = type;
    }
    get type() {
      return 'employee';
    }
    static validateType(arg) { //발리데이트 타입쓰는건 좋지 않다.
      if (!['engineer', 'manager', 'salesperson'].includes(arg)) {
        throw new Error(`${arg}라는 직원 유형은 없습니다.`);
      }
    }
  
    // get type() {
    //   return this.#type;
    // }
  
    toString() {
      return `${this.#name} (${this.type})`;
    }
    static createEmployee(name, type) {
      Employee.validateType(type);
      switch (type) {
        case 'enginner':
          return new Engineer(name, type);
        case 'salesperson':
          return new SalesPerson(name, type);
        case 'manager':
          return new Manager(name, type);
      }
    }
  }
  
  class SalesPerson extends Employee {
    get type() {
      return 'salesPerson';
    }
  }
  class Manager extends Employee {
    get type() {
      return 'manager';
    }
  }
  
  const ellie = new Engineer('엘리');
  // const ellie = new Employee('엘리', 'engineer');
  const bob = new SalesPerson('밥');
  // const bob = new Employee('밥', 'manager');
  