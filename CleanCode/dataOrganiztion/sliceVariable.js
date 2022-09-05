//변수 쪼개기. //let보단 const , 인자바로변경 x ->변수에담고 그변수를반환.

// 예제 1
const around = 2 * (height + width);
console.log(around);
area = height * width;
console.log(area);

// 예제 2
function distanceTravelled(scenario, time) {
  let result; //mutable 하기에 let으로 둠.
  const primaryAccelation = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * primaryAccelation * primaryTime * primaryTime; // 전파된 거리
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    const primaryVelocity = primaryAccelation * scenario.delay;
    const secondaryAccelation = primaryAccelation = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAccelation * secondaryTime * secondaryTime;
  }
}

// 예제 3
function discount(inputValue, quantity) { //함수의 인자값을 바로 변경하는건 정말 나쁜 습관.
  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) result -= 1;
  return result;
}

// // 예제 1
// let temp = 2 * (height + width);
// console.log(temp);
// temp = height * width;
// console.log(temp);

// // 예제 2
// function distanceTravelled(scenario, time) {
//   let result;
//   let acc = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
//   let primaryTime = Math.main(time, scenario.delay);
//   result = 0.5 * acc * primaryTime * primaryTime; // 전파된 거리
//   let secondaryTime = time - scenario.delay;
//   if (secondaryTime > 0) {
//     // 두 번째 힘을 반영해 다시 계산
//     let primaryVelocity = acc * scenario.delay;
//     acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
//     result +=
//       primaryVelocity * secondaryTime +
//       0.5 * acc * secondaryTime * secondaryTime;
//   }
// }

// // 예제 3
// function discount(inputValue, quantity) {
//   if (inputValue > 50) inputValue = inputValue - 2;
//   if (quantity > 100) inputValue = inputValue - 1;
//   return inputValue;
// }
