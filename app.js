const { add, divide, multiply, multiply } = require('./utils/math');
const { log } = require('./utils/logger');
log("---Executing math functions---");
console.log('Sum:', add(2, 3));
console.log('Divide:', divide(2, 3));
console.log('Multiply:', multiply(2, 3));