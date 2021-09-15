//# is short for [id = "weight"], also all ids hove to be unique
const principalBox = document.querySelector("#principal")
const interestRateBox = document.querySelector("#interest_rate")
const compoundBox = document.querySelector("#compound")
const timeBox = document.querySelector("#time")
const amountSpan = document.querySelector("#amount")

function computerCompoundInterest() {
  const principal = principalBox.value
  const interestRate = interestRateBox.value
  const compound =compoundBox.value
  const time = timeBox.value
  const amount = principal * (1 + (interestRate/compound)) ** (compound*time)
  amountSpan.textContent = amount
}

principalBox.addEventListener('input', computerCompoundInterest)
interestRateBox.addEventListener('input', computerCompoundInterest)
compoundBox.addEventListener('input', computerCompoundInterest)
timeBox.addEventListener('input', computerCompoundInterest)