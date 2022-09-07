// 예제 1 //문제점 이름에 맞는 행동을 하고는 있지만 , 두가지 일을 하고있다. And.
//1.함수만들때 side effect부작용 없이 만들어야한다. ex 계산한다 해놓고 , 데이터베이스 업데이트 등. 배신자 같은 함수.
// function totalOutstandingAndSendBill() { 
    function getTotalOutstanding() { 
        const result = customer.invoices.reduce(
          (total, each) => each.amount + total,
          0
        );
        // sendBill();
        return result;
      }
      
      function sendBill(){ // <- 추가
        //bill 보냄
      }
      
      // 예제 2
      export function alertForMiscreant(people, alarm) {
        // for (const p of people) {
        //   if (p === 'Don') {
        //     setOffAlarms(alarm, p);
        //     return 'Don';
        //   }
        //   if (p === 'John') {
        //     setOffAlarms(alarm, p);
        //     return 'John';
        //   }
        // }
        const miscreant = findMiscreant(peoeple);
        function findMiscreant(people){
          for (const p of people) {
            if (p === 'Don') {
              return 'Don';
            }
            if (p === 'John') {
              return 'John';
            }
          }
        }
        setOffAlarms(alarm,miscreant);
      }
      
      function setOffAlarms(alarm, p) {
        alarm.setOff('Found Miscreant ' + p);
      }
      