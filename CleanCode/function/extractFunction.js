export function printOwing(invoice) { //함수 추출하기 : 함수로쪼개기. 나누기.
    printBanner();
    let outstanding = calculateOutstanding(invoice);
    recordDudate(invoice);
    printDetails(outstanding, invoice);
  }
  
  function printBanner() {
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
  }
  
  function calculateOutstanding(invoice) {
    return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
  }
  
  function recordDudate(invoice) {
    const today = new Date();
    invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );
  }
  
  function printDetails(outstanding, invoice) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }
  
  
  const invoice = {
    orders: [{ amount: 2 }, { amount: 5 }],
    customer: '엘리',
  };
  printOwing(invoice);
  