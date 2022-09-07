// 예제 1 //가장많이실수하고 안좋아하는 플래그인수.

function setWidth(value) {
    this._width = value;
  }
  function setHeight(value) {
    this._height = value;
  }
  
  // function setDimension(name, value) {
  //   if (name === 'height') {
  //     this._height = value;
  //     return;
  //   }
  //   if (name === 'width') {
  //     this._width = value;
  //     return;
  //   }
  // }
  
  // 예제 2
  class Concert {
    regularBook(customer) { } //isPremium 나쁜플래그.
    premiumBook(customer) { } //isPremium 나쁜플래그.
    #book(customer, isPremium) //내부적으로는 중복되는게많다면 ..가능.
  }
  // class Concert {
  //   book(customer, isPremium) {}
  // }
  
  // 예제 3
  function switchOn();
  function switchOff(); //on boolean으로 매개변수 전달보단 , 두개의함수생성.
  // function setSwitch(on);
  