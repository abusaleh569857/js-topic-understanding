function monthlySavings(payments, monthlyCost) {
  if (!Array.isArray(payments) || typeof monthlyCost !== "number") {
    return "invalid input";
  } else {
    let totalCost = 0;
    for (let payment of payments) {
      if (payment < 3000) {
        totalCost += payment;
      } else {
        payment = payment - (payment * 20) / 100;
        totalCost += payment;
      }
    }
    let savings = totalCost - monthlyCost;
    if (savings >= 0) {
      return savings;
    }
    return "Earn More";
  }
}
let payments = [900, 2700, 3400, 6500];
let monthlyCost = 5000;
let totalSavings = monthlySavings(payments, monthlyCost);
console.log(totalSavings);
