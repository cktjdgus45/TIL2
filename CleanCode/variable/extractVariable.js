export function price(order) {
    // 가격(price) = 기본가격 - 수량할인 + 배송비 (코드로이해가능하게..주석x)
    const basePrice = order.quantity * order.itemPrice;
    const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
    return basePrice - discount + shipping;
    // return (
    //   order.quantity * order.itemPrice -
    //   Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    //   Math.min(order.quantity * order.itemPrice * 0.1, 100)
    // );
  }

  
  //-----------------------------------------------------------------------------

  export class Order {
    #data;
    constructor(aRecord) {
      this.#data = aRecord;
    }
  
    get quantity() {
      return this.#data.quantity;
    }
    get itemPrice() {
      return this.#data.itemPrice;
    }
  
    get price() {
      return this.basePrice - this.discount + this.shipping;
    }
    get basePrice() {
      return this.quantity * this.itemPrice;
    }
    get discount() {
      return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
    }
    get shipping() {
      return Math.min(this.quantity * this.itemPrice * 0.1, 100);
    }
  }
  // export class Order {
  //   constructor(aRecord) {
  //     this._data = aRecord;
  //   }
  
  //   get quantity() {
  //     return this._data.quantity;
  //   }
  //   get itemPrice() {
  //     return this._data.itemPrice;
  //   }
  
  //   get price() {
  //     return (
  //       this.quantity * this.itemPrice -
  //       Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
  //       Math.min(this.quantity * this.itemPrice * 0.1, 100)
  //     );
  //   }
  // }
  