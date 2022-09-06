import { strict as assert } from 'node:assert';

class Customer { //어서션 : 개발자 실수를 알려주기위해 사용.
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    assert(number >= 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(-1);

// class Customer {
//   constructor() {
//     this.discountRate = 0;
//   }
//   applyDiscount(number) {
//     return this.discountRate ? number - this.discountRate * number : number;
//   }
// }
