export function ascentVelocity(points, totalMinutes) {
    function calculateAscent() {
      for (let i = 1; i < points.length; i++) {
        let result = 0;
        const verticalChange = points[i].elevation - points[i - 1].elevation;
        result += verticalChange > 0 ? verticalChange : 0;
      }
      return result
    }
    // function calculateAscent() { // 계산한다해놓고 외부변수를 업데이트 함.
    //   for (let i = 1; i < points.length; i++) {
    //     const verticalChange = points[i].elevation - points[i - 1].elevation;
    //     totalAscent += verticalChange > 0 ? verticalChange : 0;
    //   }
    // }
  
    // let totalAscent = 0;
    let totalAscent = calculateAscent([{ elevation: 10 }, { elevation: 20 }]);
  
    return totalAscent / totalMinutes;
  }
  
  // export function ascentVelocity(points, totalMinutes) { //side effect 를 야기하는 나쁜함수./
  //   function calculateAscent() {
  //     for (let i = 1; i < points.length; i++) { 
  //       const verticalChange = points[i].elevation - points[i - 1].elevation;
  //       totalAscent += verticalChange > 0 ? verticalChange : 0;
  //     }
  //   }
  
  //   let totalAscent = 0;
  //   calculateAscent([{ elevation: 10 }, { elevation: 20 }]);
  
  //   return totalAscent / totalMinutes;
  // }
  