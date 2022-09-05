//불변성은 좋다 안전성에서 . 그러나 새로운인스턴스를 계속만드는것은 이전데이터가 변경이 안될수도있다.

const customerRepository = new CustomerRepository();
const order = new Order(data.number, customerRepository.registerCustomer(data.customerId));

class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
    // this._customer = new Customer(data.customerId); //id는 고유값인데 매번 새로운것을 생성하는게아니라 , 기존에있다면 기존것을, 없다면 새로 만들기.
    // this._customer = customerRepository.registerCustomer(data.customerId); // 무거운 디펜전시를 가지면 별로다. 외부에서받기.
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;
  constructor() {
    this.#customers = new Map();
  }
  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }
  findCustomer(id) {
    return this.#customers.get(id);
  }
}
