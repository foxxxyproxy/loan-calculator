const validationMessages = {
  product: "Please select the Product",
  legal: "Please select the Legal",
  amount: "Please select the Loan amount",
  duration: "Please select the Loan duration",
};

export function getValidationMessage(field) {
  return validationMessages[field];
}

export function getOffer({ amount, duration, maxDuration }) {
  return new Calc(amount, duration, maxDuration).calcInterestRate();
}

export class Calc {
  constructor({ amount, duration, maxDuration }) {
    this.amount = amount; //loan amount
    this.duration = duration; //loan duration
    this.maxDuration = maxDuration; //max loan duration

    if (amount <= 50000) {
      this.minRate = 6; //min interest rate(%)
      this.maxRate = 8; //max interest rate(%)
    } else if (amount <= 150000) {
      this.minRate = 5;
      this.maxRate = 7;
    } else if (amount <= 500000) {
      this.minRate = 4;
      this.maxRate = 6;
    }
  }

  getMaxRate() {
    return this.maxRate;
  }

  getMinRate() {
    return this.minRate;
  }

  /**
   * y = kx + b
   * y - interest rate
   * x - duration
   *
   * b = minRate
   * k = (maxRate - minRate)/maxDuration
   */
  calcInterestRate() {
    const interestRate =
      (this.maxRate - this.minRate) * (this.duration / this.maxDuration) +
      this.minRate;
    console.log({ interestRate });
    return Math.floor(interestRate * 100) / 100; //two digits after dot
  }
}
