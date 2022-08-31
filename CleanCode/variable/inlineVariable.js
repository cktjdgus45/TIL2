// export function isDeliveryFree(anOrder) {
//   let basePrice = anOrder.basePrice;
//   return basePrice > 1000;
// }
export function isDeliveryFree(anOrder) {
    return anOrder.basePrice > 1000; //굳이 변수로 추출할 필요없다. 간결하고 봐도 알수있어서.
  }
  