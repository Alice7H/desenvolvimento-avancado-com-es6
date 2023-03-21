function Car() {
  this.foo = 'bar';
}
console.log(new Car()); // não funciona com arrow function

var sumOld = function (a, b) {
  return a + b;
}

// Arrow functions
var print = value => "Valor " + value;
var sum = (a, b) => a + b;
var createObj = () => ({ test: 123 });
var Car2 = () => { this.foo = 'bar'; }

console.log(sumOld(5, 2));
console.log(sum(5, 2));
console.log(print("teste"));
console.log(createObj());


//  Hoisting
console.log(test(12));
function test(valor) {
  console.log(valor);
}

// console.log(test2(12));
// var test2 = (valor) => console.log(valor);


var obj = {
  showContext: function showContext() {
    // this.log('teste');
    var _that = this;
    setTimeout(function () {
      // console.log(this); // contexto global
      // this.log('after  1000ms');
      _that.log('after  1000ms');
    }, 1000);
  },
  log: function log(value) {
    console.log(value);
  }
}
obj.showContext();

// Com arrow function:
var obj = {
  showContext: function showContext() {
    setTimeout(() => {
      this.log('after  1000ms');
    }, 1000);
  },
  log: function log(value) {
    console.log(value);
  }
}
obj.showContext();