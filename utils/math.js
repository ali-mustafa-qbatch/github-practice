function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b != 0) {
    return a / b;
  }
  return -1;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, divide, multiply };
