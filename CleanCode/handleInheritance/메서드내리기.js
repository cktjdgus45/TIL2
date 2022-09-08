class Employee {
    // get quota() {}
  }
  
  class Engineer extends Employee { }
  class Salesperson extends Employee {
    get quota() { } //Salesperson 만 필요한 기능일 경우 '매서드 내리기'
  }
  