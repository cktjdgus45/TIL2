// 예제 1 --문장 슬라이드 하기.
const pricingPlan = retrievePricingPlan();
const order = retreiveOrder();
let charge;
const chargePerUnit = pricingPlan.unit; //사용하는곳과 근접하게 두는게 좋음.

// 예제 2
function someFunc() {
  let result = availableResources.length === 0 ? createResource() : availableResources.pop();
  allocatedResources.push(result);
  return result;
}
// // 예제 1
// const pricingPlan = retrievePricingPlan();
// const order = retreiveOrder();
// let charge;
// const chargePerUnit = pricingPlan.unit;

// // 예제 2
// function someFunc() { ///정말 비추.
//   let result;
//   if (availableResources.length === 0) {
//     result = createResource();
//     allocatedResources.push(result);
//   } else {
//     result = availableResources.pop();
//     allocatedResources.push(result);
//   }
//   return result;
// }
