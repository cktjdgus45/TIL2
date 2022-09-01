// import { acquireReading, baseRate } from './6-10.js';

// const aReading = acquireReading();

// const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
// console.log(baseCharge);

import { acquireReading, enrichReading } from './6-10.js';

const rawReading = acquireReading();
const reading = enrichReading(rawReading);

console.log(reading.baseCharge);
console.log(reading.taxableCharge);

//-=============================================================================

import _ from 'lodash';
// const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

// export function acquireReading() {
//   return reading;
// }

// export function baseRate(month, year) {
//   if (year === 2017 && month === 5) return 0.1;
//   return 0.2;
// }
const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}
export function acquireReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = () => { return baseRate(reading.month, reading.year) * reading.quantity };
  result.taxableCharge = () => { return Math.max(0, result.baseCharge - 0.1) }
  return result;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
