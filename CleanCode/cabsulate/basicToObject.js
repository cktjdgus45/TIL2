// export class Order {
//   constructor(data) {
//     this.priority = data.priority;
//   }
// }

// const orders = [
//   new Order({ priority: 'normal' }),
//   new Order({ priority: 'high' }),
//   new Order({ priority: 'rush' }),
// ];

// const highPriorityCount = orders.filter(
//   (o) => 'high' === o.priority || 'rush' === o.priority//기본형
// ).length;

//기본형을 객체로 바꾸기.

export class Order {
    constructor(data) {
      this.priority = data.priority;
    }
    isHightPriority() {
      return 'high' === this.priority || 'rush' === this.priority //로직이 굳이 외부에있을필 x.
    }
  }
  
  class Priority {
    #value;
    constructor(value) {
      if (Priority.legalValues().includes(value)) {
        this.#value = value;
      } else {
        throw new Error(`${value} is invalid for Priority`);
      }
    }
    static legalValues() {
      return ['low', 'normal', 'high', 'rush'];
    }
  }
  
  const orders = [
    new Order({ priority: 'normal' }),
    new Order({ priority: 'high' }),
    new Order({ priority: 'rush' }),
  ];
  
  const highPriorityCount = orders.filter(
    (o) => o.isHightPriority() //객체
  ).length;