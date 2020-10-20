const validationMessages = {
  product: "Please select the Product",
  legal: "Please select the Legal",
  amount: "Please select the Loan amount",
  duration: "Please select the Loan duration",
};

export function getValidationMessage(field) {
  return validationMessages[field];
}

export function calc({
  product,
  legal,
  amount,
  duration,
  maxAmount,
  maxDuration,
}) {
  let minRate = 0; //min interest rate(%)
  let maxRate = 0; //max interest rate(%)

  if (amount < 50000) {
    minRate = 6;
    maxRate = 8;
  } else if (amount < 150000) {
    minRate = 5;
    maxRate = 7;
  } else if (amount < 500000) {
    minRate = 4;
    maxRate = 6;
  }

  /**
   * y = kx + b
   * y - interest rate
   * x - duration
   *
   * b = minRate
   * k = (maxRate - minRate)/maxDuration
   */
  const interestRate = (maxRate - minRate) * (duration / maxDuration) + minRate;

  return { amount, maxRate, interestRate };
}
