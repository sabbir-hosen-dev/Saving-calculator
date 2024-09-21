function historyAdd(income, total, balance) {


  historyCardUpdate("total-expenses", total);
  historyCardUpdate("balance", balance);

  // let savings = getInputvalue("savings");
  // validationInput("savings-errorr",savings);
}

function addToHistory(income, totalExpenses, balance,count) {
  
  historyCardShow("results")
  historyCardShow("history-section")

  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-white p-3 rounded-md border-l-2 border-indigo-500";
  historyItem.innerHTML = `
        <p class="text-xs text-gray-500">Serial: ${count}</p>
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">Income: $${formatCurrency(income)}</p>
        <p class="text-xs text-gray-500">Expenses: $${formatCurrency(totalExpenses)}</p>
        <p class="text-xs text-gray-500">Balance: $${formatCurrency(
          balance
        )}</p>
    `; 
  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}

let count = 1;

function calculateAmount() {
  const income = getInputvalue("income");
  const software = getInputvalue("software");
  const courses = getInputvalue("courses");
  const internet = getInputvalue("internet");

  validationInput("income-error", income);
  validationInput("software-error", software);
  validationInput("courses-error", courses);
  validationInput("internet-error", internet);

  let total = software + courses + internet;
  let balance = income - total;

  const result = {
    income: income,
    total:total,
    balance:balance
  }

  return result;
}

calculate.addEventListener("click", function (e) {
  e.preventDefault();

  let result = calculateAmount();
  
  const {income, total, balance} = result

  if (total > balance) {
    document.getElementById("logic-error").classList.remove("hidden");
    return;
  } else {
   
    document.getElementById("logic-error").classList.add("hidden");

    historyCardShow("total-card")
    historyCardShow("balance-card")


    addToHistory(total, income, balance , count++);

    historyCardUpdate("total-expenses",total)
    historyCardUpdate("balance",balance)
  }
});
