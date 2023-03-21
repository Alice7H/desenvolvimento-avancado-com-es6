// Nomes de propriedade calculados
var propName = "teste";
var objeto = {};
objeto[propName + "concat"] = 'prop value';
console.log(objeto);

var objeto2 = {
  [propName + "concat"]: 'prop value'
};
console.log(objeto2);


// Chave e Função abreviada
var prop2 = 'DIO';
function method1() {
  console.log('method called');
}

var obj = {
  prop1: 'Digital Innovation One',
  prop2,
  method1,
  sum: function sum(a, b) {
    return a + b;
  },
  sum2(a, b) {
    return a + b;
  }
}

obj.method1();
console.log(obj.sum(1, 2));
console.log(obj.sum2(1, 2));

console.log(obj);