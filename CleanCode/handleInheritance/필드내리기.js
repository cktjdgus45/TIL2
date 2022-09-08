class Employee {
    // #quota;
  }
  
  class Engineer extends Employee { }
  class Salesperson extends Employee {
    #quota; // Salesperson에게만 필요한 field 라면.
  }
  