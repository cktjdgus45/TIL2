
function localShippingRules(data) {
    if (data) return new ShippingRules(data);
    else throw new OrderProcessingError(-23); //에러의 이름을 정확하게 나타낼수있는 우리만의 에러코드.
  }
  
  class OrderProcessingError extends Error {
    constructor(errorCode) {
      super();
      this.errorCode = errorCode;
    }
  }
  
  try {
    const result = localShippingRules();
  } catch (error) {
    if (error instanceof OrderProcessingError) {
      console.log(error);
    }
  }
  
  // function localShippingRules(data) {
  //   if (data) return new ShippingRules(data);
  //   else return -23;
  // }
  