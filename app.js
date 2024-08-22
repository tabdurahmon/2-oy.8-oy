function calculateRepayments() {
  const amount = parseFloat(document.getElementById("amount").value);
  const term = parseFloat(document.getElementById("term").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const mortgageType = document.querySelector(
    'input[name="mortgageType"]:checked'
  ).value;

  if (
    !isNaN(amount) &&
    amount > 0 &&
    !isNaN(term) &&
    term > 0 &&
    !isNaN(rate) &&
    rate > 0
  ) {
    let monthlyPayment;

    if (mortgageType === "repayment") {
      const monthlyRate = rate / 100 / 12;
      const totalPayments = term * 12;
      monthlyPayment =
        (amount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);
    } else if (mortgageType === "interestOnly") {
      const monthlyRate = rate / 100 / 12;
      monthlyPayment = amount * monthlyRate;
    }

    document.getElementById(
      "results"
    ).innerText = `Your monthly repayments: $${monthlyPayment.toFixed(2)}`;
  } else {
    document.getElementById("results").innerText =
      "Please fill out all fields correctly.";
  }
}
