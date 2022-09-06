for (const p of people) {
    if (p === 'Don') {
      sendAlert();
      found = true;
      break; //boolean flag 대신에 찾았다면 break; 사용.
    }
  }
  
  // for (const p of people) {
  //   if (!found) {
  //     if (p === 'Don') {
  //       sendAlert();
  //       found = true;
  //     }
  //   }
  // }
  