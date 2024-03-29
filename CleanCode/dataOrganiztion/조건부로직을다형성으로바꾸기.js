export function plumages(birds) { //switch 에서 type 별로된다면 class의 다형성으로 하는게 낫지 않을지 판단.
    let map = birds.map((b) => [b.name, b.plumage]);
    let map1 = new Map(map);
    return map1;
  }
  export function speeds(birds) {
    return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
  }
  
  class Bird {
    #name;
    constructor(name) {
      this.#name = name;
    }
  
    get name() {
      return this.#name;
    }
  
    get plumage() {
      return 'unknown'
    }
    get airSpeedVelocity() {
      return null;
    }
  }
  class EuropeanSwallow extends Bird {
    constructor() {
      super('EuropeanSwallow');
    }
  
    get plumage() {
      return 'average';
    }
    get airSpeedVelocity() {
      return 35;
    }
  }
  class AfricanSwallow extends Bird {
    constructor() {
      super('AfricanSwallow');
    }
  
    get plumage() {
      return bird.numberOfCoconuts > 2 ? 'tired' : 'average';
    }
    get airSpeedVelocity() {
      return 40 - 2 * bird.numberOfCoconuts;
    }
  }
  class NorwegianBlueParrot extends Bird {
    constructor() {
      super('NorwegianBlueParrot');
    }
  
    get plumage() {
      return bird.voltage > 100 ? 'scorched' : 'beautiful';
    }
    get airSpeedVelocity() {
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    }
  }
  
  // export function plumages(birds) {
  //   let map = birds.map((b) => [b.name, plumage(b)]);
  //   let map1 = new Map(map);
  //   return map1;
  // }
  // export function speeds(birds) {
  //   return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
  // }
  // export function plumage(bird) {
  //   switch (bird.type) {
  //     case 'EuropeanSwallow':
  //       return 'average';
  //     case 'AfricanSwallow':
  //       return bird.numberOfCoconuts > 2 ? 'tired' : 'average';
  //     case 'NorwegianBlueParrot':
  //       return bird.voltage > 100 ? 'scorched' : 'beautiful';
  //     default:
  //       return 'unknown';
  //   }
  // }
  // export function airSpeedVelocity(bird) {
  //   switch (bird.type) {
  //     case 'EuropeanSwallow':
  //       return 35;
  //     case 'AfricanSwallow':
  //       return 40 - 2 * bird.numberOfCoconuts;
  //     case 'NorwegianBlueParrot':
  //       return bird.isNailed ? 0 : 10 + bird.voltage / 10;
  //     default:
  //       return null;
  //   }
  // }
  