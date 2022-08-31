// 예제 1
export function rating(driver) {
    return driver.numberOfLateDeliveries > 5 ? 2 : 1;
  }
  
  // function moreThanFiveLateDeliveries(dvr) {
  //   return dvr.numberOfLateDeliveries > 5; 함수로 뺄 정도인가? 하면 인라인.
  // }
  
  // 예제 2
  function reportLines(customer) {
    const result = [];
    result.push(['name', customer.name]);
    result.push(['location', customer.location]);
    return result;
  }
  
  // function gatherCustomerData(out, customer) {
  //   out.push(['name', customer.name]);
  //   out.push(['location', customer.location]); //너무 쪼갯다.
  // }
  