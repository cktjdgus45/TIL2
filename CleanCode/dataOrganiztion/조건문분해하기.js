function calculateCharge(date, quantity, plan) {
    return isSummer() ? summerCharge() : regularCharge();
    function isSummer() {
      return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
    }
  
    function summerCharge() {
      return quantity * plan.summerRate;
    }
  
    function regularCharge() {
      return quantity * plan.regularRate + plan.regularServiceCharge; //외부에서 재사용으로 해줄려면 바깥에 뺴주거나 클래스 질의함수로 사용 (getter.)
    }
  }
  // function calculateCharge(date, quantity, plan) {
  //   let charge = 0;
  //   if (!date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd))
  //     charge = quantity * plan.summerRate;
  //   else charge = quantity * plan.regularRate + plan.regularServiceCharge;
  //   return charge;
  // }
  