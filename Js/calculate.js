function historyAdd(income, total, balance) {


  historyCardUpdate("total-expenses", total);
  historyCardUpdate("balance", balance);

  // let savings = getInputvalue("savings");
  // validationInput("savings-errorr",savings);
}

function addToHistory(income, totalExpenses, balance,count) {
  
  historyCardShow("results")

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

    // losicCheck(total,balance);
    
  if (total > balance) {
    document.getElementById("logic-error").classList.remove("hidden");
    return;
  } else {
   
    document.getElementById("logic-error").classList.add("hidden");

    historyCardShow("total-card")
    historyCardShow("balance-card")
    historyRemove("savings-card")
    historyRemove("remaining-card")


    addToHistory(total, income, balance , count++);

    historyCardUpdate("total-expenses",total)
    historyCardUpdate("balance",balance)
    emtyIputValue();
  }
});

const savings = document.getElementById("calculate-savings");
const savingsError = document.getElementById("savings-error");

savings.addEventListener("click", function(){
  const savingValue = document.getElementById("savings").value;

  if(savingValue == "" || isNaN(savingValue)){
    savingsError.classList.remove("hidden")
  }
  else{
    savingsError.classList.add("hidden")
  }

  let result = calculateAmount();
  
  const {income, total, balance} = result

    // losicCheck(total,balance);
    
  if (total > balance) {
    document.getElementById("logic-error").classList.remove("hidden");
    return;
  } else {


   
    document.getElementById("logic-error").classList.add("hidden");

    historyCardShow("total-card")
    historyCardShow("balance-card")
    historyCardShow("savings-card")
    historyCardShow("remaining-card")


    addToHistory(total, income, balance , count++);

    const savingAmout =(savingValue * income) / 100;
    let remaining = balance - savingAmout


    historyCardUpdate("total-expenses",total)
    historyCardUpdate("balance",balance)
    historyCardUpdate("savings-amount",savingAmout)
    historyCardUpdate("remaining-balance",remaining)
  }

  emtyIputValue();

})



const history = document.getElementById("history-tab");
const assistent = document.getElementById("assistant-tab");

assistent.addEventListener("click", function () {
  navigate(true)
})
history.addEventListener("click", function () {
  navigate(false)
})