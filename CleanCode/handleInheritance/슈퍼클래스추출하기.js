class Party { //공통으로 사용하는게 있다면 상속으로 만들수있지않을까 고민.
    get name() { }
    get annualCost() { }
  
  }
  
  class Department extends Party {
    get headCount() { }
  }
  
  class Employee extends Party {
    get id() { }
  }
  
  // class Department {
  //   get totalAnnualCost() {}
  //   get name() {}
  //   get headCount() {}
  // }
  
  // class Employee {
  //   get annualCost() {}
  //   get name() {}
  //   get id() {}
  // }
  