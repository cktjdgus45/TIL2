export class TrackingInformation { //함께 묶여야할것을 너무 나누면 지나치게 세분화한 클래스가 된다. 딱히 역할이 있어보이지 않는데. 전달전달 전달.
    #shippingCompany;
    #trackingNumber;
    constructor(trackingNumber, shippingCompany) {
      this.#trackingNumber = trackingNumber;
      this.#shippingCompany = shippingCompany;
    }
  
    get shippingCompany() {
      return this.#shippingCompany;
    }
  
    set shippingCompany(arg) {
      this.#shippingCompany = arg;
    }
  
    get trackingNumber() {
      return this.#trackingNumber;
    }
  
    set trackingNumber(arg) {
      this.#trackingNumber = arg;
    }
  
    get display() {
      return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
  }
  
  export class Shipment {
    #trackingInformation;
    constructor(trackingInformation) {
      this.#trackingInformation = trackingInformation;
    }
  
    get trackingInfo() {
      return this.#trackingInformation.display;
    }
  
    get trackingInformation() {
      return this.#trackingInformation;
    }
  
    set trackingInformation(trackingInformation) {
      this.#trackingInformation = trackingInformation;
    }
  }
  
  const shipment = new Shipment(new TrackingInformation(999, 'Maersk'));
  console.log(shipment.trackingInfo);
  
  shipment.trackingInformation.shippingCompany = 'COSCO';
  console.log(shipment.trackingInfo);
  
  // export class TrackingInformation {
  //   #shippingCompany;
  //   #trackingNumber;
  //   constructor(trackingNumber, shippingCompany) {
  //     this.#trackingNumber = trackingNumber;
  //     this.#shippingCompany = shippingCompany;
  //   }
  
  //   get shippingCompany() {
  //     return this.#shippingCompany;
  //   }
  
  //   set shippingCompany(arg) {
  //     this.#shippingCompany = arg;
  //   }
  
  //   get trackingNumber() {
  //     return this.#trackingNumber;
  //   }
  
  //   set trackingNumber(arg) {
  //     this.#trackingNumber = arg;
  //   }
  
  //   get display() {
  //     return `${this.shippingCompany}: ${this.trackingNumber}`;
  //   }
  // }
  
  // export class Shipment {
  //   #trackingInformation;
  //   constructor(trackingInformation) {
  //     this.#trackingInformation = trackingInformation;
  //   }
  
  //   get trackingInfo() {
  //     return this.#trackingInformation.display;
  //   }
  
  //   get trackingInformation() {
  //     return this.#trackingInformation;
  //   }
  
  //   set trackingInformation(trackingInformation) {
  //     this.#trackingInformation = trackingInformation;
  //   }
  // }
  
  // const shipment = new Shipment(new TrackingInformation(999, 'Maersk'));
  // console.log(shipment.trackingInfo);
  
  // shipment.trackingInformation.shippingCompany = 'COSCO';
  // console.log(shipment.trackingInfo);
  