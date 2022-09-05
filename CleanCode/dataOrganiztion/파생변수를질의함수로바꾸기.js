// 예제 1
class Order {
    // 다른 코드 있다고 가정
    get discountedTotal() {
      return this._basePrice - this._discount; // 바로 계산하는 질의함수.
    }
    set discount(value) {
      this._discount = value;
    }
    // set discount(value) { //discount 를 set할 뿐인데 . 다른필드의 값까지 업데이트되는건 BAD.
    //   const old = this._discount;
    //   this._discount = value;
    //   this._discountedTotal += old - value;
    // }
  }
  
  // 예제 2
  class ProductionPlan {
    // 다른 코드 있다고 가정
    get production() {
      return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }
    applyAdjustment(adjustment) {
      this._adjustments.push(adjustment);
    }
    // applyAdjustment(adjustment) {
    //   this._adjustments.push(adjustment);
    //   this._production += adjustment.amount;
    // }
  }
  