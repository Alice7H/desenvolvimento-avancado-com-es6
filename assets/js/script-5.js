var arr = [
  'Apple',
  'Banana',
  'Orange',
  ['Tomato'],
  {
    name: 'Pineapple',
    type: 'fruit'
  }
];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];
var fruit1 = arr[4].name;

var obj = {
  name: 'Megan',
  pet: 'dog',
  music: 'o sol da meia noite - rosa de saron',
  movie: 'hana yori dango',
  props: {
    age: 26,
    favoriteColors: ['black', 'white', 'alizarin'],
  }
}
var propNome = obj.name;
var age = obj.props.age;
var color = obj.props.favoriteColors[0];

// Destructuring assignment
let [apple2, banana2, orange2, [tomato2], { name: fruitName }] = arr;

console.log(apple, apple2);
console.log(tomato, tomato2);

let {
  name: propNome2,
  movie,
  props: {
    age: age2,
    favoriteColors: [
      color1,
      nomePersonalizadoDaCor
    ]
  }
} = obj;
// this variable don't modify the object property
//var propNome2 = 'Bob';

console.log(
  propNome,
  propNome2,
  movie,
  age,
  age2,
  color,
  color1,
  nomePersonalizadoDaCor,
  fruit1,
  fruitName);

// functions
function sum(arr) {
  var a = arr[0];
  var b = arr[1];
  return a + b;
}

function sum2([a, b] = [0, 0]) {
  return a + b;
}
function sum3({ a, b } = { a: 0, b: 0 }) {
  return a + b;
}
console.log(sum([5, 5]));
console.log(sum2([5, 5]));
console.log(sum2());
console.log(sum3({ a: 5, b: 5 }));
console.log(sum3({ a: null, b: null }));