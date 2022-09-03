export function reportYoungestAgeAndTotalSalary(people) { //반복문 쪼개기.
    function youngestAge() {
      return Math.min(...people.map((p) => p.age));
    }
    function totalSalary() {
      return people.reduce((total, p) => (total += p.salary), 0);
    }
  
    return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;
  }
  
  // export function reportYoungestAgeAndTotalSalary(people) {
  //   let youngest = people[0] ? people[0].age : Infinity;
  //   let totalSalary = 0;
  //   for (const p of people) {
  //     if (p.age < youngest) youngest = p.age;
  //     totalSalary += p.salary;
  //   }
  
  //   return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
  // }
  