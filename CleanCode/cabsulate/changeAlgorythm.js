//subject 알고리즘 교체하기 . //함수도 캡슐화다 . 파이프라인으로 간단화.

function foundPerson(people) {
    const candidates = ['Kent', 'Don', 'John'];
    return people.find((p) => candidates.includes(p) || '');
  }
  
  console.log(foundPerson(['John']));
  console.log(foundPerson(['Don', 'John']));
  console.log(foundPerson(['Kent', 'Don', 'John']));
  console.log(foundPerson(['Lisa', 'Don', 'Tom']));
  
  // function foundPerson(people) {
  //   for (let i = 0; i < people.length; i++) {
  //     if (people[i] === 'Don') {
  //       return 'Don';
  //     }
  //     if (people[i] === 'John') {
  //       return 'John';
  //     }
  //     if (people[i] === 'Kent') {
  //       return 'Kent';
  //     }
  //   }
  //   return '';
  // }
  
  // console.log(foundPerson(['John']));
  // console.log(foundPerson(['Don', 'John']));
  // console.log(foundPerson(['Kent', 'Don', 'John']));
  // console.log(foundPerson(['Lisa', 'Don', 'Tom']));
  