// const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

// export function acquireReading() {
//   return reading;
// }

// export function baseRate(month, year) {
//   if (year === 2017 && month === 5) return 0.1;
//   return 0.2;
// }

export class Reading {
    #custromer;
    #quantity;
    #month;
    #year;
    constructor(data) {
      this.#custromer = data.custromer;
      this.#quantity = data.quantity;
      this.#month = data.month;
      this.#year = data.year;
    }
    get custromer() {
      return this.#custromer;
    }
    get quantity() {
      return this.#quantity;
    }
    get month() {
      return this.#month;
    }
    get year() {
      return this.#year;
    }
    get baseRate() {
      if (this.#year === 2017 && this.#month === 5) return 0.1;
      return 0.2;
    }
    get baseCharge() {
      return this.baseRate * this.quantity;
    }
    get taxThreshold() {
      return 0.1;
    }
    get taxableCharge() {
      Math.max(0, this.baseCharge - this.taxThreshold);
    }
  }
  
  const reading = new Reading({ customer: 'ivan', quantity: 10, month: 5, year: 2017 });
  
  export function acquireReading() {
    return reading;
  }
  
  
  
//===================================================================================
// import { acquireReading, baseRate } from './6-9.js';

// const aReading = acquireReading();

// const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
// console.log(baseCharge);

import { acquireReading, } from './6-9.js';

const reading = acquireReading();

console.log(reading.baseCharge);

//===================================================================================  
// import { acquireReading, baseRate } from './6-9.js';

// const reading = acquireReading();
// const base = baseRate(reading.month, reading.year) * aReading.quantity;

// function taxThreshold(year) {
//   return 0.1;
// }

// export const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

import { acquireReading, baseRate } from './6-9.js';

const reading = acquireReading();
const base = reading.baseCharge;

export const taxableCharge = reading.taxableCharge;


//===================================================================================  

// import { acquireReading, baseRate } from './6-9.js';

// const aReading = acquireReading();

// function calculateBaseCharge(aReading) {
//   return baseRate(aReading.month, aReading.year) * aReading.quantity;
// }

// const basicChargeAmount = calculateBaseCharge(aReading);

import { acquireReading, baseRate } from './6-9.js';

const reading = acquireReading();

const basicChargeAmount = reading.baseCharge;

//===================================================================================  
