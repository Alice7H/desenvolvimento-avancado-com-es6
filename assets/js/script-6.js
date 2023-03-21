// symbols
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');
console.log(uniqueId === uniqueId2);

const obj = {
  [uniqueId]: 'Hello',
  nome: 'Maria'
};
console.log(obj);
// No console existe diferença de retorno
// Object.keys(obj);
// Object.getOwnPropertySymbols(obj);

//Well known symbols
Symbol.iterator;
Symbol.split;
Symbol.toStringTag

const arr = [1, 2, 3, 4];
const str = "Digital Innovation One";

const iteracao = arr[Symbol.iterator]().next();
console.log("Primeira iteração do arr: ", iteracao);

for (let value of arr) {
  console.log(value);
}

// iterators
// Ex de consumo de iteração
const obj2 = {
  value: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        i++;

        return {
          value: this.value[i - 1],
          done: i > this.value.length
        };
      }
    };
  }
};
const it2 = obj2[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());

// O iterator possibilita o for of e o spread operator
for (let value of obj2) {
  console.log(value);
}
const arr2 = [...obj2];
console.log(arr2);

// generators

function* hello() {
  console.log('Hello');
  yield 1;

  console.log('From');
  const value = yield 2;

  console.log(value);
}
const iter = hello();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next('outside'));

function* naturaNumbers() {
  let number = 0;
  while (true) {
    yield number;
    number++;
  }
}

const it3 = naturaNumbers();
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());

const obj3 = {
  values: ['um', 'dois', 'três', 'quatro'],
  *[Symbol.iterator]() {
    for (var i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  }
}
for (let value of obj3) {
  console.log(value);
}
