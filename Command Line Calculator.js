// calculator.js
const args = process.argv.slice(2);
const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

switch (operator) {
  case '+': console.log(num1 + num2); break;
  case '-': console.log(num1 - num2); break;
  case '*': console.log(num1 * num2); break;
  case '/': console.log(num1 / num2); break;
  default: console.log('Invalid operator');
}
