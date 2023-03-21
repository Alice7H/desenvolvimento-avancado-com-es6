// declarative way
function sum(a,b){
  var value = 0;
  for(var i=0; i < arguments.length; i++){
    value += arguments[i];
  }
  return value;
}

// rest operator ...
function sum2(...args){
  return args.reduce((acc,value)=> acc + value, 0);
}

const sum3 = () => { console.log(arguments); }

const sum4 = (a,b, ...rest) => {
  console.log(a, b, rest);
}

console.log(sum(5,5,2,3,1));
console.log(sum2(5,5,2,3,1));
// sum3(5,5,2,3,1); /* não funciona com arrow function */
sum4(5,5,5,2,3);



// spread operator
// strings, arrays, objects, iterators objects
const multiply = (...args) => args.reduce((acc, value) => {acc * value, 1});

const sum5 = (...rest) => {
  // return multiply.apply(undefined, rest);
  return multiply(...rest);
}

const str = "Digital Innovation One";
const arr = [1, 2, 3, 4, 5];

function logArgs() {
  console.log(arguments);
}

function logArgs2(a,b,c) {
  console.log(a,b,c);
}


const arr2 = arr.concat([6,7,8]);
const arr3 = [...arr, 6,7,8];
const arr4 = [...arr, ...arr2, 0, 0, 0]

console.log(multiply(5,5,2,3))
logArgs(...str);
logArgs(...arr);
logArgs2(...arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);

// spread com objetos
const obj = {
  test: 123
};
const obj2 = {
  ...obj,
  test2: 'hello'
}
const obj3 = {
  test: 456
}
const objMerged = {
  ...obj,
  ...obj3
}
console.log(obj2);
console.log(obj3);
console.log(objMerged);

// Generate clone prevent change value in first object,
// but not in nested object
const objeto1 = {
  test: 123,
  subObject: {
    test: 123
  }
}
// shallow clone
//const objeto2 = {...objeto1}};
// Works
const objeto2 = {...objeto1, subObject: {...objeto1.subObject}};

objeto2.test = 456;
objeto2.subObject.test = 321;

console.log(objeto1);
console.log(objeto2);