// index.js
const validator = require('validator');

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  'Is mango@mail.com a valid email?: ',
  validateEmail('mango@mail.com'),
);

console.log(
  'Is Mangozedog.com a valid email?: ',
  validateEmail('Mangozedog.com'),
);

// myModule.js
const sqrt = Math.sqrt;
export const square = x => x * x;
export const diag = (x, y) => sqrt(square(x) + square(y));

// main.js
import { square, diag } from './path/to/myModule';

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
