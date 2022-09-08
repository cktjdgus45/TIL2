// 예시 1
class Employee {
    get name() { //공통적인 규격 약속.
  
    }
  }
  
  class Salesperson extends Employee {
    // get name() {}
  }
  
  class Engineer extends Employee {
    // get name() {}
  }
  
  // 예시 2
  class Party {
    get annualCost() {
      return this.monthlyCost * 12;
    }
  }
  
  class Department extends Party {
    // get totalAnnualCost() {
    //   return this.monthlyCost * 12;
    // }
  }
  class Employee extends Party {
    // get annualCost() {
    //   return this.monthlyCost * 12;
    // }
  }
  