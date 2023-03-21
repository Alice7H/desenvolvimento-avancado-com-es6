function multiply(a, b) {
  a = typeof a === 'undefined' ? 1 : a;
  return a * b;
}
console.log(multiply(5, 5));


// Default function argument
function multiply2(a = 1, b = 1) {
  return a * b;
}
console.log(multiply2(5, 5));

function multiply2(a = 1, b = a) {
  return a * b;
}
console.log(multiply2(5, 5));

// lazy evaluation
function randomNumber() {
  console.log('generating a random number...');
  return Math.random() * 10;
}
function sum(a, b = randomNumber()) {
  return a + b;
}
console.log(sum(5));
console.log(sum(5));
