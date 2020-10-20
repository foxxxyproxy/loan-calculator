const validationMessages = {
  product: "Please select the Product",
  legal: "Please select the Legal",
  amount: "Please select the Loan amount",
  duration: "Please select the Loan duration",
};

export function getValidationMessage(field) {
  return validationMessages[field];
}
