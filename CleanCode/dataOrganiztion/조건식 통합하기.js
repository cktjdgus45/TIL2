function disabilityAmount(employee) { //조건식 통합하기. 같은것을 return할 경우.
    if (isNoteEligibleForDisability(employee)) {
      return 0;
    }
    return 1;
  }
  function isNoteEligibleForDisability(employee) {
    return (
      employee.seniority < 2 ||
      employee.monthsDisabled > 12
      || employee.isPartTime
    );
  }
  
  // function disabilityAmount(employee) {
  //   if (employee.seniority < 2) return 0;
  //   if (employee.monthsDisabled > 12) return 0;
  //   if (employee.isPartTime) return 0;
  //   return 1;
  // }
  
  