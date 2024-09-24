function getInputvalue(id) {
  return parseFloat(document.getElementById(id).value);
}

function validationInput(id, value) {
  if (value < 0 || isNaN(value)) {
    document.getElementById(id).classList.remove("hidden");
    return;
  } else {
    document.getElementById(id).classList.add("hidden");
  }
}

function historyCardUpdate(id, amount) {
  return (document.getElementById(id).innerText = amount);
}

function historyCardShow(id) {
  return document.getElementById(id).classList.remove("hidden");
}
function historyRemove(id) {
  return document.getElementById(id).classList.add("hidden");
}

function formatCurrency(value) {
  return value.toFixed(2);
}

function navigate(value) {
  if (value) {
    document.getElementById("expense-form").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");


    document.getElementById("history-tab").classList.remove("bg-gradient-to-r","from-blue-500","to-purple-600","text-white");

    document.getElementById("assistant-tab").classList.add("bg-gradient-to-r","from-blue-500","to-purple-600","text-white");

  } else {
    document.getElementById("expense-form").classList.add("hidden", "text-gray-600");
    document.getElementById("history-section").classList.remove("hidden");


    document.getElementById("history-tab").classList.add("bg-gradient-to-r","from-blue-500","to-purple-600","text-white");

    document.getElementById("assistant-tab").classList.remove("bg-gradient-to-r","from-blue-500","to-purple-600","text-white");

  }
}
 function  emtyIputValue(){
  document.getElementById("income").value = "";
  document.getElementById("software").value = "";
  document.getElementById("courses").value = "";
  document.getElementById("internet").value = "";
  document.getElementById("savings").value = "";
 }