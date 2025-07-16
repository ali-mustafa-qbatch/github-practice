function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b != 0) {
    return a / b;
  }
  return -1;
}

module.exports = { add, divide };
