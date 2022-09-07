//내부모듈끼리의 응집도높을땐 질의함수를 통해 서로 접근하고 , 외부모듈끼리는 바로 외부에 접근하는것은 하지말고 , 전달받을수있도록,

targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(aPlan, currentTemperature) {
  currentTemperature = currentTemperature;
  // ...
}

// targetTemperature(aPlan);

// // 다른모듈에 있는 함수라고 가정
// function targetTemperature(aPlan) {
//   currentTemperature = thermostat.currentTemperature;
//   // ...
// }
