export function adjustedCapital(instrument) {
    if (!isEligibleForAdjustCapital(instrument)) { return 0 };
    return (instrument.income / instrument.duration) * anInstrument.adjustmentFactor;
  }
  
  function isEligibleForAdjustCapital(instrument) {
  
    return (instrument.capital > 0 && instrument.interestRate > 0 && instrument.duration > 0);
  }
  
  // export function adjustedCapital(instrument) {
  //   let result = 0;
  //   if (instrument.capital > 0) {
  //     if (instrument.interestRate > 0 && instrument.duration > 0) {
  //       result =
  //         (instrument.income / instrument.duration) *
  //         anInstrument.adjustmentFactor;
  //     }
  //   }
  //   return result;
  // }
  