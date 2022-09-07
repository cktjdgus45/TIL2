export class ChargeCalculator {  //재사용이 아닌 딱 한번만 사용한다면 함수가 굳. 왜냐면 필요할때마다 인스턴스 생성해야하므로. ex)Math.min , Math.max
    constructor(customer, usage, provider) {
      this._customer = customer;
      this._usage = usage;
      this._provider = provider;
    }
    get baseCharge() {
      return this._customer.baseRate * this._usage;
    }
    get charge() {
      return this.baseCharge + this._provider.connectionCharge;
    }
  }
  
  export function charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * customer.usage;
    return baseCharge + provider.connectionCharge;
  }
  
  // export class ChargeCalculator {
  //   constructor(customer, usage, provider) {
  //     this._customer = customer;
  //     this._usage = usage;
  //     this._provider = provider;
  //   }
  //   get baseCharge() {
  //     return this._customer.baseRate * this._usage;
  //   }
  //   get charge() {
  //     return this.baseCharge + this._provider.connectionCharge;
  //   }
  // }
  