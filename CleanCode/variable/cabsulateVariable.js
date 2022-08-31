// let defaultOwner = { firstName: '마틴', lastName: '파울러' };

// export function getDefaultOwner() {
//   return defaultOwner;
// }
// let defaultOwner = { firstName: '마틴', lastName: '파울러' };

// export function getDefaultOwner() {
//   return {...defaultOwner};   //주소만 다르게 해서 같은것을 복사.
// }
let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  return defaultOwner;
}

class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get firstName() {
    return this.#firstName;
  }
  //setter 가 없기 때문에 person.fistName = '차' 처럼 변경 불가능
}
