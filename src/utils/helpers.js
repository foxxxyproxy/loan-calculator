const validationMessages = {
  product: "Please select the Product",
  legal: "Please select the Legal",
  amount: "Please select the Loan amount",
};

export function getValidationMessage(field) {
  return validationMessages[field];
}
