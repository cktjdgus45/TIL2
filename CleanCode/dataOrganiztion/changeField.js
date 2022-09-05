//필드이름바꾸기. //name보다 title이 더 나은것같을때. 외부 api 만 title 로 변경하기.
class Organization {
    constructor(data) {
      this.#name = data.name;
      this.#country = data.country;
    }
    get title() {
      return this.#name;
    }
    set title(value) {
      this.#name = value;
    }
    get country() {
      return this.#country;
    }
    set country(value) {
      this.country = value;
    }
  }
  const organization = new Organization({
    name: '드림코딩',
    country: '대한민국',
  });
  
  // class Organization {
  //   constructor(data) {
  //     this._name = data.name;
  //     this._country = data.country;
  //   }
  //   get name() {
  //     return this._name;
  //   }
  //   set name(value) {
  //     this._name = value;
  //   }
  //   get country() {
  //     return this._country;
  //   }
  //   set country(value) {
  //     this._country = value;
  //   }
  // }
  // const organization = new Organization({
  //   name: '드림코딩',
  //   country: '대한민국',
  // });
  