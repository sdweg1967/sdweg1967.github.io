function calculateRefinanceSavings() {
  let currentLoanAmount = parseFloat(document.getElementById("currentLoanAmount").value);
  let currentInterestRate = parseFloat(document.getElementById("currentInterestRate").value) / 100 / 12; // месячная ставка
  let newInterestRate = parseFloat(document.getElementById("newInterestRate").value) / 100 / 12; // месячная ставка
  let loanTerm = parseInt(document.getElementById("loanTerm").value);

  // Функция для расчета ежемесячного платежа по кредиту
  function calculateMonthlyPayment(loanAmount, interestRate, loanTerm) {
    let monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    return monthlyPayment;
  }

  let currentMonthlyPayment = calculateMonthlyPayment(currentLoanAmount, currentInterestRate, loanTerm);
  let newMonthlyPayment = calculateMonthlyPayment(currentLoanAmount, newInterestRate, loanTerm);

  let totalSavings = (currentMonthlyPayment - newMonthlyPayment) * loanTerm;

  document.getElementById("refinanceSavings").textContent = "Экономия: " + totalSavings.toFixed(2) + " руб.";
}
