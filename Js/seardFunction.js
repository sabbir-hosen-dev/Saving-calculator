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

function formatCurrency(value) {
  return value.toFixed(2);
}
