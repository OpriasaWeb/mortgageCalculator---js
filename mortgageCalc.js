// Mortgage calculator


const housePrice = 1500000; // set price
const downPayment = 450000; // the down payment

// total of price after downpayment
const valueRemainderAmount = housePrice - downPayment; 

// Here, we only get the interest but not adding it
const interestRate = (6 / 100) * valueRemainderAmount; 

// The result of the interest plus the total price after downpayment
const totalPayment = valueRemainderAmount + interestRate;

// It depends on the user how many months they want but in this case we set it as
// default 36 or 3 years
const setMonthlyPayment = 36;

// Now, as last step we get the total payment divided by the set months

const payment = totalPayment / setMonthlyPayment; // 36 months = 3 years

console.log(payment);